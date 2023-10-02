import styled from "styled-components";
import color from "styles/color";
import { font } from "styles/font";
import flex from "styles/flex";

export const HomeLayout = styled.div`
  padding: 2% 15% 1% 15%;
  ${flex.CENTER};
  background-color: ${color.light_gray};
`;

export const HomeLayoutBox = styled.div`
  ${flex.COLUMN};
`;

export const Background = styled.div`
  ${flex.CENTER};
`;

export const BackgroundImg = styled.img`
  ${flex.CENTER};
  width: 100%;
  flex-shrink: 0;
`;

export const Title = styled.div`
  ${flex.CENTER};
  color: ${color.black};
  ${font.H2}
  margin: 3% 0 0 0;
  line-height: normal;
`;

export const SubTitle = styled.div`
  ${flex.CENTER};
  color: #54575f;
  font-size: 20px;
  font-weight: 550;
  margin: 0.5% 0 0 0;
  line-height: normal;
`;

export const ArrowBox = styled.div`
  ${flex.CENTER};
`;
