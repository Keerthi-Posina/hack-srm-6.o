package com.hack_srm.server.services;

import com.hack_srm.server.dto.QuizDTO;
import com.hack_srm.server.models.Quiz;

import java.util.List;

public interface QuizService {

    List<Quiz> getAllQuizzes();
    Quiz getQuizById(Long id);
    Quiz createQuiz(QuizDTO quiz);
    Quiz updateQuiz(Long id, QuizDTO updatedQuiz);
    void deleteQuiz(Long id);

}
