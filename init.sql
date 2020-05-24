CREATE DATABASE IF NOT EXISTS books
    COLLATE utf8_general_ci;

USE books;
DROP TABLE IF EXISTS book;
DROP TABLE IF EXISTS localization;
DROP TABLE IF EXISTS language_book;

create table book (
    id      bigint(20)      not null auto_increment,
    name    varchar(50)     not null,
    year    int(4)          not null,
    primary key (id)
);

insert into book(name, year) VALUES ('spring in action', 2002),
('hibernate in action', 2002),
('java', 2002);

create table localization(
    id          bigint(20)      not null auto_increment,
    lang_code   varchar(10)     not null,
    primary key (id)
);

insert into localization(lang_code) VALUES ('BY'),
                                    ('RU'),
                                    ('PL');

create table language_book(
    id              bigint(20)      not null auto_increment,
    book_name       varchar(50)     not null,
    id_book         bigint(20)      not null,
    id_locale       bigint(20)      not null,
    primary key (id),
    foreign key (id_book) references book(id),
    foreign key (id_locale) references localization(id)
);

insert into language_book(book_name, id_book, id_locale) VALUES ('Spring в действии', 1, 2),
                                    ('Spring w akcji', 1, 3),
                                    ('Hibernate ў дзеянні', 2, 1);
