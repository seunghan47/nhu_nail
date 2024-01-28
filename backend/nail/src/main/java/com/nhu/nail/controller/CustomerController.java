package com.nhu.nail.controller;

import com.nhu.nail.model.Customer;
import com.nhu.nail.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin("http://localhost:3000")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/add")
    public String addCustomer(@RequestBody Customer customer) {
        customerService.saveCustomer(customer);
        return "successfully added";
    }

    @GetMapping("/getAll")
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/availableDates")
    public ResponseEntity<List<LocalDateTime>> getAvailableDates() {
        List<LocalDateTime> availableDates = customerService.getAvailableDates();
        return ResponseEntity.ok(availableDates);
    }
}
