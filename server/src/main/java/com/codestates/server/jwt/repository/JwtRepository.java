package com.codestates.server.jwt.repository;

import com.codestates.server.jwt.entity.Jwt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface JwtRepository extends JpaRepository<Jwt, Long> {

    @Query("select j from Jwt j left join fetch j.member where j.refreshToken = :token")
    Optional<Jwt> findRefreshToken(@Param("token") String token);

    @Query("select j from Jwt j left join fetch j.member where j.accessToken = :token")
    Optional<Jwt> findAccessToken(@Param("token") String token);

    @Query("select j from Jwt j left join fetch j.member m where t.member.memberId = :memberId")
    Optional<Jwt> findMemberId(@Param("memberId") String memberId);

    @Modifying
    @Query("delete from Jwt j where j.refreshToken = :token")
    void deleteJwtToken(@Param("token") String token);
}
