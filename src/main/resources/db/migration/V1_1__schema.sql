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