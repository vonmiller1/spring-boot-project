package io.abnd.rest;

import io.abnd.model.Message;
import io.abnd.service.intf.TestService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestController {

	private final TestService testService;

	public TestController(TestService testService) {
	    this.testService = testService;
    }

	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping(value = "/test/get/json", produces = "application/json")
	public List<Message> testGetJson() {
	    return this.testService.test();
	}
}
