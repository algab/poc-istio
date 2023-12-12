FROM nginx:1.25.3
WORKDIR /app
COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html styles.css script.js /app
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80