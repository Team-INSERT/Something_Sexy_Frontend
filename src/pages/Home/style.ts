import styled from "styled-components";
import color from "../../styles/color";
import { font } from "../../styles/font";

export const HomeLayout = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.white};
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 15% 0 15%;
`;

export const HeaderButton = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  border: none;
  background-color: ${color.gray};
  color: white;
  ${font.H4};
  width: 7%;
  padding: 1% 0 1% 0;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: ${color.black};
    color: white;
    ${color.white};
  }
`;

export const Main = styled.div`
  display: grid;
  width: 100%;
  padding: 3% 0 0 0;
  background-color: aliceblue;
  gap: 5% 160px;
  grid-template-columns: repeat(2, 1fr); // 반복되는 값을 자동으로 처리
`;
export const Post = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.5%;
  background-color: aliceblue;
`;

export const PostPicture = styled.img`
  border-radius: 15px;
  width: 450px;
  height: 320px;
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
