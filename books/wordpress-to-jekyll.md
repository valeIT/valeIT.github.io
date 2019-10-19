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

