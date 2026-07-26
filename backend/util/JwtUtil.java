package com.tuitionconnect.backend.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class JwtUtil {
    private static final String SECRET="tuitionconnect-secret-key-must-be-very-long-for-security";
    private static final long EXPIRATION=86400000;
    private Key getSigningkey(){
        return Keys.hmacShakeyFor(SECRET.getBytes());
    }
    public String generateToken(String email,String role){
        return Jwts.builder().setSubject(email).claim("role",role)
        .setIssuedAt(new Date())
        .setExpiration(new Date(System.currentTimeMillis()+EXPIRATION))
        .signWith(getSigningKey(),SignatureAlgorithm.HS256)
        .compact();
    }
public String extractEmail(String token) {
    return getClaims(token).getSubject();
}

public String extractRole(String token) {
    return getClaims(token).get("role", String.class);
}

public boolean isTokenValid(String token) {
    try {
        getClaims(token);
        return true;
    } catch (Exception e) {
        return false;
    }
}

private Claims getClaims(String token) {
    return Jwts.parserBuilder()
            .setSigningKey(getSigningKey())
            .build()
            .parseClaimsJws(token)
            .getBody();
}

}