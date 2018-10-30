package ar.rest.demo.controller;

import ar.rest.demo.models.Question;
import ar.rest.demo.services.QuestionService;
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
//        OAuth2Authentication auth = (OAuth2Authentication)SecurityContextHolder.getContext().getAuthentication();
//        LinkedHashMap map = (LinkedHashMap)auth.getUserAuthentication().getDetails();
//        String userId = (String)map.get("sub");
        return service.getQuestion(id);
    }
}
