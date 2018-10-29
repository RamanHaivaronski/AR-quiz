package ar.rest.demo.dao;

import ar.rest.demo.models.Answer;
import ar.rest.demo.models.Question;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface QuestionDAO {

    @Select("SELECT * FROM public.question WHERE question_id=#{questionId}")
    @Results(value = {
            @Result(property="questionId", column="question_id"),
            @Result(property="answers", javaType=List.class, column="question_id",
                    many=@Many(select="getAnswersByQuestionId"))
    })
    Question getQuestionById(long questionId);

    @Select("SELECT answer_id,text FROM public.answer WHERE question_id=#{questionId}")
    @Results(value = {
            @Result(property="answerId", column="answer_id"),
    })
    List<Answer> getAnswersByQuestionId(long questionId);

}
