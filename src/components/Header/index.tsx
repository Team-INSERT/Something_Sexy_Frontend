import * as S from "./style";
import logo from "../../assets/logo.png";
import login from "../../assets/login.png";

function Header() {
  return (
    <S.HeaderLayout>
      <S.HeaderLayoutLeftBox>
        <S.Logo src={logo} />
        <S.Title>INSERT</S.Title>
      </S.HeaderLayoutLeftBox>
      <S.HeaderLayoutRightBox>
        <S.Input type="search" name="search" placeholder="검색하기..." />
        <S.Button>로그인</S.Button>
      </S.HeaderLayoutRightBox>
    </S.HeaderLayout>
  );
}

export default Header;
