import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentors(props) {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: 'updated', prev, current });
  };

  const handleAdd = () => {
    const name = prompt(`멘토의 이름을 알려주세요!`);
    const title = prompt(`멘토의 타이틀을 알려주세요!`);
    dispatch({ type: 'added', name, title });
  };

  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({ type: 'deleted', name });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는 :</p>
      <ul>
        {person.mentors.map((mentor, index) => {
          const text = `${mentor.name} (${mentor.title})`;
          return <li key={index} children={text} />;
        })}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름 바꾸기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
    </div>
  );
}

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};

/* 리액트 상태관리하는 방법
	useState : 상태 접근할 수 있는 변수, 그걸 업데이트 할 수 있는 것을 받아옴
	setState로 상태를 업데이트 함
	↳ 상태는 읽기 전용, 변경하려면 새로운 오브젝트, 배열을 만들어서 set해줌

	객체가 중첩되어있어 복잡한 형태라면 
	useReducer를 이용해서 
	객체 어떻게 업데이트할껀지, 어떤 액션이 있는지 별도의 함수로 정의해둠

	함수로 정의해두면, 컴포넌트에서 로직이 분리가 되기때문에 유지관리하기가 좋고, 재사용성이 높다, 테스트하기 편하다.

	reducer를 사용한다고 해도
	중첩된 객체가 많으면 많을 수록, spread operator사용하고 등 반복해서 써야함

	-> Immer 라이브러리 나옴
	참고1 > https://github.com/immerjs/immer
	참고2 > https://github.com/immerjs/use-immer
	참고3 > https://immerjs.github.io/immer/
*/
