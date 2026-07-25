import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins="http://localhost:5173")
public class AuthController {
    @Autowired
    private AuthService authService;
    public ResponseEntity<String> register(@RequestBody RegisterRequest request){
        String response =authService.register(request);
        return ResponseEntity.ok(response);
    }
}
