package ar.rest.demo.controller;

import ar.rest.demo.dto.CheckAnswerRequest;
import ar.rest.demo.dto.CheckAnswerResponse;
import ar.rest.demo.models.UserAnswers;
import ar.rest.demo.services.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/result")
public class AnswerController {

    @Autowired
    AnswerService service;

    @PostMapping("/")
    public CheckAnswerResponse getAnswer(@RequestBody CheckAnswerRequest answer) {
        return service.addAnswer(answer);
    }

    @GetMapping("/checkAnswer")
    public List<UserAnswers> getAllAnswers(){
        return service.checkAnswerResponse();
    }

}
