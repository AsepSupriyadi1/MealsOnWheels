package com.summative.mealsonwheels.Repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.summative.mealsonwheels.Entity.Member;
import com.summative.mealsonwheels.Entity.UserApp;

public interface MemberRepository extends JpaRepository<Member, Long>  {
     Optional<Member> findMemberByUser(UserApp user);


    @Query("SELECT p FROM Member p JOIN p.user u WHERE u.isActive = true")
    List<Member> getAllActiveMember();
}
