package ar.rest.demo.dao;

import ar.rest.demo.models.Answer;
import ar.rest.demo.models.Question;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface QuestionDAO {

    @Select("SELECT * FROM public.question WHERE question_id=#{question_id}")
    Question getQuestionById(@Param("question_id") long id);

}
