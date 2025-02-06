package com.hack_srm.server.services;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.hack_srm.server.dto.QuizDTO;
import com.hack_srm.server.models.Question;
import com.hack_srm.server.models.Quiz;
import com.hack_srm.server.models.Step;
import com.hack_srm.server.repositories.QuizRepo;
import com.hack_srm.server.repositories.StepRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuizServiceImpl implements QuizService {

    @Autowired
    private QuizRepo quizRepo;

    @Autowired
    private StepRepo stepRepo;

    private final Gson gson = new Gson();

    @Override
    public List<Quiz> getAllQuizzes() {
        return quizRepo.findAll();
    }

    @Override
    public Quiz getQuizById(Long id) {
        return null;
    }

    @Override
    public Quiz createQuiz(QuizDTO quiz) {
        Quiz newQuiz = new Quiz();
        newQuiz.setQuestions(formatQuestionStrings(quiz.getQuestionsJsonString()));
        newQuiz.setTotalMarks(quiz.getTotalMarks());
        newQuiz.setPassingMarks(quiz.getPassingMarks());
        newQuiz.setStep(null);

        return quizRepo.save(newQuiz);
    }

    private Step getStp(Long stepId) {
        return stepRepo.getStepsById(stepId);
    }

    public List<Question> formatQuestionStrings(String questionsJsonString) {
        List<Question> questionsList = new ArrayList<>();
        try {
            JsonArray jsonArray = JsonParser.parseString(questionsJsonString).getAsJsonArray();

            for (int i = 0; i < jsonArray.size(); i++) {
                JsonObject jsonObject = jsonArray.get(i).getAsJsonObject();
                Question question = new Question();
                question.setQuestionText(jsonObject.get("question").getAsString());
                question.setOptions(gson.toJson(jsonObject.get("options"))); // Convert options to JSON string
                question.setCorrectAnswer(jsonObject.get("answer").getAsString());

                questionsList.add(question);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return questionsList;
    }

    @Override
    public Quiz updateQuiz(Long id, QuizDTO updatedQuiz) {
        return null;
    }

    @Override
    public void deleteQuiz(Long id) {

    }
}
