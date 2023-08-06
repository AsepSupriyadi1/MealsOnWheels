package com.summative.mealsonwheels.Repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.summative.mealsonwheels.Entity.Member;
import org.springframework.data.jpa.repository.Query;

public interface MemberRepository extends JpaRepository<Member, Long>  {

    @Query("SELECT COUNT(d) FROM Member d INNER JOIN d.userDetails ud WHERE ud.user.isActive = true")
    Long countActiveMember();


}
