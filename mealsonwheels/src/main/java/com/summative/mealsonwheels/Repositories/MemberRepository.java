package com.summative.mealsonwheels.Repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.summative.mealsonwheels.Entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long>  {
    
}
