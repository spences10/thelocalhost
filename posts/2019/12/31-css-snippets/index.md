---
path: /css-snippets
date: 2019-12-31
title: CSS Snippets from around the web
tags: ['information', 'learning', 'guide', 'css', 'best-practice']
published: false
---

This is a dump of all the snippets I have collected over the last 18
months or so that I'm going to document here so it's probably going to
be a mess but it mainly for my reference so 😛

Big thanks to Steve Schoger and Adam Wathan 🙏

Check out Refactoring UI and the Refactoring UI YouTube channel for
more hot tips 🔥

## Debugging

From **Adam Wathan:**

Ever run into annoying CSS layout bugs that are hard to troubleshoot?
(WHY IS THERE A HORIZONTAL SCROLLBAR WHERE IS THIS COMING FROM?!?)

Throw this style into your dev tools to see the boundaries of every
element without affecting the layout:

```css
* {
  outline: 1px solid red !important;
}
```

## Images

From **Steve Schoger:**

Working with images that clash with each other? Try desaturating them
to greyscale or colourising them all with a single color to make them
a little more cohesive.

![desaturatingImages](./desaturatingImages.jpg)

Also, containing photos in circles - Great way to make a bad photo
look good

![circleImages](./circleImages.jpg)
