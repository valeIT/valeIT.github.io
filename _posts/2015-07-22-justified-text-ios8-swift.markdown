---
layout: post
title: Justified Text iOS8+ - Swift
date: 2015-07-22 23:37:55.000000000 +02:00
type: post
published: true
status: publish
categories:
- Programming
tags: \[\]
meta:
\_wpcom\_is\_markdown: '1'
\_edit\_last: '1'
author:
login: Myshar
email: mysh@myshar.org
display\_name: Valentino Urbano
first\_name: ''
last\_name: ''
---

I always thought that "Justified" would be an option for UILabel, unfortunately it used to be the case, but the option was removed with Xcode 6\. The only option now is not use an AttributedString:

    
        var text = NSMutableAttributedString(data: NSLocalizedString("password-label-long-description", comment: "").dataUsingEncoding(NSUTF8StringEncoding, allowLossyConversion: false)!, options: [NSDocumentTypeDocumentAttribute: NSHTMLTextDocumentType, NSCharacterEncodingDocumentAttribute: NSNumber(integer: Int(NSUTF8StringEncoding))], documentAttributes: nil, error: nil)
    
        let style = NSMutableParagraphStyle()
        style.alignment = NSTextAlignment.Justified
        text?.addAttribute(NSParagraphStyleAttributeName, value: style, range: NSMakeRange(0, text!.length))
    
        mainLabel.attributedText = text
        mainLabel.textColor = UIColor.whiteColor()