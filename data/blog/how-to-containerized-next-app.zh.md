---
title: 如何将几乎任何 Next.js 应用程序容器化
date: '2023-09-25'
tags: ['代码', '片段', 'Docker', 'Next.js', '教程']
draft: false
summary: 极简的“如何”指南，带有代码片段，可以帮助您将 Next 应用程序放入 Docker 容器中。
---

我不太清楚为什么您会想这样做，但如果您想要...

## 我们的计划

1. 安装 Docker - https://www.docker.com/ （为您的操作系统下载 + 几次鼠标点击）
2. 创建 Next.js 应用程序 - https://nextjs.org/ （在任何终端运行 `npx create-next-app@latest`）

## 准备容器化

首先，在您的 Next 应用程序的根目录（我希望您已经有了 Next 应用程序）中，您应该创建一个名为 **Dockerfile** 的文件，并将以下内容放入其中：

```dockerfile:Dockerfile
# 构建阶段
FROM node:18-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


# 生产阶段
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

## 容器化

在任何终端中，转到您的 Next 应用程序文件夹（实际上，您应该已经在这里了），然后输入以下命令：

```bash
docker build -t my-great-app ./
```

这个命令将为您创建 Docker 镜像（就像是带有您的应用程序的操作系统），之后，您只需执行一个步骤 - 在 **容器** 中运行您创建的 **镜像**（创建的操作系统），就像在虚拟机中一样。

`错误` 如果出现问题，并且在终端中出现 "Docker-credential-desktop 可执行文件未在 $PATH 中找到" 的错误，请尝试 https://stackoverflow.com/a/65896682 ，应该可以解决一切问题。

## 启动

```bash
docker run -p 3000:3000 my-great-app

```

此命令将在 http://localhost:3000 上运行您的应用程序

就是这样！

如果一切都正常工作 - 欢迎！如果不正常 - 让我们讨论一下...
