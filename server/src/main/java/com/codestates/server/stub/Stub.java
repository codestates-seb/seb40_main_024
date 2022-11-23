package com.codestates.server.stub;

import com.codestates.server.asset.entity.Asset;
import com.codestates.server.asset.repository.AssetRepository;
import com.codestates.server.board.entity.Board;
import com.codestates.server.board.repository.BoardRepository;
import com.codestates.server.board.service.BoardService;
import com.codestates.server.comment.entity.Comment;
import com.codestates.server.comment.repository.CommentRepository;
import com.codestates.server.member.entity.Member;
import com.codestates.server.member.repository.MemberRepository;
import com.codestates.server.member.service.MemberService;
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
                               CommentRepository commentRepository,
                               AssetRepository assetRepository,
                               MemberRepository memberRepository,
                               MemberService memberService) {

        return args -> {

            // 개수
            int postNum = 30;
            int commentNum = postNum * 2;
            int assetNum = 10;
            int memberNum = 10;

            // Member data
            for (int l = 1; l <= memberNum; l++) {
                String email = "hoju" + l + "@gmail.com";
                String name = "hojumoney" + l;
                String password = "password" + l;
                Member member = new Member(email, name, password);
                log.info("MEMBER STUB " + memberRepository.save(member));
            }

            // Post data
            for (int i = 1; i <= postNum; i++) {
                int whichMember = (int) (Math.random() * memberNum) + 1;  // 랜덤 유저
                Member postMember = memberService.findVerifiedMember(whichMember);

                String temp = "테스트 게시글 " + i + " 번";
                Board board = new Board(temp, "안녕하세요, 게시글의 바디 입니다. Hi! This is the body area.", postMember);
                log.info("BOARD STUB " + boardRepository.save(board));
            }

            // Comments data
            for (int j = 1; j <= commentNum; j++) {
                int boardNum = (int) (Math.random() * postNum) + 1;  // 랜덤 보드 넘버
                String temp = "테스트 댓글 " + j + " 번";
                Board board = boardService.findVerifiedBoard(boardNum);
                log.info("COMMENT STUB " + commentRepository.save(new Comment(temp, board)));
            }

            // Asset
            String[] assetType = {"금", "다이아몬드", "주식", "현금"};
            for (int k = 1; k <= assetNum; k++) {
                int assetRand = (int) (Math.random() * assetType.length);  // 랜덤 에셋 타입
                long assetPrice = (long) (k * (Math.pow(100, assetRand)));  // 랜덤 자산 가격
                log.info("ASSET STUB " + assetRepository.save(new Asset(assetType[assetRand], assetPrice)));
            }
        };
    }
}
