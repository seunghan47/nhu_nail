package com.nhu.nail.service;

import com.nhu.nail.model.Customer;
import com.nhu.nail.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;
    @Override
    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public List<LocalDateTime> getBookedDates() {
        return customerRepository.findAll().stream()
                .map(Customer::getReservationDateTime)
                .collect(Collectors.toList());
    }

    @Override
    public List<LocalDateTime> getAvailableDates() {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime startDateTime = now.plusHours(3).withMinute(0).withSecond(0).withNano(0);
        LocalDateTime endDateTime = startDateTime.plusDays(7).withHour(18).withMinute(0).withSecond(0).withNano(0);

        List<LocalDateTime> bookedDates = getBookedDates();

        return Stream.iterate(startDateTime, dateTime -> dateTime.plusHours(1))
                .limit(java.time.Duration.between(startDateTime, endDateTime).toHours())
                .filter(dateTime -> !bookedDates.contains(dateTime) && dateTime.getHour() <= 18)
                .collect(Collectors.toList());
    }
}
