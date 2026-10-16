package io.abnd.service.impl;

import io.abnd.model.Message;
import io.abnd.service.intf.TestService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class TestServiceImpl implements TestService {

	public List<Message> test() {
        return Collections.unmodifiableList(Arrays.asList(
                new Message("Message1", "Hello, world!"),
                new Message("Message2", "Another one!")
        ));
    }

}
