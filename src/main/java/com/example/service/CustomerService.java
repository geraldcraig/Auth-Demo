package com.example.service;

import com.example.repository.CustomerRepository;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

//    public List<Customer> getAllCustomers() {
//        return customerRepository.findAll();
//    }
}
