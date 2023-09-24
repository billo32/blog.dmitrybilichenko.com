---
title: How to containerize almost any Next.js app
date: '2023-09-25'
tags: ['code', 'snipets', 'docker', 'next.js', 'tutorials']
draft: false
summary: Extremely short "how-to" with snippet which help you to put your Next app into Docker container.
---

I don't really know why you should want to do it, but if you want...

## Our Plan

1. Install Docker - https://www.docker.com/ (download for your OS + few mouse clicks)
2. Create Next.js App - https://nextjs.org/ (in any terminal `npx create-next-app@latest`)

## Preparation for containerization

First of all, in root directory of your Next application (I hope you already have got Next App) you should create Dockerfile with name **Dockerfile** and put inside folowing lines:

```dockerfile:Dockerfile
# Build Stage
FROM node:18-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


# Production Stage
FROM node:18-alpine AS PRODUCTION_STAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/package*.json ./
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "start"]
```

## Containerization

In any terminal go to your Next app folder (actually, you already should be here) and type

```bash
docker build -t my-great-app ./
```

this command will create docker image (it's like OS with your app) for you, and after that, only one step you should - run your created **image** (created OS) in **container** (like virtual machine)

`ERROR` if something goes wrong and you met "Docker-credential-desktop executable file not found in $PATH" error in terminal, just try https://stackoverflow.com/a/65896682 and everything should be fixed.

## Starting

```bash
docker run -p 3000:3000 my-great-app

```

This command will run your app on http://localhost:3000

Thats it!

If everything work well - your welcome! If not - lets discuss...
