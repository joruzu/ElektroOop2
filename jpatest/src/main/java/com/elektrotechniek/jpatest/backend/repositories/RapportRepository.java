package com.elektrotechniek.jpatest.backend.repositories;

import com.elektrotechniek.jpatest.backend.Rapport;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RapportRepository extends JpaRepository<Rapport, Integer> {

}


/*
 * select * from elektrotechniek.rapport where datum = any (
 *	select max(datum) as datum from elektrotechniek.rapport group by vak_idvak
 * )
 */
