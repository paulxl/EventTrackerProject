package com.skilldistillery.volunteer.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.fail;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import com.skilldistillery.volunteer.entities.Volunteer;

class VolunteerTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Volunteer vol;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("volunteerTracker");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		vol = em.find(Volunteer.class, 4);

	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		vol = null;
	}

//	@Test
//	void test() {
//		assertNotNull(vol);
//	}
//	
	@Test
	@DisplayName("testing fields of entity")
	public void test2() {
		//assertNotNull(vol);
		assertEquals("heart", vol.getLastname());

	}

}
