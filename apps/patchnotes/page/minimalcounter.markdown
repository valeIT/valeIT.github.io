---
layout: page
title: Minimal Counter Patch Notes
---

## 3.0

[From Fall App Updates][3]:
>I've now added sync back. Your existing counters will sync automatically. If you're on the free version as soon as you upgrade everything will sync seamlessly.
>
>Everything should work as before since I've tried to keep the behaviour as close to the original version as possible. You can find more information about it [on the sync announcement post][7].

## 2.2.2

- FIX: Fixed a crah on iPad that affected the Full Version

## 2.2.1

- FIX: Fixed a crash on the full version

## 2.2

- FIX: Fixed a bug while creating a new counter under certain circumstances

## 2.1.1

- FIX: Fixed a rare crash for the free version

## 2.1

- FIX: Fixed a crash on iPad

## 2.0.1

- FIX: Fixed a crash for the free version
- FIX: Fixed a crash while migrating to the full version, if you experience any issue feel free to open a ticket or try using "Restore Purchases". Note that you WON'T be billed again.
- PROMO OVER: The promotion "Try the full version for free" is now over and your app has been converted back to the free version. Hope you enjoyed the free trial. [This was a one time promotion for the 2.0 launch for the early adopters and is not scheduled to come back]

## 2.0

- FIX: Improved iOS 10 Support
- FIX: More than 20 minor bug fixes
- FIX: Fixed multiple UI issue on smaller screens
- FIX: Improved VoiceOver support
- NEW: Whole new data layer [Full Only]

Note: The server has been shut down, everything else works as before.  [Full Only]

## 1.7
- Backend and seamless Sync migration (you should experience no downtime and no changes at all).

## 1.6

- FIX: Fixed a possible crash while loading the background color of the counter screen.
- FIX: Fixed a crash for free user occurring during a background fetch.
- FIX: Added "Internet connection not available" in Settings screen if offline.

- NEW: All new archive feature! You can now archive your Counters if you finished with them, but you don't want to delete them (maybe to keep them as memories or proud moments: "Hey look, I managed to do this!").
- NEW: All new statistics! Find out how many goals you have completed and more from "Settings" -> "Account" -> "Statistics".
- NEW: Added spotlight search! Get brought directly in your full screen counter!
- NEW: New delicious confettis will drop from all over your screen instead of fireworks. You can always switch back to fireworks from "Settings" -> "Advanced".
- NEW: Icon Badge for the top counter (Off by default, you can turn it on from "Settings" -> "Advanced")

## 1.5

During these past few months I've been deep at work making the new version of Minimal Counter. You'll find that it has so many new features that it feels like a 2.0 without actually being one! I thought multiple times if I should call this 2.0 cause it really feels to me like a 2.0 release, but at a mere 5 months after the release it seems a bit premature. That said the version number is not that relevant, unless you go for paid upgrades which I wasn't going to for this version anyway.

Notice: Most of the new features require the Full Version. The update is free for paying customers and the old "Unlock More Themes" has been renamed "Full Version". The in-app purchase "Remove Ads" has been rolled into the "Full Version" and has been removed from sale. (I removed it from sale months ago actually when I first thought about doing this.) If you bought "Remove Ads" you will be happy to know that I haven't increased the price of the "Full Version" so you won't spend a cent more than you would have done before. If you're not a paying customer everything will still work as before, but you'll miss out on most of the new features.

* The App has been completely revamped! Read the rest to find out how.

[More in depth explanation][7]

### Bug Fixes

* FIX: Fixed Layout Issues on iPhone 6 Plus and iPhone 6S Plus on Landscape Mode
* FIX: Fixed Layout Issues on iPads
* FIX: Fixed a small bug in the onboarding tutorial
* FIX: Fixed a memory leak when cancelling an in-app purchase.
* FIX: Updated the font used across the app along with the main theme and feel of the app. You'll find that it's way more consistent now.
* FIX: More than 60+ minor bug fixes!! + A ton of little improvements under the hood. ;)

Enough with the fixes, let's take a look at the new features:

### New Features!

* NEW: Full Support for iOS9 Multitasking on the iPad (SlideOver and SplitView) + Full Landscape Support (iPhone & Plus and 6S Plus included)!
* NEW: Support for multiple counters! \[This was by far the most requested feature\]
* NEW: All New Mode selectable for each counter: Goal Mode. With Goal Mode you can count up to a specific goal! To find out more head to "Settings" -\> "Advanced" and check it out. \[Or just continue reading\]
* NEW: Decrement your counter by swiping down in full screen mode!
* NEW: Edit and Delete any counter.
* NEW: Keep your counters in sync between all of your devices \[Requires to be logged in with an active Internet Connection.\]
* NEW: You can now Create an Account and Log In (Logging in through Facebook or Twitter is also supported if you want). Of course you can also use the app without logging in, although you will lose access to most of the new features in this version. Mind that the app is fully usable offline once you log in. \[You can also sign up and link your account to Facebook or Twitter later if you so desire. As before you'll find more infos on this below.\]
* NEW: Added a section in "Settings" to manage your account and your data. Remember: All your data is and remains YOURS.
* NEW: All new loading screen.
* NEW: Added 10+ new themes!!!
* NEW: Improved In-App purchase, now everything will be unlocked with only one in app-purchase! The price hasn't been increased to match the old price so consider it as a discount for everyone! [And nope it's not a launch price, it'll stay like this for the reasonable future.] You're Welcome.


* NOTICE: Your data is and will remain yours. You can delete your account and all your data from "Settings" -\> "Account" -\> "Delete Account" while logged in. Please mind that doing so will result in everything being deleted forever with no way of getting it back. You can also just delete you data and start anew without deleting your account from "Settings" -> "Account" -> "Delete All Data". Deleting your Data or your Account will delete it across all of your devices.

## 1.4

* FIX: Fixed an incorrect alignment with the italian translation
* FIX: Changed the App name in the springboard so it doesn't crop. The new title is simply "Counter"
* FIX: Tweaked italian and polish translations
* FIX: Fixed a bug while dismissing the textfield in the Settings panel. Now you can just scroll to dismiss!
* FIX: Improved VoiceOver support.
* FIX: Dramatically increased Speed of "Copy Theme to Clipboard"
* FIX: Fixed a bug when dismissing text field in settings.
* FIX: Fixed a bug when setting "step by" to a number larger than int64
* FIX: Fixed a bug when increasing counter to a number larger than int64
* FIX: Fixed a bug when persisting data between launches if the counter was at zero.
* FIX: Added all in-app purchases available in the in-app purchases section in options.
* FIX: Turning 'editing while counting' on and off now works as intended.
* NEW: Share current theme. Go to Settings -\> Advanced to learn more.
* NEW: Added Knowledge Base section in Settings -\> Support
* NEW: Added Creation and Modified Date! (Only for those who have unlocked the "Remove Ads" in-app purchase)
* NEW: Now supports all Device Orientations.
* Increased Speed across the board


## 1.1

* FIX: Fixed a crash that might occur while trying to use the share sheet on iOS 8.x .
* FIX: Fixed an error that might not have preserved the state after relaunching the Application.
* FIX: Fixed a clipping error.
* FIX: Fixed a crash that might have occurred while in app-purchase fails.
* FIX: Added indicator to the "Support" section in "Settings".
* NEW: Added a "Step By" Feature, just set how much the counter should increment each time you tap.
* NEW: Nuova Localizzazione in Italiano. Essendo Italiano mi è dispiaciuto non poter offrire la localizzazione per il rilascio. Se notate qualcosa fuori posto fatemelo sapere ;)
* NEW: Dodano lokalizację w języku polskim. Wszelkie błędy proszę zgłaszać poprzez użycie opcji "wyślij opinię".
* NEW: Added Knowledge Base (with search) to the in-app support! You can still open a support ticket by pressing the "new message" icon on the very top right or by pressing "talk to us", when available.
* NEW: 3 New Colorful Themes!

## 1.0

- Initial Release

[1]: https://valentinourbano.freshdesk.com/support/solutions/6000071180
[2]: http://www.valentinourbano.com/tos
[3]: http://www.valentinourbano.com/privacy
[4]: http://www.valentinourbano.com/support/
[5]: https://github.com/valeIT/SWTableViewCell
[6]: http://www.valentinourbano.com/
[7]: {% post_url 2016-01-01-Minimal-Counter-1-5 %}