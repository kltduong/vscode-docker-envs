FROM ubuntu:20.04

RUN apt-get update && apt-get install --no-install-recommends --yes
RUN apt-get -y install git

ENTRYPOINT ["tail", "-f", "/dev/null"]
