import styled from "styled-components";
import color from "../../styles/color";
import { font } from "../../styles/font";
import flex from "../../styles/flex";

export const MainLayout = styled.div`
  ${flex.CENTER};
  background-color: #fbfbfd;
  padding: 0 0 5% 0;
`;

export const MainContainer = styled.div`
  ${flex.CENTER};
  padding: 0 15% 0 15%;
`;

export const Main = styled.div`
  display: grid;
  padding: 5% 0 5% 0;
  gap: 5% 160px;
  place-items: center;
  grid-template-columns: repeat(2, 1fr); // 반복되는 값을 자동으로
`;
export const Post = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostPicture = styled.img`
  border-radius: 15px;
  width: 95%;
  height: 80%;
`;

export const PostTitle = styled.div`
  ${font.H2};
  padding: 2% 3% 0 3%;
`;

export const PostSubtitle = styled.div`
  ${font.H5};
  color: ${color.content};
  padding: 1% 3% 2% 3%;
`;

export const PostButton = styled.button`
  font-size: 13px;
  ${flex.CENTER};
  color: #7a7d85;
  line-height: normal;
  font-weight: 600;
  width: 10%;
  height: 3%;
  padding: 1% 0 1% 0;
  margin: 0 0 0 2.5%;
  flex-shrink: 0;
  border-radius: 50px;
  background: #eee;
  border: none;
`;
