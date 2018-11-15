---
layout: page
title: Support
---

<!-- Start of Async Drift Code -->
<script>
"use strict";

!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('vbwmrgez6nux');
</script>
<!-- End of Async Drift Code -->

From here you can submit a ticket or explore our [Knowledge Base](https://valentinourbano.freshdesk.com/support/solutions).

Note: If your problem regards the website I'd prefer if you would consider [opening an Issue](https://github.com/valeIT/valeIT.github.io/issues) or [submitting a Pull Request](https://github.com/valeIT/valeIT.github.io/pulls) on Github directly. If that's not possible feel free to open a ticket about it anyway =)

**Write the name of the Application you're seeking support for in your ticket if you're writing about a mobile or web application.**

<script type="text/javascript" src="https://s3.amazonaws.com/assets.freshdesk.com/widget/freshwidget.js"></script>
<style type="text/css" media="screen, projection">
	@import url(https://s3.amazonaws.com/assets.freshdesk.com/widget/freshwidget.css); 
</style>
<iframe class="freshwidget-embedded-form" id="freshwidget-embedded-form" src="https://valentinourbano.freshdesk.com/widgets/feedback_widget/new?&widgetType=embedded&screenshot=no" scrolling="yes" height="700" width="100%" frameborder="0" >
</iframe>

Note: If the widget doesn't work for any reason you can [submit the ticket directly](https://valentinourbano.freshdesk.com/support/tickets/new). Always remember to write the name of the app you're seeking support for.
