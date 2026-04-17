package com.example.controller;

import com.example.service.CustomerService;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

//    @GetMapping("/")
//    public List<Customer> getAllCustomers() {
//        return customerService.getAllCustomers();
//    }
}
