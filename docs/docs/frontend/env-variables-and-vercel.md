---
title: ENV Variables and Vercel
---

The preferred workflow is to add ENV variables to Vercel, then pull them down. If you plan on hosting with Vercel, you'll need to do this step anyway.

**Step 1: Add ENV vars to Vercel**

Go to:

```text
Your Project --> Settings --> Environment Variables
```

![vercel settings](/img/screenshot-env-vars-vercel.png)

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
