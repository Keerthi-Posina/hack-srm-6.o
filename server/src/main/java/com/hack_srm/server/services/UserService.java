package com.hack_srm.server.services;

import com.hack_srm.server.dto.AuthResponseDTO;
import com.hack_srm.server.models.UserModel;
import com.hack_srm.server.models.UserRole;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface UserService {

    UserModel createUser(UserModel user);
    String uploadBulkUsers(MultipartFile csvFile);
    String saveBulkUsers(List<UserModel> users);
    Optional<UserModel> getUserById(Long id);
    List<UserModel> getUsersByRole(UserRole role);
    void deleteUser(Long id);

    AuthResponseDTO loginUser(String username, String password);
}
