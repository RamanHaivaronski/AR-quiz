package ar.rest.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

@Data
public class Answer {
    private Long answerId;
    private String text;
    @JsonIgnore
    private Boolean isCorrect;
    @JsonIgnore
    private Long questionId;
}
