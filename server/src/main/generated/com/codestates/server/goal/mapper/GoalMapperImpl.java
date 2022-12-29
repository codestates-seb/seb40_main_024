package com.codestates.server.goal.mapper;

import com.codestates.server.goal.dto.GoalDto;
import com.codestates.server.goal.entity.Goal;
import com.codestates.server.member.dto.MemberDto;
import com.codestates.server.member.entity.Member;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-12-29T11:32:30+0900",
    comments = "version: 1.5.2.Final, compiler: Eclipse JDT (Batch) , environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class GoalMapperImpl implements GoalMapper {

    @Override
    public Goal goalPostToGoal(GoalDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        String goalName = null;
        long goalPrice = 0L;
        int targetLength = 0;
        Member member = null;

        Goal goal = new Goal( goalName, goalPrice, targetLength, member );

        return goal;
    }

    @Override
    public List<GoalDto.Response> goalsToGoalResponses(List<Goal> goals) {
        if ( goals == null ) {
            return null;
        }

        List<GoalDto.Response> list = new ArrayList<GoalDto.Response>( goals.size() );
        for ( Goal goal : goals ) {
            list.add( goalToGoalResponseDto( goal ) );
        }

        return list;
    }

    @Override
    public MemberDto.ResponseObject memberToMemberResponseObject(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberDto.ResponseObject responseObject = new MemberDto.ResponseObject();

        return responseObject;
    }
}
