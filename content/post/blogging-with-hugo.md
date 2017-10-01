---
title: "Blogging With Hugo"
date: 2017-09-30T16:03:23-04:00
draft: false
---

I finally decided to get away from Wordpress and move to a statically generated website. After much research, I finally decided to go with Hugo. Of course, there are many competent projects in this space, but here is why I chose it:

+ Fast fast fast (just search for Hugo performance)
+ Easy to get up and running
+ Works with Netlify
+ Only a single executable - no environments to maintain

For hosting, I have chosen Netlify. They provide an excellent service for free and it integrates directly with a github repository. Netlify provides many interesting features such as SSL for custom domains, build previews, and much more.

Check out the source: https://github.com/jacobx1/jacobx1

I will walk through how I set my blog up and hopefully it can be of use to anyone looking to start publishing using this fantastic static site generator.

## Getting Started

Before continuing with the following steps, a few things need to be set up:

+ Register for a GitHub account
  + https://github.com
+ Register for a Netlify account
  + https://netlify.com
+ Install Hugo
  + https://gohugo.io/getting-started/installing/
+ Have Git installed and configured for your GitHub account
+ _Optional_ - Obtain a domain name
  + Can just use the url that netlify produces
  + I like [namecheap](https://namecheap.com) but you can use any provider, of course

To build a site using Hugo and Netlify from scratch, check out Hugo's documentation: https://gohugo.io/hosting-and-deployment/hosting-on-netlify/

If you want to get rolling a bit quicker, keep reading!

### Quick Start

To jump into Hugo development more quickly, you can simply fork and clone my blog repo, modify some content, and push to your own Netlify continuous deployment pipeline.

1. Go to https://github.com/jacobx1/jacobx1 and click `fork` in the upper right-hand corner
2. Clone either using `git clone` on the command line, or, if you have GitHub desktop installed, you can use the _"Open in Desktop"_ option from the _"Clone or download"_ dropdown on your fork, GitHub page.
   + This just gets you prepped to start making changes locally. Of course, for playing around, you can simply edit files on GitHub.com!
   + ***Be sure to change the baseurl in config.toml to `/` or to your address (with trailing slash)***
3. Go to https://app.netlify.com/ and click _"New site from Git"_
   + Choose _"GitHub"_
   + Pick the fork you created
   + Configure the following settings
     + Branch should be `master`
     + Build command is `hugo`
     + Publish directory is `public`
   + And complete!

Once set up, now any time commits are made to master, a new deploy is initiated. See where these deploys can be accessed by visiting the "deploy" menu option in Netlify. Another great part about Netlify is that any other branch that is pushed to GitHub or PR made will have a special preview address so you can check out changes to your hugo site before pushing to master!

Now you have an environment that you can start modifying and making your own. You can change the theme, update the content, go crazy - its your site!

To go pro - you will want to set up that custom domain - https://www.netlify.com/docs/custom-domains/

## Important Notes

Learn from my mistakes and avoid hours of excruciating pain. I will try to keep this section updated as I find more possible pitfalls you may run into.

### Themes

When using Hugo and Netlify, note that you should really use the git submodule method of adding themes.

Details on that in the Hugo/Netlify guide - https://gohugo.io/hosting-and-deployment/hosting-on-netlify/

I personally forked a theme I enjoyed and added that as the submodule to this project. I can then make changes to that theme and update in my repo.

Another annoying thing I found when switching themes was that some themes use different directories for posts, for example. The first theme I used expected posts to be in `./content/posts` where others used `./content/post`. Also, some themes expect properties in your hugo config that you may not have yet.

To avoid hitting those issues, always check and see if your theme has an example site in their repo! It appears to be standard to include one. This example site folder will show the layout expected and you can copy/merge the hugo config file - `config.toml`.

### Moving from Wordpress

This site is actually built in part by migrating my Wordpress content. For the comments, I used Disqus to export my Wordpress comments and display on the new site.

#### Content Migration

I used the following guide and suggest you do the same - https://github.com/SchumacherFM/wordpress-to-hugo-exporter

I did notice some issues with image sizing and youtube embeds did not come over. Make sure you preview this import and make necessary changes before deploying the site. That migration tool is great, but, of course there are going to be some conversion woes. Just be aware.

#### Disqus Migration

I followed this guide: https://help.disqus.com/customer/portal/articles/466255-importing-comments-from-wordpress

Once you have your Disqus site configured, be sure to update the embed code for Disqus in `layouts\_internal\disqus.html`

## Final Thoughts

Comment below, let me know what you think of the new site and my mods to the original purehugo theme. I hope you like it. I am looking forward to doing more blogging now with this system since I can work in an environment that I am comfortable with - command line, git, and markdown! Best of all, anywhere you can have git configured (including iOS), you can update the blog.

Good luck with your own site and comment below if you run into any troubles or if the post should be amended.

Have fun with Hugo!