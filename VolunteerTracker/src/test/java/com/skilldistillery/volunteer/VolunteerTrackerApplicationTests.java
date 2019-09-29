package com.skilldistillery.volunteer;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Optional;

import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.skilldistillery.volunteer.entities.Volunteer;
import com.skilldistillery.volunteer.repositories.VolunteerRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
public class VolunteerTrackerApplicationTests {
	@Autowired
	private VolunteerRepository repo;
	

	@Test
	@DisplayName("test find by id")
	public void contextLoads() {
		Optional<Volunteer> vol = repo.findById(1);
		if(vol.isPresent()) {
			Volunteer vol1 = vol.get();
			assertEquals("paul", vol1.getFirstname());
		}
	}

}
