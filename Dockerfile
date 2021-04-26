# Install dependencies only when needed
FROM node:14 AS deps

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:14 AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

ARG WORDPRESS_URL
ARG NEXT_PUBLIC_IMAGE_DOMAINS

ENV WORDPRESS_URL ${WORDPRESS_URL}
ENV NEXT_PUBLIC_IMAGE_DOMAINS ${NEXT_PUBLIC_IMAGE_DOMAINS}

RUN yarn build

# Production image, copy all the files and run next
FROM node:14 AS runner
WORKDIR /app

ENV NODE_ENV production

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json


EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# RUN npx next telemetry disable

CMD ["yarn", "start"]