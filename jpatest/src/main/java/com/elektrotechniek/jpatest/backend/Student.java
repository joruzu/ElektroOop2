package com.elektrotechniek.jpatest.backend;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
public class Student {

    @Id
    Integer studentennummer;

    @OneToMany(mappedBy = "student")
    Set<Rapport> rapports;

    String naam;
    String achternaam;
    Integer cohort;     //limitaties erbij doen
    Integer afstudeer_jaar;  //idem
    String email;
    String geslacht;
    String orientatie;
    String studie_status;

    /*
    public Student(Integer studentennummer, Set<Rapport> rapports, String naam, String achternaam, Integer cohort, Integer afstudeer_jaar, String email, String geslacht, String orientatie, String studie_status) {
        this.studentennummer = studentennummer;
        this.rapports = rapports;
        this.naam = naam;
        this.achternaam = achternaam;
        this.cohort = cohort;
        this.afstudeer_jaar = afstudeer_jaar;
        this.email = email;
        this.geslacht = geslacht;
        this.orientatie = orientatie;
        this.studie_status = studie_status;
    }

    public Student() {
        super();
    }*/

    public Integer getStudentennummer() {
        return studentennummer;
    }

    public void setStudentennummer(Integer studentennummer) {
        this.studentennummer = studentennummer;
    }

    /*
    public Set<Rapport> getRapports() {
        return rapports;
    }

    public void setRapports(Set<Rapport> rapports) {
        this.rapports = rapports;
    }*/

    public String getNaam() {
        return naam;
    }

    public void setNaam(String naam) {
        this.naam = naam;
    }

    public String getAchternaam() {
        return achternaam;
    }

    public void setAchternaam(String achternaam) {
        this.achternaam = achternaam;
    }

    public Integer getCohort() {
        return cohort;
    }

    public void setCohort(Integer cohort) {
        this.cohort = cohort;
    }

    public Integer getAfstudeer_jaar() {
        return afstudeer_jaar;
    }

    public void setAfstudeer_jaar(Integer afstudeer_jaar) {
        this.afstudeer_jaar = afstudeer_jaar;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGeslacht() {
        return geslacht;
    }

    public void setGeslacht(String geslacht) {
        this.geslacht = geslacht;
    }

    public String getOrientatie() {
        return orientatie;
    }

    public void setOrientatie(String orientatie) {
        this.orientatie = orientatie;
    }

    public String getStudie_status() {
        return studie_status;
    }

    public void setStudie_status(String studie_status) {
        this.studie_status = studie_status;
    }
}
