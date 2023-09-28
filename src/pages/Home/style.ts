import styled from "styled-components";
import color from "../../styles/color";
import { font } from "../../styles/font";
import flex from "../../styles/flex";

export const HomeLayout = styled.div`
  padding: 2.5% 15% 1.3% 15%;
  ${flex.CENTER};
  background-color: #fbfbfd;
`;

export const HomeLayoutBox = styled.div`
  ${flex.COLUMN};
`;

export const Background = styled.div`
  ${flex.CENTER};
  background-color: #4541ff;
  border-radius: 20px;
`;

export const BackgroundImg = styled.div`
  ${flex.CENTER};
  flex-shrink: 0;
  ${font.D1}
  line-height: normal;
  color: ${color.white};
  width: 850px;
  height: 450px;
  flex-shrink: 0;
`;

export const Title = styled.div`
  ${flex.CENTER};
  color: #12182b;
  color: ${color.black};
  ${font.H2}
  margin: 3% 0 0 0;
  line-height: normal;
`;

export const SubTitle = styled.div`
  ${flex.CENTER};
  color: ${color.black};
  color: #54575f;
  ${font.p2}
  margin: 0.5% 0 0 0;
  line-height: normal;
`;

export const ArrowBox = styled.div`
  ${flex.CENTER};
`;

export const ArrowImg = styled.img`
  width: 10%;
  height: 10%;
  margin-top: 1%;
  flex-shrink: 0;
`;
