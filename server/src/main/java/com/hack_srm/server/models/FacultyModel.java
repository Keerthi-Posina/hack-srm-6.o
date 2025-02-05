package com.hack_srm.server.models;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "lms_faculty")
@Getter
@Setter
public class FacultyModel extends UserModel{

    @OneToMany(mappedBy = "faculty")
    private List<SectionModel> sections;
}
