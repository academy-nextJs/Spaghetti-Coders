'use client'

import { Fragment, useState } from "react";
import { CommentCard, ReplyCard } from "../commentCard/CommentCards";
import { Divider } from "@heroui/react";

export function CommentList({ comments }) {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());
  console.log(selectedKeys)
  return (
    <ul className="p-6 flex flex-col gap-6 bg-gray-50 rounded-4xl">
      {comments.map((comment, index) => {
        if(comment.parent_comment === null) {
          return (
            <Fragment key={index}>
              <CommentCard 
                fullName={comment.user.fullName} 
                title={comment.title}
                caption={comment.caption}
                rating={comment.rating}
              />
              <Divider />
            </Fragment>
          )
        } else {
          return (
            <Fragment key={index}>
              <CommentCard setSelectedKeys={setSelectedKeys} />
              <ReplyCard selectedKeys={selectedKeys} setSelectedKeys={setSelectedKeys} />
              <Divider />
            </Fragment>
          )
        }
      })}
    </ul>
  );
}