package ar.rest.demo.dao;

import ar.rest.demo.models.Answer;
import ar.rest.demo.models.Question;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Mapper
public interface ChampionDAO {

    @Select("SELECT * FROM quiz.answers")
    List<Question> getAllChampions();


    @Select("SELECT name FROM champions.list WHERE id=#{id}")
    List<String> getChampionsName(int id);

    @Select("SELECT id FROM champions.list WHERE name=#{name}")
    long getChampionId(String name);

    @Select("SELECT * FROM quiz.answers WHERE qid=#{qid} AND text=#{text}")
    Answer getAnswerCheck(@Param("qid") int qid, @Param("text") String text);

    @Select("SELECT text FROM quiz.answers WHERE qid=#{qid} AND text='#{text}'")
    String getA(@Param("qid") int qid, @Param("text") String text);
}
