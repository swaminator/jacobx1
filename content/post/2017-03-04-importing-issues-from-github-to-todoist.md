---
title: Importing Issues from GitHub to Todoist
author: Jacob Schwind
type: post
date: 2017-03-05T00:29:37+00:00
url: /2017/03/04/importing-issues-from-github-to-todoist/
post_views_count:
  - 393
categories:
  - Development

---
Since using GitHub Enterprise at work, I have become a much happier developer. One problem that was not solved was making it easy for me to get my work into my to-do list without manual work. Being a Todoist user, and knowing that they, and GitHub, have documented APIs to work with, I was sure it would be possible to get all of my issues into my to-do list in a quick way that I could re-use each iteration.

My first attempt at solving this issue came in the form of a python script that could be ran in Pythonista on the iPhone. It worked well, but, I had to modify the script each time the milestone name changed or with each iteration&#8230; I wanted something better. (If anyone is interested in how to do this with Pythonista on iPhone, I would be happy to share).

In search of something better, I decided to take a look at what I could do with .NET &#8211; seeing as both GitHub and Todoist have official .NET libraries. What resulted was a workable solution in just an afternoon and something that is much more maintainable and user-friendly than the original Python script.

You can find the code here &#8211; <https://github.com/jacobx1/github-todoist-sync>

I hope you find it useful as well. And, I hope to see some pull requests as the current state of this thing is workable enough &#8211; but, not polished by any means.