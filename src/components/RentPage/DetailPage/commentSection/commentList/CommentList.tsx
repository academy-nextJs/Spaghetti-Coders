'use client'

import { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import { Divider } from "@heroui/react";

import { CommentDataType } from "@/src/types/types";
import { formatDate } from "@/src/lib/helpers/formatDate";

const CommentCard = dynamic(() => import('../commentCards/CommentCard').then(mod => mod.CommentCard), { ssr: false })
const ReplyCard = dynamic(() => import('../commentCards/ReplyCard').then(mod => mod.ReplyCard), { ssr: false })

export function CommentList({ comments }: { comments: CommentDataType[] }) {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());

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
                pic={comment.user.profilePicture}
                createdAt={formatDate(comment.created_at)}
              />
              <Divider />
            </Fragment>
          )
        } else {
          return (
            <Fragment key={index}>
              <CommentCard
                Index={String(index)}
                selectedKeys={selectedKeys}
                setSelectedKeys={setSelectedKeys} 
                fullName={comment.parent_comment.user.fullName} 
                title={comment.parent_comment.title}
                caption={comment.parent_comment.caption}
                rating={comment.parent_comment.rating}
                pic={comment.parent_comment.user.profilePicture}
                createdAt={formatDate(comment.parent_comment.created_at)}
              />
              <ReplyCard
                Index={String(index)}
                selectedKeys={selectedKeys} 
                fullName={comment.user.fullName} 
                title={comment.title}
                caption={comment.caption}
                rating={comment.rating}
                pic={comment.user.profilePicture}
                createdAt={formatDate(comment.created_at)}
              />
              <Divider />
            </Fragment>
          )
        }
      })}
    </ul>
  );
}