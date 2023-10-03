import { useParams } from "react-router-dom";
import MDviewer from "@uiw/react-markdown-preview";
import thunbnail from "assets/thumbnail.png";
import * as S from "./style";

function Content() {
  const { id } = useParams();
  const { title, author, date, tags, image } = {
    title: "GraphQL을 섞은 Next.JS",
    author: "ubinquitous",
    date: "2023.09.02",
    tags: ["동기부여", "동기부여"],
    image: thunbnail,
  };

  const content = `
  ## 계기
  나에게 도움이 되는 글은 아니지만, 내가 타입스크립트를 막 시작했을 때
  자주 했던 실수들을 겪는 사람들을 위해 정리해본 글이다.

  그렇기에 "타입스크립트"라는 대주제 하나를 다룰 뿐, 기능의 종류나 상황은
  다양하게 묘사될 수 있는 점 양해바란다.

  또한, 리액트 환경에서 타입스크립트를 사용했을 때의 기준으로 글을 서술할 것이다.
  바닐라 타입스크립트나 뷰, 앵귤러에 대해서는 더 공부하고 새로 글을 써보겠다.

  ## 제너릭 타입이란 무엇인가

  일단 타입스크립트 끝판왕이라고도 불리는 제너릭에 대해 알아보자.
  진짜 짧고 쉽게 설명해주겠다. 어려울 것 없다. 간단하게 생각해라.

  만약 문자열 두 개를 받아서 출력하는 함수와, 숫자 두 개를 받아서 출력하는 함수 둘이 있다고 해보자.

  \`\`\`ts
  const printString = (str1: string, str2: string) => {
    console.log(str1, str2);
  }

  const printNumber = (num1: number, num2: number) => {
      console.log(num1, num2); 
  }

  printString("Hello", "World");
  printNumber(10, 20); 
  \`\`\`
  진짜 간단하게 생각해라. 한 함수로 저 두 함수의 기능을 모두 처리하는 법이 뭘까?
  파라미터의 타입을 체크하고 이런 여러가지 방법이 있겠지만, 제너릭 타입을 사용하면 편하다.

  제너릭 타입은 함수의 파라미터 앞에 꺾쇠를 열고 선언해준 다음, 그 타입을 사용하면 된다.
  자 뭔소린지 모르겠지?? 코드를 보면서 알아보자.
  \`\`\`ts
  // 꺾쇠를 열면 이 놈은 제너릭 타입을 사용하는 함수입니다~~ 라고 알려주는거다.
  const printAll = <T>(prop1: T, prop2: T) => {
    console.log(prop1, prop2);
  }

  // 난 친절하니까 function 키워드 쓰는 분들에게도 알려주겠음

  function printAny<T>(prop1: T, prop2: T) {
    console.log(prop1, prop2);
  }
  \`\`\`
  이해가 가는가? 함수의 파라미터 앞에다가 <T\\>를 적어주면,
  "요놈은 제너릭 타입 쓰는 놈입니다~~~"라고 트랜스파일러한테 알려주는 것이다.
  꺾쇠 안에 들어가는 네이밍은 자유롭게 해도 된다. 이렇게 꺾쇠로 선언을 하면,
  파라미터를 포함한 그 함수 내에서는 T라는 타입을 사용할 수 있는거다.

  여기서 T는 무엇이든 될 수 있다. \`number\`도 올 수 있고, \`string\`, \`boolean\`도 올 수 있다.

  \`\`\`ts
  printAll(3, 5);
  printAll("Hello", "World");
  printAll(true, false);
  \`\`\`

  꽤나 유쾌한 기능이죠? 그런데 이렇게 되면 한 가지 의문이 들 수 있다.
  "이렇게 되면 함수의 파라미터에 어떤 변수가 들어오는지 명시할 수 없어!"

  그 문제를 위해 함수를 사용을 할 때 "요 타입으로 씁니다~~"라고 말해줄 수 있다.

  방법은 선언때와 비슷하다. 파라미터 앞에 쓰고 싶은 타입을 적어주면 된다.
  \`\`\`ts
  printAll<number>(3, 5);
  printAll<string>("Hello", "World");
  printAll<string>(true, false); // 에러가 발생한다. 
  \`\`\`

  이거 알면 제너릭 타입 끝이다. 이제 나 타입스크립트 아는 놈이다 하고 자랑하자.
  `;

  return (
    <S.Layout>
      <S.Title>{title}</S.Title>
      <S.DetailLayout>
        <S.Detail>
          {author} · {date}
        </S.Detail>
        <div>수정</div>
        <div>삭제</div>
      </S.DetailLayout>
      <S.TagLayout>
        {tags.map((tag, tagId) => (
          <S.Tag key={tagId}>{tag}</S.Tag>
        ))}
      </S.TagLayout>
      <S.Image src={image} alt="썸네일" />
      <MDviewer
        source={content}
        wrapperElement={{
          "data-color-mode": "light",
        }}
      />
    </S.Layout>
  );
}

export default Content;
