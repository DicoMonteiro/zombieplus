
# Criar a rede Skynet (para atender os ambiente locais que temos em outros cursos)
docker network create skynet

# Criar o volume no Docker
docker volume create jenkins-docker-certs
docker volume create jenkins-data


## Baixar imagem do docker

docker image pull jenkinsci/blueocean

## Configuração para Mac ou Linux

docker container run --name jenkins --rm --detach \ 
  --network skynet --env DOCKER_HOST=tcp://docker:2376 \
  --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 \
  --volume jenkins-data:/var/jenkins_home \
  --volume jenkins-docker-certs:/certs/client:ro \
  --publish 8080:8080 --publish 50000:50000 jenkinsci/blueocean


## Configuração para Windows

# Primeiro Container (Dados)
docker container run --name jenkins-docker --detach ^
  --privileged --network skynet --network-alias docker ^
  --env DOCKER_TLS_CERTDIR=/certs ^
  --volume jenkins-docker-certs:/certs/client ^
  --volume jenkins-data:/var/jenkins_home ^
  docker:dind

# Segundo Container (Jenkins Server)
docker container run --name jenkins-blueocean --detach ^
  --network skynet --env DOCKER_HOST=tcp://docker:2376 ^
  --env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1 ^
  --volume jenkins-data:/var/jenkins_home ^
  --volume jenkins-docker-certs:/certs/client:ro ^
  --publish 8080:8080 --publish 50000:50000 jenkinsci/blueocean

# Abrir o jenkins no browser

127.0.0.1:8080

# Comando para acessar o container do Jenkins
docker container exec -it jenkins-blueocean bash

# Copiar a hash gerada e inserir no browser