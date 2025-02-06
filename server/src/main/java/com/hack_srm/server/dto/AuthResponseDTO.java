package com.hack_srm.server.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AuthResponseDTO {

    private String feedback;
    private Boolean res; // True for success, False for any type of error
    private Object data; // If successful login, user data

}