import styled from "styled-components";
import flex from "styles/flex";
import color from "styles/color";
import { font } from "styles/font";

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

export const InputTag = styled.input`
  padding: 1% 0 1% 1%;
  border: none;
  color: ${color.gray};
  ${font.btn2};
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

export const CreateTag = styled.div`
  display: flex;
`;

export const Tag = styled.button`
  background-color: #4e78ff;
  ${font.btn2}
  color: white;
  width: fit-content;
  padding: 6px 8px;
  border-radius: 15px;
  border: none;
  margin: 0.6% 0 0.6% 0.6%;
  &:hover {
    cursor: pointer;
  }
`;
