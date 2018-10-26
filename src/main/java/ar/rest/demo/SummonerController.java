package ar.rest.demo;


import ar.rest.demo.models.Answer;
import ar.rest.demo.models.Question;
import ar.rest.demo.services.ChampionsServiceImpl;
import jdk.nashorn.internal.runtime.QuotedStringTokenizer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
public class SummonerController {

    @Autowired
    ChampionsServiceImpl service;

    @PostMapping("/result/{qid}/{text}")
    @ResponseBody
    public boolean getAnswer(@PathVariable("qid") int qid, @PathVariable("text") String text) {
        Answer result = service.getAnswerCorrect(qid, text);
        boolean res = result.isAnswer_correct();
        return res;
    }

    @GetMapping("/question/{qid}")
    @ResponseBody
    public Question getQuestion(@PathVariable("qid") int qid) {
        return service.getQuestion(qid);
    }





}
