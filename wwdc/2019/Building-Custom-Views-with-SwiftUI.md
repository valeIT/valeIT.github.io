---
layout: page
title: Building Custom Views with SwiftUI
---
# Building Custom Views with SwiftUI

{% include_relative BeforeEachFile.md %}

Sizing it's encapsulated in the view definition:
.frame(width:50,heigh:10)
.aspectRatio(1)

The superview does not force a size. The view decides.

SwiftUI rounds the cooordinates of each view to the nearest pixel to reduce blurriness.

.padding([.leading,.trailing])//uses automatic padding
.padding(10)//explicit padding

--

In SwiftUI unless you mark an image as resizable it uses the image size. Even if you add .frame(width: height: ) the image does not change. The frame extends around the image. The child chooses its own size.

HStack and VStack are the base for everything.
Adapting spacing, baseline spacing and baseline to edge adopt Apple UI guidelines automatically. You can change it if you want. Automatic support for RTL.

Stacks use .center as the default alignment.

To position views they start by taking the available space and dividing it by the number of views. If the views needs less or equal space it takes that space, positions it and return the remainer to be used by other views. The process repeats for all the views in the stack. It finally adds the spacings and it chooses its own size to encompass the children.

Let's force the stack to be on one line: .lineLimit(1)
If there is no space left something will get truncated.
We can set different priorities to decide what. If for example we increase the priority of an element from 0 (the default) to 1 we let the other items truncate
.layoutPriority(1)

--

If you use .bottom instead of center and have different fonts their basiline will not line up, use .lastTextBaseline instead. For non text it will use the bottom of the view as a baseline. We can override it by setting it manually:
Image("20x20_avocado").alignmentGuide(.lastTextBaseline) {
  d in d[.bottom] * 0.927
}

--

HStack{
  VStack{
    Text("⭐⭐⭐⭐⭐")
    Text("5 stars")
  }.font(.caption)
  VStack(alignment: .leading){
    HStack{
      Text("Avocado Toast").font(.title)
      Spacer()
      Image("20x20_avocado")
    }
    Text("Ingredients: Avocado, Almond Butter, Bread, Red Pepper Flakes").font(.caption).lineLimit(1)
  }
}

What if we want to align the baselines of the stars and the title?
We define a custom alignment:
extension VerticalAlignment{
  private enum MidStarAndTitle: AlignmentID{
    static func defaultValue(in d:ViewDimensions)->Length{
      return d[.bottom]
    }
  }
  static let midStarAndTitle = VerticalLignment(MidStarAndTitle.self)
}

And use it:

HStack(alignment: .midStarAndTitle){
  VStack{
    Text("⭐⭐⭐⭐⭐")
    .alignmentGuide(.midStarAndTitle){ d in d[.bottom] /2}
    Text("5 stars")
  }.font(.caption)
  VStack(alignment: .leading){
    HStack{
      Text("Avocado Toast").font(.title)
          .alignmentGuide(.midStarAndTitle){ d in d[.bottom] /2}
      Spacer()
      Image("20x20_avocado")
    }
    Text("Ingredients: Avocado, Almond Butter, Bread, Red Pepper Flakes").font(.caption).lineLimit(1)
  }
}

## CoreGraphics and CoreAnimations in SwiftUI

struct RedCircle: View{
  var body: some View {
    Circle().fill(Color.red)
  }
}

struct GradientView: View{
  var body: some View {
    let spectrum= Gradient(colors: [.red,.yellow,.green,.cyan,.blue,.purple,.red])
    let conic = AngularGradient(gradient:spectrum,center:.center,angle:.degrees(-90))
    //return Circle().fill(conic)
    return Circle().strokeBorder(conic,lineWidth:50)
  }
}

Custom shape:

struct WedgeShape:Shape{
  var wedge:Ring.Wedge
  func path(in rect:CGRect)->Path {
    var p = Path()
    let g = WedgeGeometry(wedge,in:rect)//circle funct
    p.addArc(center:g.cen,radius:g.r0,startingAngle:g.a0,endAngle:g.a1,clockwise:false)
    p.addLine(to:g.topRight)
    p.addArc(center:g.cen,radius:g.r1,startingAngle:g.a1,endAngle:g.a0,clockwise:true)
    p.closeSubpath()
    return p
  }
}

Add animation:

struct WedgeShape:Shape{
  var wedge:Ring.Wedge
  func path(in rect:CGRect)->Path {
    ...
  }
  var animatableData:Ring.Wedge.AnimatableData {
    get { return wedge.animatableData}
    set{ wedge.animatableData=newValue}
  }
}

[In Video: 34:30]
struct RingView:View{
  @EnvironmentObject var ring:Ring
  var body:some View{
    ZStack {
      ForEach(ring.wedgeIDs){ id in
        Wedge(self.ring.wedges[id]!)
        .tapAction{withAnimation{self.ring.deleteWedge(id:id)}}
        .transition(.scaleAndFade)//custom transition
      }
    }
  }
}

[In Video: 36:00]
struct ScaleAndFace:ViewModifier{
  var isActive:Bool
  func body(content:Content)-> some View {
    return content.scaleEddfect(isActive?0.1:1)
    .opacity(isActive?1:0)
  }
}
let scaleAndFace = AnyTransistion.modifier(acti ve:ScaleAndFade(isActive:true),identity:ScaleAndFade(isActive:false))

[In Video: 37:00]
This way though it creates a view for each element. If we have a lot of elements this can be a problem. Can put it inside a drawingGroup() so that everything draws into a single CALayer using Metal.



Source:
[Building Custom Views with SwiftUI](https://developer.apple.com/wwdc19/237)