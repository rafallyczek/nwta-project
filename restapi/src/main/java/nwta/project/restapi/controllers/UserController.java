package nwta.project.restapi.controllers;

import nwta.project.restapi.model.Book;
import nwta.project.restapi.model.User;
import nwta.project.restapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.List;

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

    @GetMapping("/login")
    public boolean login(HttpServletRequest request){
        String authToken = request.getHeader("Authorization").substring(5).trim();
        String username = new String(Base64.getDecoder().decode(authToken)).split(":")[0];
        String password = new String(Base64.getDecoder().decode(authToken)).split(":")[1];
        UserDetails user = userService.loadUserByUsername(username);
        return username.equals(user.getUsername()) && password.equals(user.getPassword());
    }

    @GetMapping("/getUser/{username}")
    public UserDetails getUser(@PathVariable String username){
        return userService.loadUserByUsername(username);
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping("/updateUser")
    public void updateUser(@RequestBody User user){
        userService.updateUser(user);
    }

}
