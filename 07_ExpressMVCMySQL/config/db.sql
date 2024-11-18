create database TODO_LIST;
use TODO_LIST;

create table TASKS (
	ID INT auto_increment primary key,
	TITLE VARCHAR(255) not null,
	COMPLETED BOOLEAN default false
)engine=InnoDB;

