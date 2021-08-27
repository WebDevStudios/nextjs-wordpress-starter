# Introduction

One of the challenges of using a JAMStack frontend is having to run a build after every content update. Some frameworks are prone to long builds times, which can be very frustrating!

Our starter solves this challenge, by leveraging Incremental Static Regeneration. This is a powerful feature [baked into Next.js](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration). Incremental Static Regeneration allows the frontend to dynamically update pages by re-rendering them in the background.

**The bottom line:** you can publish and update content in WordPress (just like with a traditional theme) and those updates will display on the frontend *almost instantly!*
