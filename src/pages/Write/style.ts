import styled from "styled-components";
import flex from "../../styles/flex";
import color from "../../styles/color";
import { font } from "../../styles/font";

export const ContentLayout = styled.div`
  ${flex.COLUMN}
  max-width: 100%;
`;

export const Write = styled.div`
  ${flex.COLUMN};
  width: 100%;
  height: 100%;
`;

export const Line = styled.div`
  width: 100%;
  border-bottom: 2px solid ${color.content};
`;

export const TagExplation = styled.div`
  padding: 1% 0 1% 1%;
  color: ${color.gray};
  ${font.btn2};
`;

export const View = styled.div`
  ${flex.COLUMN};
  width: 100%;
`;

export const InputTitle = styled.input`
  padding: 1% 0 1% 1%;
  border: none;
  ${font.H1}
`;

export const btn = styled.button`
  background-color: #4541ff;
  color: white;
  width: 5%;
  padding: 6px 8px;
  font-weight: 500;
  border-radius: 13px;
  margin: 1% 0 0 44%;
  &:after {
    content: "올리기";
  }
  &:hover {
    cursor: pointer;
  }
  border: none;
`;
