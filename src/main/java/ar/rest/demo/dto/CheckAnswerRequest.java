package ar.rest.demo.dto;

import lombok.Data;

@Data
public class CheckAnswerRequest {

    private long answer;
    private long quest;

}
