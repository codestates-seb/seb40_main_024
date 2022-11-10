package com.codestates.server.board.stub;

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

//            for (int i = 1; i <= 10; i++) {
//                String temp = "Test title " + i;
//                log.info("BOARD STUB " + repository.save(new Board(temp, "Hi! This is the body area.")));
//            }

//            log.info("BOARD STUB " + repository.save(new Board("title1", "Hi! This is the body area.")));
        };
    }
}
