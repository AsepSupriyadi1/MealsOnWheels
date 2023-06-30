package com.summative.mealsonwheels.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.summative.mealsonwheels.Entity.Tokens;


public interface TokensRepository extends JpaRepository<Tokens, Long> {

   @Query("""
        select t from Tokens t inner join t.user u
        where u.userId = :userId and (t.expired = false or t.revoked = false)
        """)
    List<Tokens> findAllValidTokensByUser(Long userId);

    Optional<Tokens> findByToken(String token);

}
