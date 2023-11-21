FROM oven/bun
WORKDIR /app
COPY package.json .
RUN bun install
COPY . .
RUN npm build
EXPOSE 3000
CMD ["npm", "start"]
