package com.hack_srm.server.models;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class CCModel extends UserModel{
    @OneToMany(mappedBy = "coordinator")
    private List<CourseModel> courses;
}
