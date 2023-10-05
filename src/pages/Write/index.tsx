import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import * as S from "./style";

function Write() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [inputTag, setInputTag] = useState("");
  const [tags, setTags] = useState<Array<string>>([]);

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputTag !== "") {
      setTags([...tags, inputTag]);
      setInputTag("");
    }
  };

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
        <S.CreateTag>
          {tags.map((t) => (
            <S.Tag onClick={() => setTags(tags.filter((x) => x !== t))}>
              {t}
            </S.Tag>
          ))}
          <S.InputTag
            type="text"
            onChange={(e) => setInputTag(e.target.value)}
            value={inputTag}
            placeholder="태그를 입력하세요"
            onKeyUp={handleOnKeyPress}
          />
        </S.CreateTag>
        <MDEditor
          value={content}
          onChange={(val) => setContent(val || "")}
          height="65vh"
          data-color-mode="light"
        />
      </S.Write>
      <S.btn />
    </S.ContentLayout>
  );
}

export default Write;
