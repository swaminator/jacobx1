---
title: "Full stack project: Angular and NodeJS"
date: 2018-02-23T23:41:57-05:00
categories:
  - Development
---

Last week, I decided it was time for a new project. The goal was simple: create a full stack web application with tech I had been wanting to learn. But, what, exactly?

When it comes to learning tech like this, I don't find _what_ to matter so much. Rather, it is about the journey and learning a bunch of stuff. That said, I did have an idea in mind.

Bookmarks.

Yeah, I know, browsers have bookmark managers and Google is so good at searching, who cares? Well, lately, I have been using Instapaper quite a bit. It is great at what it does - reading things later. I started using it to save off things that were not really the read-it-later sort of thing -- it became a bookmark manager in a weird way. However, it doesn't work well like that, really. Safari has a nice splash screen with tiled bookmarks, but, can't post to it with an API and viewing on Windows requires iCloud install stuff...forget doing that on a random machine, or sharing collections... Pinboard looks cool, but, haven't tried it. Doesn't matter. Oh, and Chrome's bookmark manager is terrible.

Anyway, its this fact that I find personal bookmarking kind of lacking that lead me to use this as the basis of a brand new learning experiment.

## Linky

Linky - because I was making a project to learn on and not one as a marketing study.

**Code:** https://github.com/jacobx1/linky  
**App:** https://linky.jschw.in/

### Client

`./linky-client`

#### Angular

I began my journey at the client side of things. I have been using React extensively at work and in some personal projects, so, I decided to go for Angular. I had possessed the notion that Angular was old and obsolete and React was superior. Wow, was I wrong. Facebook (React) makes great stuff, but, there is a reason that Google's Angular is used by so many large applications - its so easy to get up and running.

Easy because of an excellent cli - https://github.com/angular/angular-cli

From the root, I ran `ng new linky-client` and I already had something that could run. Seriously, check out the [usage section](https://github.com/angular/angular-cli#usage).

After that, generate some components, and, boom, you have an app. Okay, a little more involved than that.

Favorite feature for developing the frontend: `ng serve`

That command will build, watch, and even inject some JavaScript into the page which it can communicate with and automatically refresh the page on code change. Its really great.

#### TypeScript

I come from a statically-typed background with C++ and C# dev experience. A few months ago, I started working as a front-end, web developer. I had previous experience before with JavaScript as I did web-dev on the side and in college, but, never in any large projects. Well, when it comes time to refactor a bunch of code...types are sorely missed. And, when working in a new code-base, there is not a lot the code editor can do to help...

Enter TypeScript - https://www.typescriptlang.org/

TypeScript is a statically-typed, super-set of JavaScript created by Microsoft. Combined with a capable IDE like [VisualStudio Code](https://code.visualstudio.com/), development with new libraries becomes almost effortless. Besides auto-complete, the sanity of type checking at compile time is well worth the little bit of overhead. But, most projects are being compiled with something like Babel anyway, so, not really overhead.

#### Material UI Components

https://material.angular.io/components/categories

Material UI, while not my favorite, is clean and familiar (for Google users). However, the angular component library works so well for getting a decent looking app up and running quickly. Check it out.

### Server

`./server`

The server is a basic Node/Express app with just a few interesting things I would like to call out:

#### TypeScript

My blabbering on TypeScript is above. For the node app, though, there is a tool that makes development very easy:

https://www.npmjs.com/package/ts-node-dev

ts-node lets you run a typescript app just like a regular NodeJS app. But, it doesn't watch the files. So, `ts-node-dev` to the rescue.

```
npm install -g ts-node-dev
ts-node-dev
#profit
```

#### typeorm

https://github.com/typeorm/typeorm

Typeorm has a cli that makes it easy to add database models to the project (typeorm calls Entities). Entities are just TS classes which decorated members. The decorators help define db columns and can also set up relationships with other Entities.

Once the entities are set up, typeorm's api makes working with a SQL DB as easy as a NoSQL DB...but, with all of the SQL benefits.

Unlike other JavaScript ORMs I found, typeorm takes advantage of the fact that TypeScript has, well, types. So, it can use those to define the SQL column type.

## CI/CD Pipeline

After trying out several services and configurations, I settled on the following:

- Codeship - https://codeship.com/
	- Build and test PRs and master
	- Push coverage results to Coveralls
		- Done via [karma-coveralls](https://github.com/caitp/karma-coveralls)
	- Deploy on success
- Coveralls - https://coveralls.io/
	- Manages code coverage reports
- CodeDeploy - https://aws.amazon.com/codedeploy/
	- Receives deploy from Codeship and pushes to an EC2 instance

### Codeship... and the others

I tried and failed with several CI offerings. Here is a quick summary.

#### CodePipeline

Easy to use pipeline management system from Amazon that automatically manages CodeBuild and CodeDeploy.

While easy to use, it is lacking extra features. I wanted to build PRs and send back build results to GitHub. Now, it can run an AWS Lambda function which can theoretically do anything. But, if I were to do that, I would just go ahead and write a CI server...

Not what I was looking for on this project.

#### Semaphore

Semaphore seemed to work great until it came time to handle the deploy step. It didn't integrate with AWS in the way I wanted.

#### CircleCi

Better UI than Semaphore and, more importantly, boasted AWS integration. Upon digging deeper, there were some issues... First, they just rolled out a new configuration file format and system (v2.0) but it is not a feature complete replacement of v1. Even the AWS integration page prints out a sample in v1 format...and then it turns out the deploy step isn't supported in the same way on v2. That and other goofiness lead me to look elsewhere. Goofiness being incomplete documentation and frustrating solutions like some users having to go back to v1.

#### Codeship

I was originally turned away by the product page that made it look like payment was required. The free plan kind of fades above them... Well, I can tell you, free was enough for me and it even supported private repos.

Side note - TravisCI was ignored for this because it doesn't do private repos for free...I wasn't ready to publish while building, so, I didn't feel like paying business prices for a side-project.

Codeship does all the fancy ci stuff, AWS CodeDeploy integration, module caching, and more. It essentially just worked. Wish I would have started here, but, hey, learning.

## TL;DR

This weekend+ project taught me about several cool technologies:

- Angular
	- @angular/cli
	- @angular/material
- TypeScript
	- Rapid dev with VS Code
- NodeJS stuff
	- typeorm
	- ts-node-dev
- Deployment
	- Codeship
	- AWS CodeDeploy

Let me know in the comments if you found something useful, or if there is something else I should try here, or, if I'm a complete idiot that has no business posting. All welcome.

fork/star/pr: https://github.com/jacobx1/linky
