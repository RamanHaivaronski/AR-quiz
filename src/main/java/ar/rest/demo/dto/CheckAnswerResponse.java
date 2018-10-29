package ar.rest.demo.dto;

import lombok.Data;

@Data
public class CheckAnswerResponse {

    private boolean status;
    private String error;

}
