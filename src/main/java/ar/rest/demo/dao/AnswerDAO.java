package ar.rest.demo.dao;

import ar.rest.demo.models.UserAnswers;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

@Component
@Mapper
public interface AnswerDAO {

    @Select("SELECT is_correct FROM public.answer WHERE question_id=#{questionId} AND answer_id=#{answerId}")
    Boolean checkAnswer(@Param("questionId") long questionId,@Param("answerId") long answerId);

    @Insert("INSERT INTO public.user_answer (user_id, question_id, answer_id, is_correct) VALUES (#{userId}, #{questionId}, #{answerId}, #{isCorrect})")
    void insertUserAnswer(UserAnswers userAnswers);

}
