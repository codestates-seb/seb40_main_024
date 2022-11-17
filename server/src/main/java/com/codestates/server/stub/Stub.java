package com.codestates.server.stub;

import com.codestates.server.board.entity.Board;
import com.codestates.server.board.repository.BoardRepository;
import com.codestates.server.board.service.BoardService;
import com.codestates.server.comment.entity.Comment;
import com.codestates.server.comment.repository.CommentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Stub {

    private static final Logger log = LoggerFactory.getLogger(Stub.class);

    @Bean
    CommandLineRunner DataInit(BoardRepository boardRepository,
                               BoardService boardService,
                               CommentRepository commentRepository) {

        return args -> {

            // 게시물, 댓글 개수
            int postNum = 30;
            int commentNum = postNum * 2;

            // Post data
            for (int i = 1; i <= postNum; i++) {
                String temp = "테스트 게시글 " + i + " 번";
                log.info("BOARD STUB " + boardRepository.save(new Board(temp, "안녕하세요, 게시글의 바디 입니다. Hi! This is the body area.")));
            }

            // Comments data
            for (int j = 1; j <= commentNum; j++) {
                long boardNum = (long) (Math.random() * postNum) + 1;  // 랜덤 보드 넘버
                String temp = "테스트 댓글 " + j + " 번";
                Board board = boardService.findVerifiedBoard(boardNum);
                log.info("COMMENT STUB " + commentRepository.save(new Comment(temp, board)));
            }
        };
    }
}
