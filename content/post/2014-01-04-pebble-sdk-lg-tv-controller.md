---
title: Pebble SDK – LG TV Controller
author: Jacob Schwind
type: post
date: 2014-01-04T20:56:29+00:00
url: /2014/01/04/pebble-sdk-lg-tv-controller/
post_views_count:
  - 3915
categories:
  - Development

---
I recently purchased a Pebble Watch and, like any programming nerd would do, started writing software for it.

<center>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/C_sQBtw5is8" frameborder="0" allowfullscreen></iframe>
</center>

I do plan on releasing source at some point, but I thought it would be good to share some resources for those interested in either writing software for the Pebble watch or who want to work with their LG TV. 

## Pebble Development



<!--more-->

The first resource to consult is the official Pebble Developer portal. Their documentation is quite good and there are many great people in the forums ready to help. 

<a href="https://developer.getpebble.com" target="_blank">Pebble Developer Site</a> 

For developing the software on the watch, I suggest using this great site called <a href="https://cloudpebble.net" target="_blank">Cloud Pebble</a> 

This web application allows for writing software for the Pebble Watch without having to set up a development environment on your own machine. It also supports connecting to GitHub. 

## LG TV API



LG provides an open API for communicating with their new smart TVs. I highly suggest using a REST client while experimenting and developing your application. There are several available as plugins for FireFox and Google Chrome &#8211; search &#8220;rest client&#8221; in their respective plugin catalogues. 

API used to control TV <a href="http://developer.lgappstv.com/TV_HELP/index.jsp?topic=%2Flge.tvsdk.developing.book%2Fhtml%2FAPI%2FAPI%2FMethods+Properties+Events1.htm" target="_blank">here</a> 

## Future of Application



I wrote this application using the Pebble SDK 1. I will be updating this application to SDK 2, and when it becomes widely available, I will clean up the iOS code and release it so that others can use it and learn from it. 

If you are interested in the current application code or would like to ask any questions about my experience, I very much welcome it. Post a comment below! 

Happy Coding! 

-Jake