FROM node:18.18.2-slim
WORKDIR /app
COPY package*.json .
COPY *.js .
RUN npm install
CMD ["npm", "start"]
EXPOSE 3000