package com.dreamteam.hola.controller;

import com.dreamteam.hola.dto.CommentDto;
import com.dreamteam.hola.service.CommentServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
public class CommentController {
    private final CommentServiceImpl commentServiceImpl;

    // Comment 생성하기_2022_06_17_by_김우진
    @PostMapping("/comment")
    public ResponseEntity<?> save(@Valid @RequestBody CommentDto commentDto) {
        commentServiceImpl.save(commentDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // Comment 수정하기_2022_06_19_by_김우진
    @PutMapping("/comment")
    public ResponseEntity<?> update(@Valid @RequestBody CommentDto commentDto) {
        commentServiceImpl.update(commentDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
