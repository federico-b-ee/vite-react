FROM node:19.4-alpine
WORKDIR /vite-app
COPY package* ./
RUN npm install
COPY . .
EXPOSE 5137
CMD [ "npm", "run", "dev" ]
