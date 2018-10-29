package ar.rest.demo.dao;

import ar.rest.demo.models.Answer;
import ar.rest.demo.models.Question;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface AnswerDAO {

    @Select("SELECT is_correct FROM public.answer WHERE question_id=#{question_id} AND answer_id=#{answer_id}")
    Boolean checkAnswer(@Param("question_id") long questionId, @Param("answer_id") long answerId);

}
