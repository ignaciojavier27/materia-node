create database todo_list;
use todo_list;

create table tasks (
	id INT auto_increment primary key,
	title VARCHAR(255) not null,
	completed BOOLEAN default false
)engine=InnoDB;

