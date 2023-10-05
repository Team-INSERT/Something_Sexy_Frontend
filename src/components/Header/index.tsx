import logo from "assets/logo.png";
import search from "assets/search.svg";
import * as S from "./style";

function Header() {
  return (
    <S.HeaderLayout>
      <S.HeaderLayoutLeftBox to="/">
        <S.Logo src={logo} />
        <S.Title>INSERT</S.Title>
      </S.HeaderLayoutLeftBox>
      <S.HeaderLayoutRightBox>
        <S.InputBox>
          <S.Input
            type="search"
            name="search"
            placeholder="검색어를 입력해주세요..."
          />
          <S.HeaderSearchImg src={search} />
        </S.InputBox>
      </S.HeaderLayoutRightBox>
    </S.HeaderLayout>
  );
}

export default Header;
