package nwta.project.restapi.controllers;

import nwta.project.restapi.model.User;
import nwta.project.restapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @GetMapping("/deleteUser/{id}")
    public void deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
    }

    @PostMapping("/login")
    public boolean login(@RequestBody User requestUser){
        UserDetails user = userService.loadUserByUsername(requestUser.getUsername());
        return requestUser.getUsername().equals(user.getUsername()) && requestUser.getPassword().equals(user.getPassword());
    }

}
