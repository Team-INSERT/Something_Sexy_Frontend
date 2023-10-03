import styled from "styled-components";
import color from "styles/color";
import flex from "styles/flex";
import { font } from "styles/font";

export const HeaderLayout = styled.div`
  padding: 1% 15% 1% 15%;
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
  color: ${color.black};
  font: ${font.H4};
  line-height: normal;
  margin-left: 8%;
`;

export const HeaderLayoutRightBox = styled.div`
  display: flex;
  margin-left: 62%;
`;

export const Input = styled.input`
  border-radius: 4px;
  width: 230%;
  padding: 8%;
  flex-shrink: 0;
  border: 1.5px solid #ccc;
  font-size: 8px;
`;

export const HeaderSearchImg = styled.img`
  position: absolute;
  width: 2%;
  top: 3%;
  right: 15.5%;
  border-left: 3px solid #ccc;
  padding-left: 0.5%;
`;
