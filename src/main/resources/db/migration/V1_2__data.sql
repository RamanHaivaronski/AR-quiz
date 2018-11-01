INSERT INTO public.question (question_id, text) VALUES (1, 'Именно в этом году Польское царство обрело независимость:');
INSERT INTO public.question (question_id, text) VALUES (2, 'Этот писатель является автором произведений «Солярис», «Непобедимый», «Глас Господа»:');
INSERT INTO public.question (question_id, text) VALUES (3, 'На столько воеводств подразделяется Республика Польша:');
INSERT INTO public.question (question_id, text) VALUES (4, 'Так зовут действующего президента Республики Польша:');
INSERT INTO public.question (question_id, text) VALUES (5, 'Эта гора является самой высокой точкой Республики Польша (2499 м):');
INSERT INTO public.question (question_id, text) VALUES (6, 'Он – польский выдающийся композитор и пианист:');
INSERT INTO public.question (question_id, text) VALUES (7, 'Польша – крупный производитель этого:');
INSERT INTO public.question (question_id, text) VALUES (8, 'Именно в этот день войска Третьего рейха вторглись на территорию Польши:');
INSERT INTO public.question (question_id, text) VALUES (9, 'Что такое мазурка Домбровского?');
INSERT INTO public.question (question_id, text) VALUES (10, 'Это крупнейший средневековый кирпичный замок в мире, расположенный в городе Мальборк:');

INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (1, '1921', false, 1);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (2, '1916', false, 1);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (3, '1918', true , 1);

INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (4, 'Станислав Лем', true, 2);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (5, 'Тадеуш Ружевич', false, 2);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (6, 'Адам Мицкевич', false , 2);

INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (7, '15', false, 3);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (8, '16', true, 3);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (9, '18', false, 3);

INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (10, 'Бронислав Коморовский', false, 4);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (11, 'Матеуш Моравецкий', false, 4);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (12, 'Анджей Дуда', true, 4);

INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (13, 'Рысы', true, 5);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (14, 'Снежка', false, 5);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (15, 'Судеты', false , 5);

INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (16, 'Юзеф Эльснер', false, 6);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (17, 'Фредерик Шопен', true, 6);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (18, 'Войцех Живный', false, 6);

INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (19, 'Сахарной свеклы', true, 7);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (20, 'Бананов', false, 7);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (21, 'Мёда', false , 7);

INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (22, '1 сентября 1939 г.', true, 8);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (23, '22 июня 1941 г.', false, 8);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (24, '17 сентября 1939 г.', false , 8);

INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (25, 'Блюдо из свинины и овощей', false , 9);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (26, 'Национальный танец', false, 9);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (27, 'Гимн Польши', true, 9);

INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (28, 'Мариенбург', true, 10);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (29, 'Карбург', false, 10);
INSERT INTO public.answer (answer_id, text, is_correct, question_id) VALUES (30, 'Петруд', false , 10);
