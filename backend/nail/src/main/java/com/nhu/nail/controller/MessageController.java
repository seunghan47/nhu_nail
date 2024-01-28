package com.nhu.nail.controller;


import com.nhu.nail.model.Message;
import com.nhu.nail.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/message")
public class MessageController {

    @Autowired
    public MessageService messageService;

    @PostMapping("/add")
    public String addMessage(@RequestBody Message message) {
        messageService.saveMessage(message);
        return "successfully saved " + message.toString();
    }

    @GetMapping("/getMessage")
    public String getMessages(@RequestBody Message message) {
        return messageService.getAllMessages().toString();
    }
}
