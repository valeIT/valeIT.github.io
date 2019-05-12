# Debug your Android (or Unity) application through Wi-Fi

_This is not a tutorial, it's more of a note so I'm going to remember how to do something the next time I stumble again on the problem._

I don't have many ports on my MacBook Pro and even though I've been forced into buying a dongle plugging it in and out each time I need to take the Mac with me is an hassle so if I can avoid using it I do.[^1]

## Enable and Test Wi-Fi debugging

1. Connect your device using usb, first run the app once using usb to check that everything is working fine
2. Open Terminal and run adb tcpip 5555
3. Get the phone ip address by going to Settings > About Phone > Status
4. Run `adb connect IPADDRESS:5555` substituting "IPADDRESS" with your phone local IP address
5. Run `adb devices` to check you are connected by both usb and Wi-Fi

```
Valentinos-MacBook-Pro:Desktop valentinourbano$ adb devices
List of devices attached
52105155eaf974a3        device
192.168.1.134:5555      device
```

6. Disconnect the USB cable and try running `adb devices` again, it will only show the device connected via Wi-Fi.

```

Valentinos-MacBook-Pro:Desktop valentinourbano$ adb devices
List of devices attached
192.168.1.134:5555      device
```

## Caveats

You need to be mindful that you're over a Wi-Fi connection now and that if you have a not to stellar router it will clog your LAN with lots of packets as its transferring the whole apk to the device.

_Sources:_

- [Youtube][1]

[1]: https://www.youtube.com/watch?v=Y7FuOsxliug

[^1]: Dear Apple, the MacBook Pro should be for Professionals. And I assure you that most professionals needs port. I don't ask for much, but I'd have liked to have at least a USB port, and ethernet port and an HDMI port
