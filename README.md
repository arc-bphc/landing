# Automation and Robotics Club

## Tech Stack

- NextJS
- Tailwind
- contentlayer for generating blog posts
- MDX for writing the blog
- unified plugins

## Guide to Writing Content for the Website

### Where to write the content?

Choose the subdomain you wanna add content to: blog, news or levelup. The content you write MUST be a `.mdx` file located in `data/<subdomain>`. All images you wish to add to the post must be present ONLY in `/public/static/images/<subdomain>/<title>` folder

For example, if you are writing a new blog post titled "101 Ways to Screw this Up", it must have the following traits:

- File Name: `101-ways-to-screw-this-up.mdx`
- File Location: `/data/blog`
- Full Path: `/data/blog/101-ways-to-screw-this-up.mdx`
- Path to images: `/public/static/images/<subdomain>/<title>/<img_file_name>.<img_ext>`

### Adding Content

Use normal markdown syntax with a few exceptions.

1. Links must be added using `<a>` tags. Standard syntax, i.e. `[text](href)` is doable, but not recommended.
2. EVERY SINGLE TAG MUST BE CLOSED. Closing a tag can be accomplished by adding a closing tag, or by using the close tag syntax.

Example:

```html
<!-- Acceptable -->
<a href="https://omg.co">Damn</a>
<!-- Acceptable -->
<image src="/static/images/levelup.png" />


  <!-- Not Acceptable --></EmbedItem
<EmbedItem url="https://youtube.com/embed/dQw4w9WgXcQ">
>
```

### Adding Images

To add an image in the post, use the `<Image src='/static/images/subdomain/title/img_file_name.img_ext' />` tag.

- Notice that the `/public` prefix of the image path has been dropped. This is intentional and must be followed.

Preference order for image formats is as follows:

1. `.webp`: Use whenever possible. Amazing compression and quality
2. `.png`: No compression, but good quality
3. `.jpg`: Compressed and trash quality

### Adding Embedded Items

To add an embedded item use the `<EmbedItem url="link/to/item/to/embed"/>` tag.

For youtube, the embed links are of the form: `https://youtube.com/embed/<video_id>`.

### Front Matter Format

1. Blogs

```md
---
title: Good ol Title
published: yyyy-mm-dd
summary: nice big summary. Approx 25-50 words.
tags: [comma, separated, tags]
---
```

2. Levelup

```md
---
title: Level x
category: 'resource'
level: x
tags: [comma, separated, tags]
---
```

- category must be either resource or solutions. Anything else WILL cause an error. This is intentional behavior.

3. News

```md
---
title: Title of the Event
startDate: yyyy-mm-dd
endDate: yyyy-mm-dd
links:
  [
    { 'title': 'funky', 'href': 'https://cold.co' },
    { 'title': 'Madina', 'href': 'https://why.not' }
  ]
summary: Nice ol Summary of the event. 25-50 words
---
```

- endDate is optional and maybe left empty. 

---

Made for Fried Rice by [@adeecc](https://adeecc.vercel.app)
