package com.nhu.nail.service;

import com.nhu.nail.model.Customer;

import java.time.LocalDateTime;
import java.util.List;

public interface CustomerService {
    public Customer saveCustomer(Customer customer);
    public List<Customer> getAllCustomers();
    public List<LocalDateTime> getAvailableDates();
    public List<LocalDateTime> getBookedDates();


}
