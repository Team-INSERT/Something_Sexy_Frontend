import { useParams } from "react-router-dom";
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import * as S from "./style";

function Content() {
  const router = useParams();

  // Markdown 내용을 저장하는 content와 제목을 저장하는 title를 선언
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  return (
    <S.ContentLayout>
      <S.Write>
        <S.InputTitle
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="제목을 입력하세요"
        />
        <S.Line />
        <S.TagExplation>#태그를 입력하세요</S.TagExplation>
        <MDEditor
          value={content}
          onChange={(val) => setContent(val || "")}
          height="150vh"
          data-color-mode="light"
        />
      </S.Write>
      <S.btn />
    </S.ContentLayout>
  );
}

export default Content;
