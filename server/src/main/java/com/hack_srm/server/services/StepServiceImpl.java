package com.hack_srm.server.services;

import com.hack_srm.server.dto.StepDTO;
import com.hack_srm.server.models.Content;
import com.hack_srm.server.models.Quiz;
import com.hack_srm.server.models.Step;
import com.hack_srm.server.repositories.StepRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StepServiceImpl implements StepService {

    @Autowired
    private StepRepo stepRepo;

    @Override
    public List<Step> getAllSteps() {
        return List.of();
    }

    @Override
    public Step getStepById(Long id) {
        return null;
    }

    @Override
    public Step createStep(StepDTO step) {
        Step newStep = new Step();

        newStep.setContent(new Content());
        newStep.setQuiz(new Quiz());


        return stepRepo.save(newStep);
    }

    @Override
    public Step updateStep(Long id, StepDTO updatedStep) {
        return null;
    }

    @Override
    public void deleteStep(Long id) {

    }
}
