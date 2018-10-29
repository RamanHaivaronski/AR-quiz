package ar.rest.demo.models;

import lombok.Data;

import java.util.List;

@Data
public class Question {
    private Long questionId;
    private String text;
    private String picture;
    private String sound;
    private List<Answer> answers;
}
