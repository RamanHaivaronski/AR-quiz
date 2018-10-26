package ar.rest.demo.models;

public class Answer {
    private int aid;
    private String text;
    private boolean answer_correct;
    private int qid;

    public int getAid() {
        return aid;
    }

    public void setAid(int aid) {
        this.aid = aid;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public boolean isAnswer_correct() {
        return answer_correct;
    }

    public void setAnswer_correct(boolean answer_correct) {
        this.answer_correct = answer_correct;
    }

    public int getQid() {
        return qid;
    }

    public void setQid(int qid) {
        this.qid = qid;
    }
}
