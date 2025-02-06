package com.hack_srm.server.services;

import com.hack_srm.server.dto.StepDTO;
import com.hack_srm.server.models.Step;

import java.util.List;

public interface StepService {

    List<Step> getAllSteps();
    Step getStepById(Long id);
    Step createStep(StepDTO step);
    Step updateStep(Long id, StepDTO updatedStep);
    void deleteStep(Long id);

}
