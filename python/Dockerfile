FROM python:3-stretch

RUN pip install -U pip

WORKDIR /usr/src/app

COPY ./tools_requirements.txt /usr/src/app/tools_requirements.txt
RUN pip install -r tools_requirements.txt

COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt

COPY . /usr/src/app
