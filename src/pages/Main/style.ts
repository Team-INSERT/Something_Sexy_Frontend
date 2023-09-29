import styled from "styled-components";
import color from "../../styles/color";
import { font } from "../../styles/font";
import flex from "../../styles/flex";

export const MainLayout = styled.div`
  ${flex.CENTER};
  background-color: ${color.background};
  padding: 0 0 15% 0;
`;

export const MainContainer = styled.div`
  ${flex.CENTER};
  padding: 0 15% 0 15%;
`;

export const Main = styled.div`
  display: grid;
  padding: 5% 0 5% 0;
  gap: 5% 200px;
  place-items: center;
  grid-template-columns: repeat(2, 1fr); // 반복되는 값을 자동으로
`;
export const Post = styled.div`
  ${flex.COLUMN};
`;

export const PostPicture = styled.img`
  border-radius: 15px;
  width: 100%;
  height: 80%;
  margin-top: 5%;
`;

export const PostTitle = styled.div`
  ${font.H4};
  padding: 2% 3% 0 0;
`;

export const PostSubtitle = styled.div`
  ${font.H6};
  color: #666;
  padding: 1% 3% 2% 0;
`;

export const PostTags = styled.div`
  display: flex;
`;

export const PostTag = styled.div`
  font-size: 13px;
  ${flex.CENTER};
  color: white;
  line-height: normal;
  font-weight: 500;
  width: 15%;
  padding: 1%;
  margin-left: 1%;
  flex-shrink: 0;
  border-radius: 50px;
  background: #4e78ff;
  border: none;

  &:first-child {
    margin-left: 0%; /* 첫 번째 자식 빼고 모두 */
  }
`;
