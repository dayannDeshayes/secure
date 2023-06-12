package com.demosecure.demosecure.service;

import com.demosecure.demosecure.model.dto.BearerToken;
import com.demosecure.demosecure.model.dto.LoginDto;
import com.demosecure.demosecure.model.dto.SignUpDto;
import org.springframework.http.ResponseEntity;

public interface IDemoUserSecurityService {

    /**
     * enregistre le nouveau user en base
     *
     * @param rSignUpDto : donnees en entree
     * @return le BearerToken ou msg d'erreur avec statut en erreur
     */
    ResponseEntity<?> register(SignUpDto rSignUpDto);

    /**
     * enregistre le nouveau user en base
     *
     * @param rSignUpDtoAdmin : donnees en entree
     * @return le BearerToken ou msg d'erreur avec statut en erreur
     */
    ResponseEntity<?> registerAdmin(SignUpDto rSignUpDtoAdmin);

    /**
     * authentifie le user
     *
     * @param rLoginDto : donnees en entree
     * @return le BearerToken ou erreur d'authentification
     */
    BearerToken authenticate(LoginDto rLoginDto);
}
