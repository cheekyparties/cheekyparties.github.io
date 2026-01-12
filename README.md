## cheekyparties.github.io

### Maintenance

To add a *blog post*, go into the _posts folder and copy the formatting from one of the other blog posts, which all should be in markdown and simple to copy + modify.  Remember to modify the name with the correct date of the post, and to upload the preview photo, as well as any other photos you need, to the /assets/images/blog folder.

To add *images* to the image carousel on the main page or the history page, add images to the folders /assets/images/frontpage or /assets/images/history.

To add an *event*, go to the events.yml file inside the _data folder and simply create a new event (should be very intuitive).

---

### Stories (Cheeky Pub)

The stories section lives at `/pub/` and allows community members to submit and read stories.

#### Automatic Submission (via website form)

1. Go to https://cheekyparties.github.io/pub/submit/
2. Enter the submission password
3. Fill out the form with title, author name, tags (comma-separated), and story content (Markdown supported)
4. Click "Submit Story"

**Behind the scenes:** The form sends the story to a Netlify function, which creates a GitHub Issue. A GitHub Action then processes the issue, creates the story file, and auto-generates any new author/tag pages.

#### Manual Addition (via GitHub)

To manually add a story:

1. Create a new file in the `_stories/` folder
2. Name it with the format: `YYYY-MM-DD-story-title-slug.md` (e.g., `2026-01-15-my-first-story.md`)
3. Add the following front matter at the top:

```yaml
---
layout: story
title: "Your Story Title"
author: "Author Name"
date: 2026-01-15 12:00:00 -0500
tags:
  - tag1
  - tag2
---

Your story content goes here. Markdown formatting is supported.

## You can use headings

And **bold**, *italic*, etc.
```

4. If the author or tags are new, you may also need to create pages for them:

**New Author:** Create `pages/authors/author-name-slug.md`:
```yaml
---
layout: author
title: "Stories by Author Name"
author: "Author Name"
permalink: /pages/authors/author-name-slug/
---
```

**New Tag:** Create `pages/tags/tag-slug.md`:
```yaml
---
layout: tag
title: "Stories tagged tagname"
tag: "tagname"
permalink: /pages/tags/tag-slug/
---
```

Note: Tags are displayed in lowercase regardless of how they're entered. The slug should match what Jekyll's `slugify` filter produces (lowercase, spaces/special chars become hyphens).

#### Editing Stories

Simply edit the markdown file in `_stories/` directly. Changes will appear after GitHub Pages rebuilds (usually 1-2 minutes).

#### Deleting Stories

Delete the story file from `_stories/`. If the author or tag has no other stories, you may also want to remove their pages from `pages/authors/` or `pages/tags/`.

---

### Lore

This website was made with love from scratch as a static site built with html/css/javascript, using jekyll functionalities through github sites.  For questions on the website, reach out to the resident science instructor at Cheeky Preparatory Academy.