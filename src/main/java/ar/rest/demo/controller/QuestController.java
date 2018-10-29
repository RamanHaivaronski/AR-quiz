package ar.rest.demo.controller;

import ar.rest.demo.models.Answer;
import ar.rest.demo.models.Question;
import ar.rest.demo.services.QuestionService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;

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
