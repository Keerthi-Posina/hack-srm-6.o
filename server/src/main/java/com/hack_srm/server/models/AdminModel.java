package com.hack_srm.server.models;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "lms_admins")
public class AdminModel extends UserModel{
    @Enumerated(EnumType.STRING)
    private FieldOfStudies fos;



}
