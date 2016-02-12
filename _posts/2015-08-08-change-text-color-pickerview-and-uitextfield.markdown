---
layout: post
title: Change text color pickerview and uitextfield
date: 2015-08-08 23:51:13.000000000 +02:00
type: post
published: true
status: publish
categories:
- Programming
author: Valentino Urbano 
---

There are no property to do so, you need to use `NSAttributedString` in both cases.

## TextField

How to change the color of the placeholder text in a textfield:

          self.textField.attributedPlaceholder = NSAttributedString(string:  NSLocalizedString("textfield-placeholder", comment: "placeholder for title"), attributes: [NSForegroundColorAttributeName : UIColor.whiteColor()])
    

## PickerView

How to change the color of the placeholder text in a picker.

This is just a bit more elaborated. If you have the delegate method for titleForFor you need to replace it with:

    
      func pickerView(pickerView: UIPickerView, attributedTitleForRow row: Int, forComponent component: Int) -> NSAttributedString? {
       return NSAttributedString(string: String(array[row]), attributes: [NSForegroundColorAttributeName:mPickerLabel.textColor])
      }
    

Make sure to call `mPicker.reloadAllComponents()` in your `viewWillAppear` if you change the color from another view and you want it updated with the current color. Otherwise it will show the old color until the user scrolls the picker.