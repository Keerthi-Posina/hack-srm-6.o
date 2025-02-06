package com.hack_srm.server.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserCreationDTO {

    private String username;
    private String password;
    private String name;
    private String mail;
    private String phone;

}
