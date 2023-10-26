FROM oven/bun:latest

WORKDIR /app

COPY package.json .
COPY . .

RUN bun install 

EXPOSE 3000

RUN bun run build

CMD [ "bun", "run", ".output/server/index.mjs" ]