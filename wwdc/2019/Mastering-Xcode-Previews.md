---
layout: page
title: Mastering Xcode Previews
---

# Mastering Xcode Previews

{% include_relative BeforeEachFile.md %}

Speed of iteration skyrockets.

Can have multiple previews on Different devices

#if DEBUG
public enum CellPreview:PreviewProvider{
  public static var previews:some Views{
    Group {
    Cell(model: .model)
    .previewDevice("iPhone SE"),
    Cell(model: .model)
    .previewDevice("iPhone SE"),
    Cell(model: .model)
    .previewDevice(.sizeThatFits)
    .environment(\.sizeCategory,.extraLarge)
    }
  }
}
#endif


Preview for each category size

#if DEBUG
public enum CellPreview:PreviewProvider{
  public static var previews:some Views{
    ForEach(ContentCategory.allCases()) {
    Cell(model: .model)
    .previewDevice(.sizeThatFits)
    .environment(\.sizeCategory,item)
    .previewDisplayName("\(item)")
    }
  }
}
#endif

⌘ click extract to view and Xcode will automatically extract the component.

## Development Assets
Asset catalog under preview data. Works by just using imageNamed normally

Bottom left pin to lock the preview and edit a different file. You can scroll down to see the file's preview too.

## UIKit Previews

Can have previews in UIKit. Need to  import SwiftUI though.

import SwiftUI
#if DEBUG
struct ViewControllerPreviews:PreviewProvider, UIViewControllerRepresentable {
static ver previews:some View{
  ViewControllerPreviews(model:model)
}
typealias UIViewControllerType = ViewController
func makeUIViewController(context:Context)->ViewController{
  MainStoryboard.loadViewController(for:model)
}
func updateUIViewController(_ uiviewController: ViewController, context:Context){

}
}
#endif

You can use it with both Swift and Objective-C.

Try to use ViewModels. Easier to test with XCTest. Easier to understand when passed into SwiftUI.

Do not instantiate your UI in didFinishLaunchingWithOptions since it gets called each time a preview loads. Use instead the new SceneDelegate.

Source:
[Mastering Xcode Previews](https://developer.apple.com/wwdc19/233)