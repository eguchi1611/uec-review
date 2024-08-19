FROM public.ecr.aws/docker/library/node:20.16.0-slim
ENV NODE_ENV=production

COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:0.8.4 /lambda-adapter /opt/extensions/lambda-adapter
ENV PORT=1337 HOME=/tmp

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 1337
CMD exec ./run.sh
