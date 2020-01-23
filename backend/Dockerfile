FROM python:2.7
WORKDIR /app
ADD requirements.txt /app
RUN pip --no-cache-dir install -r requirements.txt
EXPOSE 5003
ENV ENDORSEGG_ENV=PROD
ADD . .