import styled from "styled-components";
import color from "../../styles/color";
import flex from "../../styles/flex";
import { font } from "../../styles/font";

export const HeaderLayout = styled.div`
  margin: 1% 0 0 15%;
  padding-bottom: 1%;
  display: flex;
`;

export const HeaderLayoutLeftBox = styled.div`
  ${flex.CENTER};
`;

export const Logo = styled.img`
  display: flex;
  width: 23%;
`;

export const Title = styled.div`
  color: #12182b;
  font-family: Pretendard;
  color: ${color.black};
  font: ${font.H4}
  line-height: normal;
  margin-left: 8%;
`;

export const HeaderLayoutRightBox = styled.div`
  display: flex;
  margin-left: 60%;
`;

export const Input = styled.input`
  border-radius: 70px;
  width: 50%;
  padding: 4%;
  flex-shrink: 0;
`;

export const Button = styled.button`
  margin-left: 10%;
  width: 35%;
  background: #4541ff;
  height: 110%;
  border: none;
  flex-shrink: 0;
  border-radius: 12.5px;
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
