# [Choice] Ubuntu version: bionic, focal
ARG VARIANT=focal
FROM mcr.microsoft.com/vscode/devcontainers/base:${VARIANT}
ENV TZ Asia/Ho_Chi_Minh

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends vim

RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN ./aws/install

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