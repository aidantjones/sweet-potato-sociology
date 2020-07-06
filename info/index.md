---
title: Info
date: 2020-06-25
layout: info
---
### What the hell is this?

*Sweet Potato Sociology* is a edutainment series with a sociological bent, featuring topics like:

 - Sex and Gender
 - Masculinity
 - Musicology
 - Japanese Studies
 - Food Studies
 - Media Studies

Why? Because these are all the topics I like. They also provide ample opportunities for original research using inter/multidisciplinary analyses which are novel and fun :)

### Why the hell is this?

I was rejected from grad school and had to channel my sociological thought somewhere. I also like creating polished content as well as eating a certain tuber ;)

### How was this site made?

Glad you asked! This is a static HTML site generated using the wonderful [Eleventy](https://www.11ty.dev/). I use [Liquid](https://github.com/Shopify/liquid) for templating and vanilla CSS for styling. All graphics—save for the video thumbnails—are vector. This economy results in the entire site being ~600 KB, save for the thumbnail images. Custom fonts comprise most of that 600 KB anyway.

#### The navigation menu is weird

Here’s the thing: I don’t like media queries. They have their place. But they often lead developers and designers to create three or more versions of a site (harkening back to the `m.example.com` days) instead of making a site built from the ground up to work at infinite widths in a reasonable range. For example, I like to design from an iPhone 4 size screen to around standard HD width of 1920 pixels.

When scaling the screen down to an iPhone 4 width, any meaningful amount of text would either overflow or have to decrease to an unusable size. Enter the hamburger menu, able to be summoned by the user on command. This, of course, requires media queries.

I built the navigation menu above using Grid with no media queries. I may change it in the future because it does look funky. But it’s functional and has beautiful code.

For a more in-depth look, Apple’s Jen Simmons gave [an intriguing talk](https://www.youtube.com/watch?v=20QKda7IhJQ) about this philosophy she dubs “intrinsic design.”

### Give me those typographic details

 - [IBM Plex Family](https://github.com/IBM/plex)
   - Sans
   - Serif
