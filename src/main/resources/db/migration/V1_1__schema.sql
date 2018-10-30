CREATE TABLE public.question
(
  question_id serial PRIMARY KEY NOT NULL,
  text varchar(255),
  picture varchar(255),
  sound varchar(255)
);

CREATE TABLE public.answer
(
  answer_id serial PRIMARY KEY NOT NULL,
  text varchar(255),
  is_correct boolean,
  question_id int NOT NULL,
  CONSTRAINT answer_question_qid_fk FOREIGN KEY (question_id) REFERENCES question (question_id)
);

CREATE TABLE public.user_answer
(
  user_id      VARCHAR(100),
  question_id  int NOT NULL
    CONSTRAINT user_answer_question_fk
    REFERENCES question,
  answer_id    int NOT NULL
    CONSTRAINT user_answer_answer_fk
    REFERENCES answer,
  is_correct   boolean,
  useranswerid serial  NOT NULL
    CONSTRAINT user_answer_pk
    PRIMARY KEY
);