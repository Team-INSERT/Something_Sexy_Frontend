/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import { useParams } from "react-router-dom";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import * as S from "./style";

function Content() {
  const router = useParams();

  // Markdown 내용을 저장하는 content와 제목을 저장하는 title를 선언
  const [content, setContent]: [string, Dispatch<SetStateAction<string>>] =
    useState(""); // 타입 명시적으로 지정
  const [title, setTitle] = useState("");

  // 제목을 변경하는 이벤트 핸들러
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  // Markdown 내용을 변경하는 이벤트 핸들러
  const ChangeContent = (value: string | undefined) => {
    // value가 문자열타입일 경우에만 content 상태를 업데이트
    if (typeof value === "string") {
      setContent(value);
    }
  };
  return (
    <S.ContentLayout>
      <S.Write>
        <S.InputTitle
          type="text"
          onChange={changeTitle}
          value={title}
          placeholder="제목을 입력하세요"
        />
        <S.Line />
        <S.TagExplation>#태그를 입력하세요</S.TagExplation>
        <MDEditor value={content} onChange={ChangeContent} height={500} />
      </S.Write>
      <S.btn />
    </S.ContentLayout>
  );
}

export default Content;
