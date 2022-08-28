import { ajaxPost } from "./BaseService";

// token test
export const getComment = async () => {
    const response = await ajaxPost('/comment',{
      "board_id" : 1,
      "content" : "1번 게시글 일반 댓글 front test"
  });
    return response;
  };
  