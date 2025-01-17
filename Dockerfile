ARG BASEIMAGE=node:20-alpine

FROM ${BASEIMAGE} as builder
ENV ALARM_CHANNAL_CONFIG=1,2

COPY . /workspace
WORKDIR /workspace

RUN npm config set registry https://registry.npmmirror.com/
RUN npm install
RUN npm run build
RUN rm -rf node_modules
RUN npm install --omit=dev

FROM ${BASEIMAGE}
WORKDIR /app
COPY --from=builder /workspace .

CMD npm start
