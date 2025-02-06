package com.hack_srm.server.services;

import com.hack_srm.server.dto.UserCreationDTO;
import com.hack_srm.server.models.CCModel;

import java.util.List;
import java.util.Optional;

public interface CCService {

    CCModel createCoordinator(UserCreationDTO coordinator);
    List<CCModel> bulkCreateCoordinators(List<CCModel> coordinators);
    Optional<CCModel> getCoordinatorById(Long id);
    List<CCModel> getAllCoordinators();

}
