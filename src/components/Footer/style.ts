import styled from "styled-components";
import { font } from "../../styles/font";
import color from "../../styles/color";
import flex from "../../styles/flex";

export const FooterLayout = styled.div`
  ${flex.CENTER};
  width: 100%;
  height: 400px;
  color: ${color.content};
  background-color: ${color.tertiary};
`;

export const FooterContainer = styled.div`
  width: 76%;
  height: 60%;
`;

export const FooterInfoBox = styled.footer`
  ${flex.COLUMN};
`;

export const FooterTitle = styled.span`
  ${font.H2};
`;

export const FooterHGroup = styled.hgroup`
  border-bottom: 1px solid ${color.content};
  padding-bottom: 2%;
  margin-bottom: 2%;
  ${flex.COLUMN};
`;

export const FooterSection = styled.section`
  ${flex.COLUMN};
  gap: 2px;
`;

export const FooterSubTitle = styled.span`
  ${font.H5};
  margin-bottom: 3%;
`;

export const FooterPolicyText = styled.span`
  ${font.p4};
  color: ${color.content};
`;

export const FooterCopyright = styled.span`
  margin-top: 4%;
  ${font.p4};
  color: ${color.content};
`;

export const QRCode = styled.img`
  margin-left: auto;
`;
