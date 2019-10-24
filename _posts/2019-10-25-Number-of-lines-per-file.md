---
layout: post
title: Find Out The Number Of Lines Per File In A Project
date: 2019-10-25 20:28:05.000000000 +01:00
type: post
published: true
status: publish
categories: [Programming]
image:
image2:
author: Valentino Urbano
---
# Number of lines per file in a Folder

I often want to check out how many lines of code any single file in one project has. That's useful to see which specific file should be refactored first. It is also a way to see the state of your codebase and if there are files that are problematic.

Most of the solutions found online didn't work too well for a large number of files or included all kinds of support folders as well. Let's see how we can use a one liner to get a list of files with the respective length in number of lines.

The easiest way that is everywhere on Github is using find and sort so we are going to base our script on that too.

Here we simply filter for each file that has `.swift` as extension. Change it to fit your programming language. I've also redirected the output to a file in the current folder to make it easier to parse through. It might not be needed with a small number of files, but with larger datasets it is tedious to look at them in the command line.

`find . -name '\*.swift' | xargs wc -l | sort -nr >> line.txt`

The output is something like this:

```
21018 total
530 ...FileName.swift
311 ...FileName.swift
280 ...FileName.swift
243 ...FileName.swift
231 ...FileName.swift
225 ...FileName.swift
209 ...FileName.swift
205 ...FileName.swift
202 ...FileName.swift
167 ...FileName.swift
149 ...FileName.swift
134 ...FileName.swift
133 ...FileName.swift
132 ...FileName.swift
129 ...FileName.swift
128 ...FileName.swift
128 ...FileName.swift
```

If you have many files the previous command will fail. You can use the following command instead that converts the newlines to \0 so that xargs can be called with the -O argument fixing the issue:

`find . -name '*.swift' | tr '\n' '\0' | xargs -0 wc -l | sort -nr >> line.txt`

This way it finds code inside the frameworks folder as well. Simply excluding the folder (which seems the most logical method) did not work. I had to go through the file once created and remove every line including the folder name, in this case it being the Pods folder:

`find . -name '*.swift' | tr '\n' '\0' | xargs -0 wc -l | sort -nr >> line.txt && awk '!/Pods/' line.txt > temp && mv temp line.txt`