# [Choice] Python version: 3, 3.9, 3.8, 3.7, 3.6
ARG VARIANT=3
FROM mcr.microsoft.com/vscode/devcontainers/python:${VARIANT}
ENV TZ Asia/Ho_Chi_Minh

RUN apt-get update && apt-get -y install git vim

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

# Config GIT
# RUN git config --global user.name "Duong Trieu"
# RUN git config --global user.email "kltduong@gmail.com"
# RUN git config --global core.editor "vim"
# RUN ssh-keygen -t ed25519 -C "kltduong@gmail.com"
# RUN eval "$(ssh-agent -s)"
# RUN ssh-add ~/.ssh/id_ed25519
# RUN ssh -T git@github.com
