# [Choice] Ubuntu version: bionic, focal
# This ARG is overritten in devcontainer.json
ARG VARIANT=3.7
FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}

ENV TZ Asia/Ho_Chi_Minh

# [Option] Install Node.js
# These ARGs is overritten in devcontainer.json
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends vim

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install

# User vscode is created by default
RUN su vscode -c "npm install -g aws-cdk"

# Config GIT
# RUN git config --global user.name "Duong Trieu" \
#     && git config --global user.email "kltduong@gmail.com" \
#     &&  git config --global core.editor "vim"

# RUN export DEBIAN_FRONTEND=noninteractive \
#     && ssh-keygen -t ed_kltd -f ~/.ssh/id_kltd -q -P "" \
#     && eval "$(ssh-agent -s)" \
#     && chmod 400 ~/.ssh/id_kltd \
#     && ssh-add ~/.ssh/id_kltd \
#     && ssh -T git@github.com