# Content Data Specification — V2

## Contributor Data

Each contributor may provide:

### Required

- name
- avatar
- message
- finalWish

### Optional

- role
- relationship
- photos
- videos
- voice
- quote
- caption

## Example

```json
{
  "id": "person-01",
  "name": "Nguyen A",
  "role": "Designer",
  "relationship": "Teammate",
  "avatar": "/media/person-01/avatar.webp",
  "message": "Một lời nhắn dành cho chị...",
  "finalWish": "Luôn vui nhé!",
  "images": [
    "/media/person-01/memory-01.webp"
  ],
  "videos": [],
  "voice": null,
  "quote": null
}
```

## Content Collection Prompt

Ask contributors for:

1. One personal message.
2. One memory, photo, or video.
3. One short final wish.

Suggested question:

> "Khi nghĩ đến N, bạn nhớ đến điều gì?"

This is better than asking for "the best photo of N".

## Required Validation

Before publishing:

- names are correct;
- messages are approved;
- contributors consent to publication;
- no sensitive medical content is included;
- media exists;
- videos play;
- final wishes are short enough;
- no accidental private conversations are included.

## Final Wish

Recommended:

3–10 words.

The phrase should remain readable when animated.

## Message

Messages may be longer but should be broken into short paragraphs.

Avoid long uninterrupted walls of text.
