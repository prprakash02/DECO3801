package com.example.Chat;

import com.example.Chat.model.ChatDao;
import com.example.Chat.model.ChatMessage;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ChatApplicationTests {
	@Autowired
	private ChatDao dao;

	@Test
	void contextLoads() {
		ChatMessage message = new ChatMessage();
		message.setType(ChatMessage.MessageType.CHAT);
		message.setContent("MESSAGE");
		message.setSender("User Name");
		System.out.println(message);
		dao.save(message);
	}

}
