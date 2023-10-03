import Main from "components/Main";
import Header from "components/Header";
import Footer from "components/Footer";
import background from "assets/background.png";
import * as S from "./style";

function Home() {
  const { title, subtitle } = {
    title: "우리의 이야기를 함께 기록해나갑니다",
    subtitle: "INSERT의 팀원들이 직접 기술한 블로그들입니다.",
  };

  return (
    <>
      <Header />
      <S.HomeLayout>
        <S.HomeLayoutBox>
          <S.Background>
            <S.BackgroundImg src={background} />
          </S.Background>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{subtitle}</S.SubTitle>
        </S.HomeLayoutBox>
      </S.HomeLayout>
      <Main />
      <Footer />
    </>
  );
}
export default Home;
