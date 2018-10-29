package ar.rest.demo.services;

import ar.rest.demo.dao.AnswerDAO;
import ar.rest.demo.dao.QuestionDAO;
import ar.rest.demo.models.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.rest.demo.dao.AnswerDAO;
import ar.rest.demo.dao.QuestionDAO;
import ar.rest.demo.models.Answer;
import ar.rest.demo.models.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AnswerService {

    @Autowired
    AnswerDAO answerDAO;

    public Boolean checkAnswer(long qid, long text) {
        return answerDAO.checkAnswer(qid, text);
    }

}
