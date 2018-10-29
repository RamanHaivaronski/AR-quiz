package ar.rest.demo.models;

import lombok.Data;

@Data
public class Answer {
    private int answerId;
    private String text;
    private boolean isCorrect;
    private int questionId;
}
