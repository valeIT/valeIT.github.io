---
layout: page
title: SwiftUI on watchOS - Notifications
---
# SwiftUI on watchOS - Notifications

{% include_relative BeforeEachFile.md %}

Tick on the box to include notifications on a new project.

Notice thattheclass is a subclass of WKUserNotificationHostingController<NotificationView>

Implement the didReceive method to customize your view.
You can for example add notificationActions

```
import SwiftUI
import UserNotifications
class NotificationController:WKUserNotificationHostingController<NotificationView>{
  var mealResponse:MealResponse!
  override var body: NotificationView{
     NotificationView(mealResponse:mealResponse)
  }
    override func didReceive(\_ notification: UINotification){
      let mealResponseInfo = notification.request.content.userInfo['meal'] ?? [:] as! [String:String]
     mealResponse = mealResponse(text: "Your meal arrived")

      notificationActions = [
      UINotificationAction(identifier: "ok", title:"Ok",options:[])
      ]
  }
}
```

NotificationView is a normal SwiftUI view.
