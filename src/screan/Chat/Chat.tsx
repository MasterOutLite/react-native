import React from "react";
import { Button, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import Comment from "../../component/Comment/Comment";

export interface User {
  id: number;
  avatar: string;
  nickname: string;
}

export enum TypeComment {
  text = "text",
  media = "media",
}

export interface CommentUser {
  type: "string" | "icon",
  value: string;
}

export interface Comment {
  id: number;
  type: TypeComment;
  user: User;
  comment: string;
  answerComment: undefined | number | null;
}

export interface Chat {
  id: number;
  comments: Comment[];
  owner: User;
}

function Chat() {
  const martin: User = {
    id: 1,
    avatar: "",
    nickname: "Martin"
  };

  const cotan: User = {
    id: 2,
    avatar: "",
    nickname: "Cotan"
  };

  const comments: Comment[] = [
    {
      id: 1,
      type: TypeComment.text,
      user: martin,
      comment: "I think that you nice",
      answerComment: undefined
    }, {
      id: 2,
      type: TypeComment.text,
      user: cotan,
      comment: "it`s very nice. I wish what you become number one.",
      answerComment: 1
    }, {
      id: 3,
      type: TypeComment.text,
      user: martin,
      comment: "Thx bro",
      answerComment: 2
    }
  ];

  return (
    <ScrollView style={{ paddingHorizontal: 12, display: "flex" }}>
      <Text>Chat view</Text>
      <View style={{ paddingVertical: 12, display: "flex", gap: 10 }}>
        {comments.map((value, index) =>
          (
            <Comment key={value.id} {...value}
                     commentAlien={value.user.id != martin.id}
                     answerComment={value.answerComment ?
                       comments.find(value1 => value1.id == value.answerComment)
                       : undefined} />
          ))}
      </View>
    </ScrollView>
  );
}

export default Chat;
