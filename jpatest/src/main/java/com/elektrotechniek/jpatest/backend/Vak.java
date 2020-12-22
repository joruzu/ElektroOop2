package com.elektrotechniek.jpatest.backend;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

@Entity
@Table(name = "vak", schema = "elektrotechniek")
public class Vak {
    @Id
    Integer idvak;

    @OneToMany(mappedBy = "vak")
    Set<Rapport> rapports;

    String vak_naam;

    Float studiepunten;

    Integer semester;

    Character vak_orientatie;

    public Integer getIdvak() {
        return idvak;
    }

    public String getVak_naam() {
        return vak_naam;
    }

    public void setVak_naam(String vak_naam) {
        this.vak_naam = vak_naam;
    }

    public Float getStudiepunten() {
        return studiepunten;
    }

    public void setStudiepunten(Float studiepunten) {
        this.studiepunten = studiepunten;
    }

    public Integer getSemester() {
        return semester;
    }

    public void setSemester(Integer semester) {
        this.semester = semester;
    }

    public Character getVak_orientatie() {
        return vak_orientatie;
    }

    public void setVak_orientatie(Character vak_orientatie) {
        this.vak_orientatie = vak_orientatie;
    }

    public void setIdvak(Integer idvak) {
        this.idvak = idvak;
    }
}
