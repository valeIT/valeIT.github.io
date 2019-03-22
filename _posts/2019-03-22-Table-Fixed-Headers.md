---
layout: post
title: Scroll Table Headers In Vanilla JS (Rows and Columns)
date: 2019-03-22 22:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: []
image:
image2:
author: Valentino Urbano
---

Sometimes you might want to have a table with fixed titles (headers) so that you can scroll the content underneath it and always know what it is referring to without having to scroll to the top or to the left to see the title in question.

I've tried many methods and not a single one seemed to work properly and for both axis at the same time without having to use a fully featured framework just for this functionality. In the end, I found a solution that works reasonably well (it still has a few rough edges, but nothing major).

##HTML - JS

Firstly we are going to edit the HTML of the page. Whenever you initialize the table add a div as the parent and a first header (you need it, feel free to leave it empty if you're not going to use it, but it needs to be there):

```
<div class="tablescroll">
    <table class="table" id="table">
    <thead>
            <tr class="headcol" scope="col">
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>

</div>
```

Whenever you add the columns and rows, either in your HTML or JS add the following.
You need to add an attribute to every column, taking care to add a different one if it's the first column. If it's the first column add:

```
th class="headcol" scope="row"
```

Otherwise (from the second column onwards) add:

```
th class="long headrow" scope="col"
```

After, for each row in the table add:

```
<tr><th class="headcol" scope="row">
<td class="long" ></td>
```

## CSS

In the CSS add the following taking care of chaining the "background" color to align it to your page's background and the "z-index" to make it appear on top, but not over models:

.tablescroll {
width: 100%;
height: 100%;
overflow-x: scroll;
margin-left: 11em;
margin-top: 3em;
overflow-y: auto;
padding: 0;
}

.headcol {
position: sticky;
width: 10em;
left: 0;
top: auto;
border-top-width: 1px;
/_only relevant for first row_/
margin-top: -1px;
/_compensate for top border_/
background: #e7e7e6;
z-index: 900;
}

.headrow {
position: sticky;
height: 2em;
left: auto;
top: 0;
border-top-width: 1px;
margin-top: -1px;
background: #e7e7e6;
z-index: 900;
}

::-webkit-scrollbar {
-webkit-appearance: none;
}

::-webkit-scrollbar:vertical {
width: 12px;
}

::-webkit-scrollbar:horizontal {
height: 12px;
}

::-webkit-scrollbar-thumb {
background-color: rgba(0, 0, 0, .5);
border-radius: 10px;
border: 2px solid #ffffff;
}

::-webkit-scrollbar-track {
border-radius: 10px;
background-color: #ffffff;
}

For the CSS I usually keep this in a separate and generic file so I can reuse it on different pages and then customize it in a CSS specific for each page, for example, changing the width and height of the container:

```
.tablescroll {
    width: 100hh;
    height: 90vh;
}
```
