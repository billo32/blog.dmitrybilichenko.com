---
title: Cómo contenerizar casi cualquier aplicación Next.js
date: '2023-09-25'
tags: ['código', 'fragmentos', 'docker', 'next.js', 'tutoriales']
draft: false
summary: Guía extremadamente breve con un fragmento que te ayudará a poner tu aplicación Next en un contenedor Docker.
---

Realmente no sé por qué querrías hacerlo, pero si lo deseas...

## Nuestro plan

1. Instala Docker - https://www.docker.com/ (descarga para tu sistema operativo + unos pocos clics de ratón)
2. Crea una aplicación Next.js - https://nextjs.org/ (en cualquier terminal, ejecuta `npx create-next-app@latest`)

## Preparación para la contenerización

En primer lugar, en el directorio raíz de tu aplicación Next (espero que ya tengas una aplicación Next) debes crear un archivo Dockerfile con el nombre **Dockerfile** y colocar dentro las siguientes líneas:

```dockerfile:Dockerfile
# Etapa de construcción
FROM node:18-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa de producción
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

## Contenerización

En cualquier terminal, ve al directorio de tu aplicación Next (en realidad, ya deberías estar aquí) y escribe

```bash
docker build -t my-great-app ./
```

esta comando creará una imagen de Docker (es como un sistema operativo con tu aplicación) para ti, y después de eso, solo debes realizar un paso más: ejecutar tu **imagen** creada (sistema operativo creado) en un **contenedor** (es como en una máquina virtual).

`ERROR` si algo sale mal y te encuentras con el error "Archivo ejecutable Docker-credential-desktop no encontrado en $PATH" en la terminal, simplemente prueba https://stackoverflow.com/a/65896682 y todo debería solucionarse.

## Inicio

```bash
docker run -p 3000:3000 my-great-app

```

Este comando ejecutará tu aplicación en http://localhost:3000

¡Eso es todo!

Si todo funciona bien, ¡bienvenido! Si no, discutámoslo...
