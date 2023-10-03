import styled from "styled-components";
import { font } from "styles/font";
import color from "styles/color";
import flex from "styles/flex";

export const FooterLayout = styled.div`
  ${flex.CENTER};
  width: 100%;
  padding: 0 15% 0 15%;
  height: 400px;
  color: ${color.black};
  background-color: ${color.white};
  margin-bottom: 5%;
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 60%;
`;

export const FooterInfoBox = styled.footer`
  ${flex.COLUMN};
`;

export const FooterHGroup = styled.hgroup`
  border-bottom: 1px solid ${color.black};
  padding-bottom: 2%;
  margin-bottom: 2%;
  ${flex.COLUMN};
`;

export const FooterSection = styled.section`
  ${flex.COLUMN};
  gap: 2px;
  margin-top: 2%;
`;

export const FooterSubTitle = styled.span`
  font-size: 20px;
  font-weight: 520;
  margin-bottom: 3%;
`;

export const FooterPolicyText = styled.span`
  ${font.p4};
  color: ${color.black};
  margin: 3% 0 2% 0;
`;

export const FooterInfoText = styled.span`
  font-size: 13px;
  color: ${color.black};
`;

export const FooterCopyright = styled.span`
  margin-top: 1%;
  ${font.p3};
  color: ${color.black};
`;

export const QRCode = styled.img`
  margin-left: auto;
`;
