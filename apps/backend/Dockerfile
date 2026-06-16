FROM node:24-alpine

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN corepack prepare pnpm@10.0.0 --activate

RUN pnpm install

COPY . .


CMD ["pnpm", "start:dev"]
