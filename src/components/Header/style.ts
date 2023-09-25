import styled from "styled-components";
import color from "../../styles/color";
import flex from "../../styles/flex";

export const HeaderLayout = styled.div`
  margin: 2% 0 0 15%;
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
  font-size: 23px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 5%;
`;

export const HeaderLayoutRightBox = styled.div`
  display: flex;
  margin-left: 55%;
`;

export const Input = styled.input`
  border-radius: 70px;
  width: 60%;
  padding: 3.5%;
  flex-shrink: 0;
`;

export const Button = styled.button`
  margin-left: 10%;
  width: 40%;
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
