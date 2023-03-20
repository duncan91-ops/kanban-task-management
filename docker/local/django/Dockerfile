FROM python:3.11.0-slim-buster

ENV APP_HOME=/app
RUN mkdir ${APP_HOME}
RUN mkdir ${APP_HOME}/staticfiles
WORKDIR ${APP_HOME}

LABEL maintainer="duncankithinji91@gmail.com"
LABEL description="Development Image for Kanban Project"

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

RUN apt-get update \
  && apt-get install -y build-essential \
  && apt-get install -y libpq-dev \
  && apt-get install -y gettext \
  && apt-get install -y netcat gcc postgresql \
  && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false \
  && rm -rf /var/lib/apt/lists/*

RUN pip3 install -U pip

COPY ./requirements.txt /app/requirements.txt 

RUN pip3 install -r requirements.txt 

COPY ./scripts/entrypoint /entrypoint
RUN sed -i 's/\r$//g' /entrypoint
RUN chmod +x /entrypoint

COPY ./scripts/start /start
RUN sed -i 's/\r$//g' /start
RUN chmod +x /start

ENTRYPOINT [ "/entrypoint" ]
