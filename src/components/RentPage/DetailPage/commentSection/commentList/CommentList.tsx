'use client'

import { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import { Divider } from "@heroui/react";
import { ReplyCard } from "../commentCards/ReplyCard";

import type { Selection } from '@heroui/react'

const CommentCard = dynamic(() => import('../commentCards/CommentCard').then(mod => mod.CommentCard), { ssr: false })

export function CommentList({ comments }) {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());
  console.log('Initial selectedKeys', selectedKeys)

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
              <CommentCard
                Index={String(index)}
                selectedKeys={selectedKeys}
                setSelectedKeys={setSelectedKeys} 
                fullName={comment.parent_comment.user.fullName} 
                title={comment.parent_comment.title}
                caption={comment.parent_comment.caption}
                rating={comment.parent_comment.rating}
              />
              <ReplyCard
                Index={String(index)}
                selectedKeys={selectedKeys} 
                setSelectedKeys={setSelectedKeys} 
                fullName={comment.user.fullName} 
                title={comment.title}
                caption={comment.caption}
                rating={comment.rating}
              />
              <Divider />
            </Fragment>
          )
        }
      })}
    </ul>
  );
}