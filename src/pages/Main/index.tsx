import * as S from "./style";
import postImg from "../../assets/post.svg";

function Main() {
  const post = [
    {
      id: 1,
      title: "후덜덜한 리액트 18의 새로운 기능들",
      subTitle: "궁금하쥬? 궁금하쥬?",
      tags: ["리액트", "기술", "공부"],
      img: postImg,
    },
    {
      id: 2,
      title: "인서트를 영어로하면 INSERT",
      subTitle: "아 재미지다",
      tags: ["영어"],
      img: postImg,
    },
    {
      id: 3,
      title: "여러분 독서합시다",
      subTitle: "저도 데미안 봤어요 꿀잼",
      tags: ["동기부여", "독서"],
      img: postImg,
    },
    {
      id: 4,
      title: "Today is 추석",
      subTitle: "다들 즐거운 추석 ^^ 햅삐 추석",
      tags: ["즐추즐추"],
      img: postImg,
    },
  ];

  return (
    <S.MainLayout>
      <S.MainContainer>
        <S.Main>
          {post.map((item, id) => (
            <S.Post key={id}>
              <S.PostPicture src={item.img} />
              <S.PostTitle>{item.title}</S.PostTitle>
              <S.PostSubtitle>{item.subTitle}</S.PostSubtitle>
              <S.PostTags>
                {item.tags.map((tag, tagId) => (
                  <S.PostTag key={tagId}>{tag}</S.PostTag>
                ))}
              </S.PostTags>
            </S.Post>
          ))}
        </S.Main>
      </S.MainContainer>
    </S.MainLayout>
  );
}

export default Main;
