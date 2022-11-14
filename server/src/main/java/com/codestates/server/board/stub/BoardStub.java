package com.codestates.server.board.stub;

import com.codestates.server.board.entity.Board;
import com.codestates.server.board.repository.BoardRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BoardStub {

    private static final Logger log = LoggerFactory.getLogger(BoardStub.class);

    @Bean
    CommandLineRunner BoardInit(BoardRepository repository) {

        return args -> {

            // post x 10
            for (int i = 1; i <= 10; i++) {
                String temp = "테스트 게시글 " + i + " 번";
                log.info("BOARD STUB " + repository.save(new Board(temp, "안녕하세요, 게시글의 바디 입니다. Hi! This is the body area.")));
            }

            // WIP

        };
    }
}
