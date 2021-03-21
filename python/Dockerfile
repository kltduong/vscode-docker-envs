FROM python:latest
# FROM fnndsc/ubuntu-python3

# RUN apt-get update \
#   && apt-get install -y curl unzip less

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install

RUN pip install -U pip

WORKDIR /usr/src/app

COPY ./requirements.dev.txt /usr/src/app/requirements.dev.txt
RUN pip install -r requirements.dev.txt

COPY ./requirements.txt /usr/src/app/requirements.txt
RUN pip install -r requirements.txt

COPY . /usr/src/app
