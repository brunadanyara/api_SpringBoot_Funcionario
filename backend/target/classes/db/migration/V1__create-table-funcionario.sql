create table funcionario(

    id bigint not null auto_increment,
    nome varchar(30) not null,
    sobrenome varchar(50) not null,
    email varchar(100) not null unique,
    numeronis integer not null unique,

    primary key(id)

);