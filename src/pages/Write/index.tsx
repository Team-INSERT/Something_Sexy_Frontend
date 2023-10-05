import { useParams } from "react-router-dom";
import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import * as S from "./style";

function Write() {
  const router = useParams();

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<Array<string>>([]);

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTags([...tags, tag]);
      setTag("");
    }
  };

  const handleDelete = (t: string) => {
    setTags(tags.filter((x) => x !== t));
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
            <S.Tag onClick={() => handleDelete(t)}>{t}</S.Tag>
          ))}
          <S.InputTag
            type="text"
            onChange={(e) => setTag(e.target.value)}
            value={tag}
            placeholder="태그를 입력하세요"
            onKeyUp={handleOnKeyPress}
          />
        </S.CreateTag>
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

export default Write;
