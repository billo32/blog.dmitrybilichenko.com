---
title: Как засунуть Next.js в Docker
date: '2023-09-25'
tags: ['code', 'snipets', 'docker', 'next.js', 'tutorials']
draft: false
summary: Короткая инструкция, как упаковать почти любое Next.JS приложение в контейнер.
---

Я действительно не знаю зачем вам это может понадобиться, но если все еще хотите...

## Наш план

1. Установить докер - https://www.docker.com/ (скачать для своей версии ОС + пара кликов мышкой)
2. Создать Next.js приложение - https://nextjs.org/ (пройтись по инструкции и выполнить в терминале `npx create-next-app@latest`)

## Подготовка к контенейризации

Для начала, в root директории вашего Next.js проекта (я надеюсь что вы его уже создали) нужно добавить докерфайл с названием **Dockerfile** и записать в него следующие строки:

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

## Контенейризация (создание образа)

Открыть любой терминал и перейти в папку с вашим Next.js проектом и выполнить команду

```bash
docker build -t my-great-app ./
```

эта команда создаст для вас docker image (саму сущность - image - можно сравнить с операционной системой, которую позже можно будет запустить), и после этого нам остается один шаг - запустить созданный **image** (созданную ОС) в **container** (это похоже на запуск ОС на виртуальной машине, т.е. **image** - ОС, а **container** - виртуалка)

`ВОМОЖНЫЕ ОШИБКИ` если в процессе выполнения шагов что-то пойдет не так, и вы встретите сообщение "Docker-credential-desktop executable file not found in $PATH" в терминале, просто попробуйте решение отсюда https://stackoverflow.com/a/65896682 и все должно починиться.

## Запуск (той самой ОС в той самой виртуалке)

```bash
docker run -p 3000:3000 my-great-app

```

Эта команда запустит ваше Next.JS приложение по адресу http://localhost:3000

Вот и все!

Если у вас все получилось - пожалуйста! Если нет - добро пожаловать в комменты...
