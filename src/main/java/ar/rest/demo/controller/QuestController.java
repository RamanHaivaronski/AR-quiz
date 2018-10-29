package ar.rest.demo.controller;

import ar.rest.demo.models.Answer;
import ar.rest.demo.models.Question;
import ar.rest.demo.services.QuestionService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/question")
public class QuestController {

    @Autowired
    QuestionService service;

    @GetMapping("/{id}")
    @ResponseBody
    public Question getQuestion(@PathVariable("id") long id) {
        return service.getQuestion(id);
    }
}
