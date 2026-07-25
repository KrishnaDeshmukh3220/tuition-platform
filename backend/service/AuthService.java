import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.tuitionconnect.backend.repository.UserRepository;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public String register(RegisterRequest request){
        if(userRepository.existsByEmail(request.getEmail())){
            throw new RuntimeException("Email already registered");
        }
        User user=new User();
        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setPhone(request.getPhone());
        user.setRole(User.Role.valueOf(request.getRole().toUpperCase()));
        user.setIsActive(true);
        userRepository.save(user);
        return "User registered successfully";


    }

    
}
