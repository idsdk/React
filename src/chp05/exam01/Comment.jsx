import React from "react";
import UserInfo from "./UserInfo";
import './Comment.css'

const users = [
    {
        name: "장원영",
        comment: "초긍정 마인드, 럭키비키",
        avatarUrl: "https://img.hankyung.com/photo/202508/01.41543140.1.jpg"
    },
    {
        name: "안유진",
        comment: "모두가 좋아한다.",
        avatarUrl: "https://cdn.thepublic.kr/news/photo/202504/258774_257978_3646.png"
    },
    {
        name: "가을",
        comment: "아이브의 신곡이 나왔어요.",
        avatarUrl: "https://image.xportsnews.com/contents/images/upload/article/2023/0526/mb_1685053978709555.jpg"
    }
];

function Comment() {
    const currentDate = new Date();
    return(
        <div>
            {
                users.map((user) => {
                    return(
                     <div className="comment">
                        <UserInfo user={user}/>
                        <div className="comment-text">
                            {user.comment}
                        </div>
                        <div className="comment-date">
                            {currentDate.toDateString()}
                        </div>
                     </div>
                    );
                })
            }
        </div>
    );
}

export default Comment;