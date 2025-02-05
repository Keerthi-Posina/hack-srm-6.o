package com.hack_srm.server.services;

import com.hack_srm.server.dto.QuizQuestionDTO;
import com.hack_srm.server.models.Question;

import java.util.List;

public interface QuestionService {

    List<Question> getAllQuestions();
    Question getQuestionById(Long id);
    Question createQuestion(QuizQuestionDTO question);
    Question updateQuestion(Long id, QuizQuestionDTO updatedQuestion);
    void deleteQuestion(Long id);

}
