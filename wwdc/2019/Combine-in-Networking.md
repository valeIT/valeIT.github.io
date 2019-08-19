---
layout: page
title: Combine in Networking
---
# Combine in Networking

{% include_relative BeforeEachFile.md %}

Added debounce function as baseline
.debounce(0.2)
.removeDuplicates()
.filter{$0.count >= 3}


Inside the cell class:

var subscriber: AnyCancellable?

in prepareForReuse:
subscriber?.cancel()

In the VC when we create the cell:
var request = URLRequest(url: url)
cell.subscriber = pubSession.dataTaskPublisher(for:request).tryCatch {error -> UrlSession.DataTaskPublisher in
//handle error
}.tryMap{data,response -> UIImage in
//handle success
}
.retry(1)//avoid retry if possible
.replaceError(with: placeholderImage)
.receive(on: DispatchQueue.main)
.assign(to: \.itemImageView.image on:cell)

Source:
[Advances in Networking, Part 1
](https://developer.apple.com/wwdc19/712)