---
title: Sony Bravia Remote for Pebble
author: Jacob Schwind
type: post
date: 2015-05-17T04:02:56+00:00
url: /2015/05/16/sony-bravia-remote-for-pebble/
post_views_count:
  - 5990
categories:
  - Development

---
Originally, I had worked on a TV remote control application for my LG TV about a year ago. Unfortunately, the panel died, LG's support was not very helpful... and, eventually, I had my money refunded and the 1 year old panel returned to Costco. Upon receiving my refund, I decided to upgrade to a Sony Bravia 4K TV. And thus, I have decided to port the application for the new TV.

There is currently one application on the Pebble store that is supposed to control a Sony TV, but it apparently does not work with newer models as an authentication step is now required. My new application is for these TVs.

<!--more-->Upon installation, you need to go into the watch apps configuration on your phone and enter the TV&#8217;s IP address (can be obtained through the network settings screen) and an auth code.

I tried very hard to make the auth code process easy for users, but unfortunately their appears to be strange behavior in Apple&#8217;s NSURLConnection API that causes this to fail. Basically, it submits two POSTs to the TV when it should only submit one. When the TV receives a second auth POST, it cancels the operation since the auth cookie is not supplied.

Thus, the configuration is a bit painful, but I hope to improve this experience going forward. For now, the process requires that you run a script on your OSX or Linux machine to obtain the auth code.

Pebble Store Link: <https://apps.getpebble.com/applications/5558044a809acd10cb000052>

## OSX/Linux

Download and extract the auth scripts from here &#8211; <https://github.com/breunigs/bravia-auth-and-remote>

Open auth.sh and update tv_ip to match your TV&#8217;s IP address.

Next, modify the following two values to match:

```
my_device='SonyPebble'
my_nick='Pebble'
```

Open a terminal and run with:

`bash auth.sh`

Open the newly created file, auth_cookie, and copy all the text after `auth=` (do not include the auth= part) and send to your phone. I used iMessage.

On the phone, copy this auth token and paste it into the **Auth Code** box in the watch app's configuration page.

Save changes, and use the app!

## Windows

_[Coming soon]_

# Future of Application

I hope to provide a utility that will make this process much easier so that a wider range of users can enjoy this application. Until then, this is the only way to remote control the newer Bravia TVs. However, once that setup is done, there is no more configuration to do!

# Comments, Requests, Questions

Please post here and I will get to them as soon as I can. Hopefully this application is useful to others 🙂