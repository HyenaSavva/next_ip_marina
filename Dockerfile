# Simple Dockerfile
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

ENV NEXT_PUBLIC_API_BASE_URL=https://igroom.ru/api/v2/profile
ENV NEXT_PUBLIC_MSW_BASE_URL=https://msw/
ENV NEXT_PUBLIC_ENABLE_MSW=true

# Build the app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
