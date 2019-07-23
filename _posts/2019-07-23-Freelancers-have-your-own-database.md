---
layout: post
title: Why freelancers should have their own database
date: 2019-07-23 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---

# Freelancers, have your own database

If you're both a freelancer and a developer you should have your own tools to make your job easier. We always like to automate stuff, but we mostly do it on our jobs and we often forget to do it for administrative tasks. Any kind of database is fine for storing data and any language is fine to write the code around it. I'm using MySQL and PHP.

A few examples:

- List of clients
- List of business contacts (not clients yet)
- List of services with rates
- List of offers sent with date
- List of receipts + payments
- List of deadlines

You can use the data as you wish, but to start you can just collect it. The best thing you can do in the beginning is to automate the generation of PDF files with offers and receipts. It is not hard, you just need to look for libraries to create PDFs for your favorite language and invest a few afternoons into developing a few layouts.

*For receipts if you're in Italy you can skip this step and just generate the required XML file for the tax office. Your client's software will take care of converting it and format it.*

I've begun writing this before GDPR came into effect, but I still think it is really useful. It will be more of a hassle to get permissions under GDPR, but after you get that initially once for each client is business as usual. You can get permission the first time you submit a proposal for each client.

Having that solid foundation let you automate a lot of processes. From automatically generating invoices for each project using a time tracking software to count the hours (if you bill hourly) to sending email reminders for late payments.

Keep it safe and secure. That is paramount. Don't share its content with anyone and don't share the password for the database either. Have a really strong password to back it up.


You will not regret it.