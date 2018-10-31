package ar.rest.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

@Data
public class UserAnswers {

    private Long userAnswerId;
    private String userId;
    private Long questionId;
    private Long answerId;
    private Boolean isCorrect;

}

