---
layout: post
title: Make A Linux Bootable USB Stick From Mac OSX
date: 2019-01-10 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Tech]
image:
image2:
author: Valentino Urbano
---

We are going to create a USB stick that will allow us to run Linux from mac without having to install it on the main hard disk. This way you can always have a Linux distribution with you without taking any space, but at the same time being able to boot to it in minutes.

_This is not a tutorial, it's more of a note so I'm going to remember how to do something the next time I stumble again on the problem._

1. Download the image of the operating system (distro).
2. Convert the iso to dmg, a format that OSX can understand natively using:
   `hdiutil convert -format UDRW -o destination.img sourceInstaller.iso`
   where 'sourceInstaller' is the name of the .iso and 'destination' is the name of the output.

3. Run `diskutil list` to find out the name of the disk that corresponds to the USB Stick. In my case it was disk2, but it may vary. Be really careful in running the commands on this disk and not on your main disk or it will delete your data and you will find yourself with a bricked Mac!

4. Run `diskutil unmountDisk /dev/disk2` taking care of changing disk2 with the name of your disk. By unmounting it we render it able to be written onto.

5. Run `sudo dd if=destination.img.dmg of=/dev/disk2 bs=1m` to copy the image to the USB Stick. Again, be really careful about changing disk2 to the name of your disk. Also, change 'destination.img.dmg' with the location of your image file. This operation will take a long time. In my case, it took just short of 20 minutes. It doesn't update you on progress so it might look like it's stuck when it's not. Do not exit the terminal window or reboot or you will need to reformat your USB Stick. If you want to know how long it took to run you can add `time` before the command, like this: `time sudo dd if=target.img.dmg of=/dev/disk2 bs=1m`.

6. Done. Eject the USB stick and plug it in the new machine.

Note: Doing this will render the USB unreadable from Mac OSX. The Mac will tell you that the USB is damaged and needs to be formatted. It is normal. Don't format it.
