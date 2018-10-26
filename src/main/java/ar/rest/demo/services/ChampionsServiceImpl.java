package ar.rest.demo.services;

import ar.rest.demo.dao.ChampionDAO;
import ar.rest.demo.models.Answer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ChampionsServiceImpl {

    @Autowired
    ChampionDAO championDAO;

    public Answer getAnswerCorrect(int qid, String text){
        return championDAO.getAnswerCheck(qid, text);
    }

    public Answer getAnswer(int qid, String text){
        Answer a = championDAO.getAnswerCheck(qid, text);
        System.out.println(a);
        return a;
    }

}
