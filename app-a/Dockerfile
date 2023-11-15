FROM node:18.18.2-slim
ENV PORT = 3000
ENV APP_B = http://localhost:3001
ENV APP_C = http://localhost:3002
WORKDIR /app
COPY package*.json .
COPY main.js .
RUN npm install
CMD ["node", "main.js"]
EXPOSE 3000