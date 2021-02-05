FROM python:3-stretch

RUN pip install -U pip

WORKDIR /usr/src/app

COPY ./requirements.dev.txt /usr/src/requirements.dev.txt
RUN pip install -r requirements.dev.txt

COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt

COPY . /usr/src/app
