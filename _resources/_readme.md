## Resource

A multi-purpose content collection


### Sample Resource YAML Header

Fields that Jekyll will look for in a Resource entry.

```yaml
---
title: Resource Sample First Feature
description: Sed posuere consectetur est at lobortis duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
date: 2023-05-01 12:00:00
featured: true
featuredOrder: 1
type: project
authors:
- John Doe
- Amalie Rösler
abstract: 
- Elit excepturi cupiditate optio eligendi est? **Officia porro** architecto amet temporibus ratione. Dolorum vel [repellat ipsum](#) ipsam commodi accusantium? Eveniet quis alias exercitationem maxime vel, est quas Quaerat laborum quia.
- Lorem soluta laborum omnis quae excepturi. Sit nisi qui iure inventore ab. Soluta voluptatibus odit libero blanditiis optio. Cumque voluptatem molestias ex fugit praesentium. Rem temporibus ex quidem rerum in.
links:
- text: Testing
  href: #
  icon: pdf
- text: More testing
  href: #
  icon: download
citation:
- text: "Choi. Y & Lee, Y. (2020, July) Ednel: A large – scale hierarchical dataset in education. Springer, Cham. DOI:10.1111/josi.12122"
  href: #
categories:
  - category1
  - category2
  - category3
---

```

Required fields:

- `description` - {String} Used in card previews and metadata
- `date` - {Date} format YYYY-MM-DD, time is optional
- `type` - {String} lowercase name of resource type, used for filtering, displays in 'eyebrow' text
- `categories` - {Array} lowercase names of resource categories, used for filtering

Optional fields (shared):

- `featured` - {Boolean} Used on Resource index page to pull items to the top
- `featuredOrder` - {Number} Number for determining ordering for featured entries. Recommended max = 4
- `authors` - {String|Array} Complete names for attribution
- `links` - {Object} text/href/icon for a button link in top section. Icon name must match available file in `_includes/svg/`

Optional fields (unique):

- `abstract` - {String|Array} Paragraphs for abstract section, allows markdown content
- `citation` - {Array} text and link for citation in the Abstract section
