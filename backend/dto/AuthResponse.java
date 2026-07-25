import lombok.Data;

@Data
public class AuthResponse {
    private String fullName;
    private String email;
    private String token;
    private String role;
   

}
