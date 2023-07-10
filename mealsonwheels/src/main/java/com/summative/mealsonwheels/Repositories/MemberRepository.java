package com.summative.mealsonwheels.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.summative.mealsonwheels.Entity.Member;
import com.summative.mealsonwheels.Entity.UserApp;

public interface MemberRepository extends JpaRepository<Member, Long>  {
     Optional<Member> findMemberByUser(UserApp user);
}
