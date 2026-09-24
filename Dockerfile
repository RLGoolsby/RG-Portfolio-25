# FROM node:20-alpine AS build

# WORKDIR /app

# COPY package*.json ./
# RUN npm ci

# COPY . .
# RUN npm run build

# FROM node:20-alpine

# WORKDIR /app

# COPY package*.json ./
# RUN npm ci --omit=dev

# COPY --from=build /app/dist ./dist

# EXPOSE 4173

# CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "4173"]

FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]