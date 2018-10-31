package ar.rest.demo.dao;

import ar.rest.demo.models.UserAnswers;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface AnswerDAO {

    @Select("SELECT is_correct FROM public.answer WHERE question_id=#{questionId} AND answer_id=#{answerId}")
    Boolean checkAnswer(@Param("questionId") long questionId,@Param("answerId") long answerId);

    @Insert("INSERT INTO public.user_answer (user_id, question_id, answer_id, is_correct) VALUES (#{userId}, #{questionId}, #{answerId}, #{isCorrect})")
    void insertUserAnswer(UserAnswers userAnswers);

    @Select("select * from public.user_answer where user_id = #{userId} and question_id = #{questionId} and answer_id=#{answerId}")
    UserAnswers checkForAnswer(UserAnswers userAnswers);

    @Update("UPDATE public.user_answer SET answer_id=#{answerId} where user_id =#{userId} and question_id =#{questionId} and answer_id=#{answerId}")
    void updateUserAnswer(UserAnswers userAnswers);

    @Select("SELECT * FROM public.user_answer where user_id =#{userId}")
    @Results(value = {
            @Result(property="questionId", column="question_id"),
            @Result(property="answerId", column="answer_id"),
            @Result(property="userId", column="user_id"),
            @Result(property="isCorrect", column="is_correct")
    })
    List<UserAnswers> checkAllAnswers (UserAnswers userAnswers);
}
