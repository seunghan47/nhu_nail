package com.nhu.nail.service;

import com.nhu.nail.model.Message;
import org.springframework.stereotype.Service;

import java.util.List;

public interface MessageService {
    public Message saveMessage(Message message);
    public List<Message> getAllMessages();
}
