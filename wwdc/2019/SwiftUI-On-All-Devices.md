---
layout: page
title: SwiftUI On All Devices
---
# SwiftUI On All Devices

{% include_relative BeforeEachFile.md %}

Different appearances for each device.
There is no one size fits all, but can use SwiftUI across all and share code where it makes sense.

Learn once, use anywhere.
Apple built an app across all devices: Landmarks. Actually 4 apps ;)

iOS Version avialble as Tutorial on SwiftUI.

## Apple TV

Streamlined navigation
Good for media
Longer time, from a distance, with multiple people

Use focus to make the content interactable by the remote. SwiftUI already does that for sysyem controls.

[Video @ 11:30]
For custom controls use
let canBecomeFocused: Bool
var body:some View{
  ...
.focusable(canBecomeFocused){isFocused in
//focus changed
}
.onPlayPauseCommand {

}
.onExitCommand{

}
}

On TV NavigationView is the parent of TabView. The tabbar as you navigate deep into the content will disappear. we want fullscreen experiences.

[Video @ 15:00]

## Mac

Use .controlSize() for small controls

Bind tabs to keyboard shortcut. Add it to menubar from storyboard
Add commands:
extesion Command{
  static let showExplore = Command(Selector(("showExplore:")))
    static let showHikes = Command(Selector(("showHikes:")))
  static let showTours = Command(Selector(("showTours:")))
}

TabbedView(selection:$selectedTab){
  ...
}
.onCommand(.showExplore){self.selectedTab=.explore}
.onCommand(.showHikes){self.selectedTab=.hikes}
.onCommand(.showTours){self.selectedTab=.tours}

Touchbar:

MyCustomView().touchbar(//attach it to a view when displayed or its a parent
TouchBar{
  Button(action:toggleFavorite)
}
)


struct SharedLandmarkList<LandmarkRowType:View> : View {
  //...
  var rowProvider: (Landmark) -> LandmarkRowType
  var body:some View{
    return List(selection: $selectedLandmark){
      ForEach(landmarksToDisplay){landmark in
        self.rowProvider(landmark).tag(landmark)
      }
    }
  }
}

In mac code:
struct MacLandmarksList:View{
  var filterCriteria:LandmarkCriteria
  @Binding var selectedLandmark:Landmark?
  var body:some View {
    SharedLandmarkList(
      filterCriteria:filterCriteria,
      selectedLandmark:selectedLandmark
    ){landmark in
      return MacLandmarkRow(landmark:landmark)
    }
  }
}

AppKit to define windows.
Doubleclick to pop out a window

class DetailWindowController<RootView:View>:NSWindowConroller{
  convenience init(rootView:RootView){
    let hostingController=NSHostingController(rootView:rootView.environment(UserData.shared).frame(minWidth:300,minHeight:400)
    )
    let window=NSWindow(contentViewController:hostingController)
    window.setContentSize(NSSize(width:400,height:300))
    self.init(window:window)
  }
}

struct MacLandmarksList:View{
 ...
 var body:someView{
   ...
         return MacLandmarkRow(landmark:landmark)
         .tapAction(count:2){//only double click
  self.showDetail(landmark:landmark)
         }
  }
 }
 func showDetail(landmark:Landmark){
   DetailWindowManager.shared.showWindow(for:landmark)
 }
}

## Apple Watch

Actions with 3 taps of fewer

Use .digitalCrownRotation

[Video @ 36:00]

.listStyle(.carousel)

Text(..).multilineTextAlignment(.center).lineLimit(nil)

Example:
animating images
[Video @ 41:40]

struct SlideShow:View{
  let imageNames:[String]
  @State var currentIndex:Int=0
  var bosy:some View{
    ZStack{
      TourImage(name:self.imageNames[self.currentIndex]).id(self.currentIndex).transition(.slide)
    }.showNextImage(after:2.0){
      self.nextImageIndex()
    }
  }
  func nextImageIndex(){
    let nextIndex = (currentIndex+1)% imageNames.count
    withAnimation(.fluidSpring()){
      currentIndex=nextIndex
    }
  }
}

Source
[SwiftUI On All Devices](https://developer.apple.com/wwdc19/240)