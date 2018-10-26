package ar.rest.demo;


import ar.rest.demo.models.Answer;
import ar.rest.demo.services.ChampionsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
public class SummonerController {

    @Autowired
    ChampionsServiceImpl service;


//    @GetMapping("/result/{qid}/{text}")
//    @ResponseBody
//    public boolean getAnswerCorrect(@PathVariable("qid") int qid1, @PathVariable("text") String text1) {
//        return service.getAnswerCorrect(qid1, text1);
//    }

    @GetMapping("/result/{qid}/{text}")
    @ResponseBody
    public boolean getAnswer1(@PathVariable("qid") int qid1, @PathVariable("text") String text1) {
        Answer result = service.getAnswer(qid1, text1);
        boolean res = result.isAnswer_correct();
        return res;
    }

//    // 2 returns your total mastery level
//    @GetMapping("/summonerMastery/{summonerName}")
//    public int getSummonerMastery(@PathVariable("summonerName") String summonerName) {
//        return service.getSummonerMastery(summonerName);
//    }

}
