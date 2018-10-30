package ar.rest.demo.controller;

import ar.rest.demo.dto.CheckAnswerRequest;
import ar.rest.demo.services.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/result")
public class AnswerController {

    @Autowired
    AnswerService service;

    @PostMapping("/")
    public void getAnswer(@RequestBody CheckAnswerRequest answer) {
        service.addAnswer(answer);
    }

}
