package ar.rest.demo.controller;

import ar.rest.demo.dto.CheckAnswerRequest;
import ar.rest.demo.dto.CheckAnswerResponse;
import ar.rest.demo.services.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/result")
public class AnswerController {

    @Autowired
    AnswerService service;

    @PostMapping("/")
    public CheckAnswerResponse getAnswer(@RequestBody CheckAnswerRequest answer) {
        Boolean result = service.checkAnswer(answer.getQuest(), answer.getAnswer());
        CheckAnswerResponse response = new CheckAnswerResponse();
        if (result == null) {
            response.setStatus(false);
            response.setError("NOT_FOUND");
        } else {
            response.setStatus(result);
        }
        return response;
    }

}
