FROM node:20 AS deps
WORKDIR /app
# Only install dependencies (better layer caching)
COPY package*.json ./
# Reduce network flakiness and handle peer deps
ENV npm_config_loglevel=warn \
    npm_config_fund=false \
    npm_config_audit=false
RUN npm install --legacy-peer-deps --no-progress --prefer-offline

FROM node:20 AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:alpine AS runner
# Copy built static assets
COPY --from=build /app/build /usr/share/nginx/html
# Provide a basic default nginx config suitable for single-page apps
# (serves index.html for unknown routes)
RUN printf "server {\n  listen 80;\n  server_name _;\n  root /usr/share/nginx/html;\n  index index.html;\n  location / {\n    try_files \$uri /index.html;\n  }\n  location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$ {\n    expires 1y;\n    add_header Cache-Control 'public, immutable';\n  }\n}\n" > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
