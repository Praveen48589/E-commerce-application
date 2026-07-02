# -------- Builder --------
FROM node:22-alpine AS builder

WORKDIR /app

RUN apk add --no-cache python3 make g++

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


# -------- Runner --------
FROM node:22-alpine AS runner

WORKDIR /app

# Update Alpine packages
RUN apk update && apk upgrade --no-cache

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node","server.js"]