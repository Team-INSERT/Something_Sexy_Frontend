import styled from "styled-components";
import color from "../../styles/color";
import { font } from "../../styles/font";
import flex from "../../styles/flex";

export const MainLayout = styled.div`
  ${flex.CENTER};
  background-color: ${color.white};
  background-color: #f5f5f5;
  padding: 0 0 5% 5%;
`;

export const MainContainer = styled.div`
  ${flex.CENTER};
  padding: 0 15% 0 15%;
`;

export const Main = styled.div`
  display: grid;
  padding: 3% 0 0 0;
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
  width: 80%;
  height: 70%;
`;

export const PostTitle = styled.div`
  ${font.H3};
  padding: 2% 3% 0 3%;
`;

export const PostSubtitle = styled.div`
  ${font.H6};
  color: ${color.content};
  padding: 1% 3% 0 3%;
`;
