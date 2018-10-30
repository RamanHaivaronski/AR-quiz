package ar.rest.demo.services;

import ar.rest.demo.dao.AnswerDAO;
import ar.rest.demo.dto.CheckAnswerRequest;
import ar.rest.demo.dto.CheckAnswerResponse;
import ar.rest.demo.models.UserAnswers;
import org.apache.ibatis.jdbc.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.LinkedHashMap;


@Service
public class AnswerService {

    @Autowired
    AnswerDAO answerDAO;

    @Value("${spring.profiles.active}")
    private String activeProfile;

    public Boolean checkAnswer(long qid, long text) {
        return answerDAO.checkAnswer(qid, text);
    }

    public CheckAnswerResponse addAnswer(CheckAnswerRequest answer){

        Boolean result = checkAnswer(answer.getQuest(), answer.getAnswer());
        String[] str = activeProfile.split(",");
        boolean isUnsecured = Arrays.asList(str).contains("unsecured");
        UserAnswers userAnswer = new UserAnswers();

        CheckAnswerResponse response = new CheckAnswerResponse();
        if (result == null) {
            response.setStatus(false);
            response.setError("NOT_FOUND");
        } else {
            response.setStatus(result);
        }

        if (!isUnsecured) {
            OAuth2Authentication auth = (OAuth2Authentication) SecurityContextHolder.getContext().getAuthentication();
            LinkedHashMap map = (LinkedHashMap) auth.getUserAuthentication().getDetails();
            String userId = (String) map.get("sub");
            System.out.println(userId);
        } else {
            String userId = "1234";
            userAnswer.setUserId(userId);
            userAnswer.setIsCorrect(result);
            userAnswer.setAnswerId(answer.getAnswer());
            userAnswer.setQuestionId(answer.getQuest());

        }


        if (answerDAO.checkForAnswer(userAnswer) == null) {
            answerDAO.insertUserAnswer(userAnswer);
        } else {
            answerDAO.updateUserAnswer(userAnswer);
        }

        return response;
    }

}
