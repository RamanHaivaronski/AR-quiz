package ar.rest.demo.dao;

import ar.rest.demo.models.Answer;
import ar.rest.demo.models.Question;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface ChampionDAO {


    @Select("SELECT * FROM public.answer WHERE qid=#{qid} AND text=#{text}")
    Answer getAnswerCheck(@Param("qid") int qid, @Param("text") String text);

    @Select("SELECT * FROM public.question WHERE qid=#{qid}")
    Question getQuestion(@Param("qid") int qid);

}
