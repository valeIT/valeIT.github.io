---
layout: post
title: Using Jekyll Collections To Setup a Book Page For Your Blog
date: 2019-12-22 20:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Writing]
image:
image2:
author: Valentino Urbano
---

[For more context read "The Road To Publish My Short ebook" before reading this article][1]

I wanted to use a clean design for the book page. When you're reading anything long form the main focus should be the text without anything that distracts from reading itself. On top of that the design needed to look like a book and not just a simple long blog post. I went through a look of themes designed for books using different engines before deciding on one. Make sure you actually try the theme with your own content before deciding what to use.

*The theme for the book page is taken from the [Book Hamilton][2] template on Github.*

The theme has been slightly edited, but it is mostly as is. It will create a neat book layout from your markdown files, taking care of chapters automatically. You only need to provide an .md file for each chapter.

To start setting up the theme copy the css and js files from the Book Hamilton Github repository and import them in your project or existing website. You can look how it is done by going to the [js and css directories][3] of the website.

To set up the content for it you need to add a new collection to the Jekyll configuration (by editing your config.yaml file). Add:

```
collections:
  book-wordpress-to-jekyll:
      output: true
```

Change `book-wordpress-to-jekyll` to the name of the folder that includes all the markdown files necessary to generate the book.

Next go to the the `_layouts` directory add the layout for the book. The following layout is taken from the hamilton repository and slightly edited:

```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>{{page.title}} by {{ site.author.name }}</title>

    <!-- Styles and fonts -->
    <link rel="stylesheet" href="{{ " /css/book/style.css " | prepend: site.baseurl }}">
    <!-- <link rel="stylesheet" href="{{ " /css/book/syntax.css " | prepend: site.baseurl }}"> -->

    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Crimson+Text:400,400italic,700italic,700' type='text/css'>

    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <script src="{{ " /js/book/modernizr.js " | prepend: site.baseurl }}"></script>
</head>

<!-- check page_classes - needed ??? - what classes get added to body (see live example)??
      [[ page_classes ]]
      -->

<body class="index hamilton">


    <div class="page-wrapper">

        <header class="page-header" role="banner">
            <a href="#" class="invisilink">
                <!-- ['/'].include? current_page.path -->
                <h1 class="book-title">{{ page.title }}</h1>
            </a>
            <span class="book-author visuallyhidden">by {{ page.author }}</span>
        </header>

        {{ content }}

        <footer class="page-footer">

            <div class="footer-wrapper clearfix" role="complementary">

                <div class="block-pair clearfix">
                    <div class="block downloads">
                        <h3>Downloads</h3>
                        <p>Download this book on
                            <a href="{{ page.gumroad }}">Gumroad</a> or <a href="{{ page.amazon }}">Amazon</a>.
                        </p>
                    </div>

                    <!-- <div class="block translations">
              <h3>Book translations</h3>
              <p>This book is translated into
                <a href="#">Spanish</a>
                and <a href="#">English</a>.
                You can help with more translations <a href="[[ data.book.github_url ]]">on Github</a>.
              </p>
            </div> -->
                </div>

                <div class="block-pair clearfix">
                    <div class="block license">
                        <h3>License</h3>
                        <p>All Rights Reserved.</p>
                    </div>
                </div>

                <!-- <div class="small-text"><small>A Zen of Book Designs Sample</small></div> -->

            </div>
            <!-- end footer-wrapper -->

        </footer>


    </div>
    <!-- end page-wrapper -->

    <!-- include scripts just before the close of the body tag -->
    <script src="{{ " /js/book/anchor.min.js " | prepend: site.baseurl }}"></script>
    <script src="{{ " /js/book/hamilton.js " | prepend: site.baseurl }}"></script>
</body>

</html>
```

Finally add the book page. The layout will loop through all the entries in the `book-wordpress-to-jekyll` folder and put the book together. On top that it will be adding a table of content at the beginning of the page.

```
---
layout: book
title: WordPress To Jekyll
author: Valentino Urbano
gumroad: \#
amazon: \#
---

<div class="content-wrapper clearfix">
    <div class="toc" id="toc">
        <a href="#" class="toc-title" id="toc-title">
            <h3>Table of Contents</h3>
        </a>
        <nav role="navigation" id="toc-nav" style="display: none;">
            <ul id="toc-list">

                <!-- was: [[ tree_to_html(data.tree) ]] -->

                {% for chapter in site.book-wordpress-to-jekyll %}
                <li class="child">
                    <a href="#{{ forloop.index }}">{{ chapter.title }}</a>
                </li>
                {% endfor %}

            </ul>
        </nav>
    </div>
    <section class="main-content" role="main">
        <div class="main-content-source">

            {% for chapter in site.book-wordpress-to-jekyll %}
              <a name="{{ forloop.index }}"></a>
              <h1>{{ chapter.title }}</h1>
              {{ chapter.content }}
            {% endfor %}

        </div>
          <!-- <nav class="main-content-nav clearfix" role="navigation">
            <ul class="clearfix">
              <li>[[ previous_link(data.tree) ]]</li>
              <li>[[ next_link(data.tree) ]]</li>
            </ul>
          </nav> -->
    </section>

</div>
<!-- end content-wrapper -->
```

I've also added a way to easily add a Gumroad and Amazon link to the book directly in the template.

You can now build the website and go to the folder `book-wordpress-to-jekyll` in the browser to see the result.


[1]: {% post_url 2019-10-21-The-Road-To-Publish-My-Short-ebook %}
[2]: https://github.com/bookdesigns/book-hamilton/
[3]: https://github.com/valeIT/valeIT.github.io/
