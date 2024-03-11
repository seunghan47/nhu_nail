package com.nhu.nail.controller;


import com.nhu.nail.model.Message;
import com.nhu.nail.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/message")
@CrossOrigin(origins = "*")
public class MessageController {

    @Autowired
    public MessageService messageService;

    @PostMapping("/add")
    public ResponseEntity<Message> addMessage(@RequestBody Message message) {
        messageService.saveMessage(message);
        return ResponseEntity.ok(message);
    }

    @GetMapping("/getMessage")
    public List<Message> getMessages() {
        return messageService.getAllMessages();
    }
}
