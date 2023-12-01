import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import TComment from "src/types/Comment";
import TCommentParam from "src/types/CommentParam";

interface CommentListProps {
  commentList: TComment[];
  commentParam: TCommentParam;
  handleCommentClick: (param: TCommentParam) => Promise<void>;
  handleTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CommentList = ({
  commentList,
  commentParam,
  handleCommentClick,
  handleTextChange,
}: CommentListProps) => {
  return (
    <div className="px-5">
      <div className="pb-3 py-3">
        <span className="text-2xl font-bold text-gray-500">コメント</span>
      </div>
      <div className="flex flex-row border-b-2">
        <div className="px-3 ">
          <AccountCircleIcon fontSize="large" color="secondary" />
        </div>
        <div className="flex flex-col w-full">
          <TextField
            id="standard-multiline-flexible"
            multiline
            variant="standard"
            style={{ width: "100%" }}
            value={commentParam.comment}
            onChange={handleTextChange}
          />
          <button
            onClick={() => {
              handleCommentClick(commentParam);
            }}
            className="border m-2 p-2 px-3 rounded-full bg-gray-200 hover:opacity-50 self-end"
          >
            送信
          </button>
        </div>
      </div>
      <div>
        <>
          {commentList !== null && commentList !== undefined ? (
            commentList.map((item, i) => (
              <div className="p-3 flex flex-row " key={i}>
                <AccountCircleIcon fontSize="large" />
                <div
                  style={{ whiteSpace: "pre-line" }}
                  className="pl-3 items-center"
                >
                  {item.comment}
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </>
      </div>
    </div>
  );
};

export default CommentList;
