# Introduction

### Pull ENV Variables from Vercel

The preferred workflow is to add ENV variables to Vercel, then pull them down. If you plan on hosting with Vercel, you'll need to do this step anyway.

**Step 1: Add ENV vars to Vercel**

Go to:

```text
Your Project --> Settings --> Environment Variables
```

![vercel settings](https://dl.dropbox.com/s/7ljvynnez0c5q8y/Screen%20Shot%202021-01-29%20at%2014.07.58.png?dl=0)

**Step 2: Install the [Vercel CLI](https://vercel.com/download)**

```bash
npm i -g vercel
```

**Step 3: Initialize Vercel**

Answer the questions in the command line when prompted.

```bash
vercel init
```

**Step 4: Pull down the ENV variables**

```bash
vercel env pull
```
