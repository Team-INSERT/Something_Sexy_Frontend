import React from "react";
import * as S from "./style";
import Footer from "../../components/Footer";

function Home() {
  const btnArr = ["전체", "문화", "서비스", "커리어"];
  const post = [
    {
      title: "제목1",
      subTitle: "부제목1",
    },
    {
      title: "제목2",
      subTitle: "부제목2",
    },
    {
      title: "제목2",
      subTitle: "부제목2",
    },
    {
      title: "제목2",
      subTitle: "부제목2",
    },
    {
      title: "제목2",
      subTitle: "부제목2",
    },
  ];

  return (
    <>
      <S.HomeLayout>
        <S.HomeContainer>
          <S.HeaderButton>
            {btnArr.map((btn, index) => (
              <S.Button key={index}>{btn}</S.Button>
            ))}
          </S.HeaderButton>
          <S.Main>
            {post.map((item, index) => (
              <S.Post key={index}>
                <S.PostPicture src="images/ghost.jpg" />
                <S.PostTitle>{item.title}</S.PostTitle>
                <S.PostSubtitle>{item.subTitle}</S.PostSubtitle>
              </S.Post>
            ))}
          </S.Main>
        </S.HomeContainer>
      </S.HomeLayout>
      <Footer />
    </>
  );
}

export default Home;
