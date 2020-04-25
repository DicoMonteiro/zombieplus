### Baixar as imagens

docker pull postgres
docker pull dpage/pgadmin4
​docker pull papitoio/zombie-api
​docker pull papitoio/zombie-web

### Criar a rede  Docker

docker network create --driver bridge skynet

###  Subir o Banco de Dados

docker run --name pgdb --network=skynet -e "POSTGRES_PASSWORD=qaninja" -p 5432:5432 -v var/lib/postgresql/data -d postgres

### Subir o Administrador do Banco de Dados (PgAdmin)

docker run --name pgadmin --network=skynet -p 15432:80 -e "PGADMIN_DEFAULT_EMAIL=root@qaninja.io" -e "PGADMIN_DEFAULT_PASSWORD=qaninja" -d dpage/pgadmin4

### Criação da Base de Dados

* Logue no PGADMIN [http://pgadmin:15432]
user: root@qaninja.io
pass: qaninja
* Crie uma conexão com o servidor pgdb
* Crie uma base de dados com o nome zombieplus


### Subir a API 

docker run --name zombie-api --network=skynet -e "DATABASE=pgdb" -p 3000:3000 -d papitoio/zombie-api


* Veja se a API está online [http://zombie-api:4000]

### Subir a Aplicação Web

docker run --name zombie-web --network=skynet -e "VUE_APP_API=http://zombie-api:3000" -p 5000:5000 -d papitoio/zombie-web


* Veja se a WebApp está online [http://zombie-web:5000]

### Importante:​
### Quando você reiniciar o seu computador, certifique-se que o Docker esteja online e suba containers​ novamente:

docker start pgdb
docker start pgadmin
​docker start zombie-api
​docker start zombie-web

### Se alguma coisa der errado e for necessário refazer a aula, voce poderá remover os containers com os seguintes comandos:

docker rm -f ​pgdb
docker rm -f ​pgadmin
docker rm -f ​zombie-api
docker rm -f ​zombie-web


### Nomear os DNS para cada um

* Crie uma entrada DNS local no Hosts no Mac ou Linux:

Abre o terminal (iterm/hyper term) e digita:

sudo vim /etc/hosts

Adiciona a senha de administrador e digitar a opçao "i" para inclusão no arquivo:


`
127.0.0.1       pgdb
127.0.0.1       pgadmin
127.0.0.1       zombie-api
127.0.0.1       ​zombie-web
`

Após inserir o código no arquivo, clicar em "ESC", seguido de ":wq!", para ele sair e salvar a edição.

Para visualizar a edição se foi feita com sucesso:

cat /etc/hosts


* Crie uma entrada DNS local no Hosts no Windows:

Abre o terminal (prompt) e digita o notepad hosts e adiciona na ultima parte do arquivo: 

> 127.0.0.1 para Docker normal ou 192.168.99.100 para Docker Toolbox

127.0.0.1       pgdb
127.0.0.1       pgadmin
127.0.0.1       zombie-api
127.0.0.1       ​zombie-web

Ex: npm run test:404