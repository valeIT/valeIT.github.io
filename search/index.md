---
layout: page
title: Search
---

Search by Title, Category, Date or URL:<br>

<!-- Html Elements for Search -->
<div id="search-container">
<input type="text" id="search-input" placeholder="search...">
<ul id="results-container"></ul>
</div>

<!-- Script pointing to search-script.js -->
<script async src="/js/simple-jekyll-search.min.js" type="text/javascript"></script>

<!-- Configuration -->
<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  noResultsText: ("No result found, try something more broad"),
  searchResultTemplate: '<div><a href="{url}"><h1>{title}</h1></a><span>{date}</span></div>',
  limit: 50,
  // fuzzy: true,//Off for now - if fuzzy needs to be same case, I want it to be case insensitive
  json: '/search.json'
})
</script>