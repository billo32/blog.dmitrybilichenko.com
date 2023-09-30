---
title: Comment conteneuriser presque n'importe quelle application Next.js
date: '2023-09-25'
tags: ['code', 'extraits', 'docker', 'next.js', 'tutoriels']
draft: false
summary: Guide très succinct avec un extrait qui vous aidera à mettre votre application Next dans un conteneur Docker.
---

Je ne sais pas vraiment pourquoi vous voudriez le faire, mais si vous le souhaitez...

## Notre plan

1. Installez Docker - https://www.docker.com/ (téléchargez pour votre système d'exploitation + quelques clics de souris)
2. Créez une application Next.js - https://nextjs.org/ (dans n'importe quel terminal, exécutez `npx create-next-app@latest`)

## Préparation à la conteneurisation

Tout d'abord, dans le répertoire racine de votre application Next (j'espère que vous avez déjà une application Next), vous devez créer un fichier Dockerfile portant le nom **Dockerfile** et y insérer les lignes suivantes :

```dockerfile:Dockerfile
# Étape de construction
FROM node:18-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Étape de production
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

## Conteneurisation

Dans n'importe quel terminal, accédez au dossier de votre application Next (en fait, vous devriez déjà être ici) et tapez

```bash
docker build -t my-great-app ./
```

cette commande créera une image Docker (c'est comme un système d'exploitation avec votre application) pour vous, et après cela, il ne vous reste qu'une étape à effectuer - exécutez votre **image** créée (système d'exploitation créé) dans un **conteneur** (c'est comme dans une machine virtuelle)

`ERREUR` si quelque chose ne va pas et que vous rencontrez l'erreur "Fichier exécutable Docker-credential-desktop introuvable dans $PATH" dans le terminal, essayez simplement https://stackoverflow.com/a/65896682 et tout devrait être réparé.

## Démarrage

```bash
docker run -p 3000:3000 my-great-app

```

Cette commande exécutera votre application sur http://localhost:3000

C'est tout !

Si tout fonctionne bien - bienvenue ! Sinon, discutons-en...
