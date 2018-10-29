package ar.rest.demo.models;

import lombok.Data;

@Data
public class Question {
    private int question_id;
    private String text;
    private String picture;
    private String sound;
}
