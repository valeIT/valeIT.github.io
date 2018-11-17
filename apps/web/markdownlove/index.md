---
layout: page
title: Markdown.Love
---

# Markdown API

An API to turn an article URL into beautiful markdown without any of the clutter.

- Removes header, navigation bar, ads, footer
- Returns the markdown of the rest of the page

## [Go to Markdown.love][2]

## [Watch the Stream][3]

_Not everything written here is set in stone, might be subject to change._

# Main Todo List

## Before Stream

- [x] Buy Domain (markdown.love)
- [x] Setup Droplet
- [x] Setup https
- [x] Setup Cloudflare

## During Stream

### Building

- [x] Setup Laravel Server
- [ ] Setup landing Page
- [ ] Integrate Laravel with Landing Page

- [ ] Setup REST Api Endpoint
- [ ] Setup REST Service to return full html from url
- [ ] Edit Service to instead return markdown
- [ ] Edit Service to instead return article markdown

- [ ] Setup Users _Not mandatory_

  - [ ] Setup Login Page _Not mandatory_
  - [ ] Setup Register Page _Not mandatory_
  - [ ] Generate api key for each user when they register _Not mandatory_
  - [ ] Page to show api keys _Not mandatory_
  - [ ] Handle Logout _Not mandatory_

- [ ] Setup Stripe _Not mandatory_

  - [ ] Decide on a pricing model _Not mandatory_
  - [ ] Integrate Stripe with Laravel Cashier _Not mandatory_
  - [ ] Billing Page _Not mandatory_

- [ ] About Page
- [ ] TOS Page
- [ ] Privacy Page
- [ ] Newsletter Page _Not mandatory_
- [ ] FAQ Page _Not mandatory_
- [ ] Zapier Integration _Not mandatory_
- [ ] Deploy Server to Digital Ocean

## Launch

- [ ] Twitter
- [ ] PH
- [ ] IH
- [ ] dev.to
- [ ] Telegram
- [ ] Slack

---

## General Info

### Still need to figure out

- Name  
  markdown.love is enough?

- Logo  
  A simple M should be fine..?

- Monetization  
  Does it do too little to be monetized? Can it be usage based?

- Api Keys  
  I'd love to require API keys. I've seen that free API usually get hammered with requests

### Figured out

- Domain  
  Wanted a really simple domain. All md. were taken, but markdown. Had quite a few free. Markdown.love sounded great and was decently priced @ Porkbun.

- Hosting  
  I'm going to use a Digital Ocean droplet and Cloudflare. I've already setup https via certbot and a testing page up.

- Tech Stack  
  As I've said many times my main goal in this challenge is to learn something new and ship my first web app. I've kept my scope pretty limited to be able to do both at the same time.

Backend: Laravel + Mysql
Frontend: Vanilla js (ES6)

### Ideas

- Pricing  
  Obviously with Stripe. A free tier with limited usage (max xx requests per day/month) and a paid tier with more requests and more data returned in the request.

One example would be returning both the markdown and the html of the article or parsing the author name and the publish date.

### Feedback

If you have any feedback you can let me know on [twitter][0] or via [email][1]

[0]: https://twitter.com/valentinourbano
[1]: http://www.valentinourbano.com/about#contact
[2]: https://www.markdown.love
[3]: https://www.twitch.tv/valentinourbano93
