FROM node:18.18.2-slim
ENV APP_A http://localhost:3000
ENV APP_C http://localhost:3002
WORKDIR /app
COPY package*.json .
COPY *.js .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3001