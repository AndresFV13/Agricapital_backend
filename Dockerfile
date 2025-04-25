# Etapa 1: build con dependencias completas
FROM node:22.11.0 as builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY . .

RUN npm install

# Etapa 2: runtime
FROM node:22.11.0 as runner

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

# assets (opcional)
# COPY --from=builder /app/config ./config

# Exponer app
EXPOSE 3000

CMD ["node", "dist/main"]
