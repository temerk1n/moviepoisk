FROM node:18-alpine AS Development
ENV NODE_ENV development

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 7070

CMD ["npm", "start"]