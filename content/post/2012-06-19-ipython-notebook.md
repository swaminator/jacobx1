---
title: iPython Notebook
author: Jacob Schwind
type: post
date: 2012-06-19T00:18:57+00:00
url: /2012/06/19/ipython-notebook/
post_views_count:
  - 10304
categories:
  - Development
  - IBM
  - Python

---
My mentor at IBM turned me on to using the Notebook feature of iPython. This is really cool!

Now, the Python CLI does its job. I have been using it for a while for testing modules and code ideas but usually need documentation open when trying out a new module or I need to look over my own code when I have forgotten what the names in my library are.

iPython is interactive (hence &#8220;i&#8221;). Via the command line you can use tab completion to quickly finish what you were typing or to see what is available from the module or class. Also, iPython allows you to do basic procedures that I usually find myself exiting the shell for&#8230;listing a directory, removing a file, changing the working directory, etc. This is cool, but it gets better.

Using the Notebook feature will allow you to access iPython via a web page. It supports tab completion but does it in a very nice way &#8211; drop down lists wherever you are at in a line and it completes code, lists available methods, and completes directory/filenames as well.

After doing a lot of testing and research in the web console, you can save your Notebook so you can pick up where you left off later or just print it for reference. Also check out the graphing abilities with MatPlotLib&#8230;graphs show up inline!

<!--more-->So, if you are like me, you are wondering how to use this feature the blogger is babbling on about. Let&#8217;s do it!

**Linux Install**

First, install ZeroMq:

<p style="padding-left: 30px;">
  <em>wget http://download.zeromq.org/zeromq-2.2.0.tar.gz</em><br /> <em>tar -xf zeromq-2.2.0.tar.gz</em><br /> <em>cd zeromq-2.2.0</em><br /> <em>./configure</em><br /> <em>make</em><br /> <em>make install</em>
</p>

Next, install iPython:

<p style="padding-left: 30px;">
  <em>pip install ipython</em>
</p>

You should be done unless you do not have pip installed

RedHat/CentOS/Fedora: _yum install pip_

Ubuntu/Debian: _sudo apt-get install pip_

**Ready to Rock!**

To start Notebook, run the following command:

<p style="padding-left: 30px;">
  <em>ipython notebook</em>
</p>

It will start the server and pop up your default web browser and take you to the interface.

If you are trying to install this on a remote server, you can set up the config file to allow connections from any IP address but make sure you put a password on it! I don&#8217;t think I need to provide info on this as those who need this feature should know how to find out 🙂