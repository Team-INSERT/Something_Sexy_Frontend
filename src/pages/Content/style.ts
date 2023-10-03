import styled from "styled-components";
import { font } from "styles/font";
import color from "styles/color";

export const Layout = styled.div`
  background-color: ${color.light_gray};
  padding: 5% 25%;
`;
export const Title = styled.div`
  ${font.D3}
  margin-bottom: 1%;
`;

export const DetailLayout = styled.div`
  display: flex;
  gap: 1%;
`;

export const Detail = styled.div`
  margin-bottom: 1%;
  flex-basis: 90%;
`;

export const TagLayout = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 3%;
`;

export const Tag = styled.div`
  padding: 0.75% 1.25%;
  font-size: 0.75rem;
  text-align: center;
  color: white;
  background-color: #4e78ff;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(78, 120, 255, 0.9);
  }
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 7.5%;
`;
