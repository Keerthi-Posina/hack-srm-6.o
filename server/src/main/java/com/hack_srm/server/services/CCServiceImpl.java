package com.hack_srm.server.services;

import com.hack_srm.server.dto.UserCreationDTO;
import com.hack_srm.server.models.CCModel;
import com.hack_srm.server.models.UserRole;
import com.hack_srm.server.repositories.CCRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CCServiceImpl implements CCService {

    @Autowired
    private CCRepo ccRepo;

    @Override
    public CCModel createCoordinator(UserCreationDTO coordinator) {

        CCModel ccModel = new CCModel();

        ccModel.setName(coordinator.getName());
        ccModel.setUsername(coordinator.getUsername());
        ccModel.setPassword(coordinator.getPassword());
        ccModel.setMail(coordinator.getMail());
        ccModel.setPhone(coordinator.getPhone());
        ccModel.setRole(UserRole.CC);

        return ccRepo.save(ccModel);
    }

    @Override
    public List<CCModel> bulkCreateCoordinators(List<CCModel> coordinators) {
        return List.of();
    }

    @Override
    public Optional<CCModel> getCoordinatorById(Long id) {
        return Optional.empty();
    }

    @Override
    public List<CCModel> getAllCoordinators() {
        return ccRepo.findAll();
    }
}
