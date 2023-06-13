package com.demosecure.demosecure.model;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public enum RoleName {
    ADMIN("ADMIN"), GEST("GEST"), USER("USER");

    private String name;
}
