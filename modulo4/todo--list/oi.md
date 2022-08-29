Projeto ToDoList
Informações do projeto;
# Usuário
-id
-name
-nickname
-email
# Tarefas
-id
-title
-description
-deadline
-status: to_do || doing  ||  done
-author
-assignees

## Criação das seguintes tabelas

CREATE TABLE to_list-users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL
);

CREATE TABLE to_list-task (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) NOT "No description provided",
    deadline DATE,
    status ENUM("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES to_do_list_users(id)
);

CREATE TABLE to_do_list_assignees (
    task_id VARCHAR(64),
    assignee_id VARCHAR(64),
    PRIMARY KEY (task_id, assignee_id),
    FOREIGN KEY (task_id) REFERENCES to_do_list_tasks(id),
    FOREIGN KEY (assignee_id) REFERENCES to_do_list_user(id)
);
