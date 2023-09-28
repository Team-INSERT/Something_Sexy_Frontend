import * as S from "./style";
import arrow from "../../assets/arrow.png";

function Home() {
  const { title, subtitle } = {
    title: "학교와 함께 역사를 써 내려가는",
    subtitle: "부산소프트웨어마이스터고등학교 플랫폼 개발 동아리 INSERT",
  };

  return (
    <S.HomeLayout>
      <S.HomeLayoutBox>
        <S.Background>
          <S.BackgroundImg>INSERT</S.BackgroundImg>
        </S.Background>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
        <S.ArrowBox>
          <S.ArrowImg src={arrow} />
        </S.ArrowBox>
      </S.HomeLayoutBox>
    </S.HomeLayout>
  );
}
export default Home;
