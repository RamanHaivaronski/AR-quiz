package ar.rest.demo.models;

import lombok.Data;

@Data
public class UserAnswers {

    private Long userAnswerId;
    private String userId;
    private Long questionId;
    private Long numberOfAttempts;
    private Boolean isCorrect;

}

