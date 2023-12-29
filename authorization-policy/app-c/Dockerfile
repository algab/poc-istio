FROM node:18.18.2-slim
ENV APP_A http://localhost:3000
ENV APP_B http://localhost:3001
WORKDIR /app
COPY package*.json .
COPY *.js .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3002