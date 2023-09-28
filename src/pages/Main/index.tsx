import * as S from "./style";
import postImg from "../../assets/post.png";

function Main() {
  const post = [
    {
      id: 1,
      title: "제목1",
      subTitle: "부제목1",
      button: "신인",
    },
    {
      id: 2,
      title: "제목2",
      subTitle: "부제목2",
      button: "신인",
    },
    {
      id: 3,
      title: "제목2",
      subTitle: "부제목2",
      button: "신인",
    },
    {
      id: 4,
      title: "제목2",
      subTitle: "부제목2",
      button: "신인",
    },
  ];

  return (
    <S.MainLayout>
      <S.MainContainer>
        <S.Main>
          {post.map((item, id) => (
            <S.Post key={id}>
              <S.PostPicture src={postImg} />
              <S.PostTitle>{item.title}</S.PostTitle>
              <S.PostSubtitle>{item.subTitle}</S.PostSubtitle>
              <S.PostButton>{item.button}</S.PostButton>
            </S.Post>
          ))}
        </S.Main>
      </S.MainContainer>
    </S.MainLayout>
  );
}

export default Main;
