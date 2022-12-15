FROM node:alpine
WORKDIR /app
COPY package.json .
RUN ["npm","install"]
COPY src ./src
EXPOSE 3003
CMD ["npm", "start"]