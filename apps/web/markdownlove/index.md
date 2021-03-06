---
layout: page
title: Markdown.Love
---

# Markdown API

An API to turn an article URL into beautiful markdown without any of the clutter.

- Removes header, navigation bar, ads, footer
- Returns the markdown of the rest of the page

## [Go to Markdown.love][2]

## [Watch the Archived Stream][3]

# Time tracking for the < 24 hours launch

![Tracking for 2018-11-17](/assets/article_images/markdownlovetime.png)

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
- [x] Setup landing Page
- [x] Integrate Laravel with Landing Page

- [x] Setup REST Api Endpoint
- [x] Setup REST Service to return full html from url
- [x] Edit Service to instead return markdown
- [x] Edit Service to instead return article markdown
- [x] Bug Fixing generated article #1
- [x] Better integrate landing page

- [x] Setup Users

  - [x] Setup Login Page
  - [x] Setup Register Page
  - [x] Generate api key for each user when they register
  - [x] Page to show api keys
  - [x] Regenerate api keys
  - [x] Handle Logout

- [x] About Page
- [x] TOS Page
- [x] Privacy Page

- [x] Setup Stripe _Not mandatory_

  - [x] Decide on a pricing model _Not mandatory_
  - [x] Integrate Stripe with Laravel Cashier _Not mandatory_
  - [x] Billing Page _Not mandatory_
  - [x] When registering setup automatic free trial _Not mandatory_
  - [x] Ability to manually switch to subscription _Not mandatory_
  - [x] Create subscription on Stripe _Not mandatory_

- [x] Bug Fixing generated article #2
- [x] Change all buttons UI to be the same

* [ ] Newsletter Page _Not mandatory_
* [ ] FAQ Page _Not mandatory_
* [ ] Zapier Integration _Not mandatory_
* [x] Check servder configuration on Digital Ocean (php-xml, ...)
* [x] Deploy Server to Digital Ocean

### Bug Fixing

- [x] Justify text in TOS and Privacy (now it's centered)
- [x] Move top titles 1 line down
- [x] Remove get api key from login / logout / tos / privacy / about
- [x] About the site -> put only tiwtter and website at the end and remove info about me
- [x] make welcome user not clickable
- [x] Api keys before copy. something like the api key is used in every request to the service and its needed to protect the service from abuse
- [ ] make welcome hover not do anything

## Launch

- [x] Twitter
- [ ] PH _Not the first day_
- [ ] IH _Not the first day_
- [ ] dev.to _Not the first day_
- [x] Telegram
- [x] Slack

## After Launch

- [x] Fix Cron -> Create cron laravel reset api limits end of month (from subscription date) _Not mandatory_

- [ ] Update Auth to always use middleware
- [x] Center pricing on mobile
- [x] Setup sentry for debug
- [ ] Don't redirect to pricing after login if already subscribed
- [x] More data for subscribed users

  - [x] Returns Author
  - [x] Returns Images
  - [x] Returns Original HTML
  - [x] Returns Title

- [x] Rewrite relative URLs
- [x] Updated API Documentation with more example and details
- [x] Fixed password reset email

---

## General Info

### <s>Still need to figure out</s>

- [x] <s>Name  
       markdown.love is enough?</s>

- [x] <s>Logo  
       A simple M should be fine..?</s>

- [x] <s>Monetization  
       Does it do too little to be monetized? Can it be usage based?</s>

- [x] <s>Api Keys  
       I'd love to require API keys. I've seen that free API usually get hammered with requests</s>

### Figured out

- [x] Domain  
       Wanted a really simple domain. All md. were taken, but markdown. Had quite a few free. Markdown.love sounded great and was decently priced @ Porkbun.

- [x] Hosting  
       I'm going to use a Digital Ocean droplet and Cloudflare. I've already setup https via certbot and a testing page up.

- [x] Tech Stack  
       As I've said many times my main goal in this challenge is to learn something new and ship my first web app. I've kept my scope pretty limited to be able to do both at the same time.

Backend: Laravel + Mysql  
Frontend: Vanilla js (ES6) + Laravel Blade

### Ideas - Future

- [x] Pricing  
       <s>Obviously with Stripe. A free tier with limited usage (max xx requests per day/month) and a paid tier with more requests and more data returned in the request.
      I actually got pricing working on the stream. Still need to implement part 2: more data returned in the request for subscription users.  
       One example would be returning both the markdown and the html of the article or parsing the author name and the publish date.</s>

- Crawl
  Ability to have a crawler and get all articles on a site (within reason)

### Feedback

If you have any feedback you can let me know on [twitter][0] or via [email][1]

[0]: https://twitter.com/valentinourbano
[1]: http://www.valentinourbano.com/about#contact
[2]: https://www.markdown.love
[3]: https://www.twitch.tv/valentinourbano93
