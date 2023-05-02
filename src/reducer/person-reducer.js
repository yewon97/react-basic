export default function personReducer(person, action) {
  switch (action.type) {
    case 'updated': {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }
    case 'added': {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case 'deleted': {
      const { name } = action;
      return {
        ...person,
        mentors: person.mentors.filter((m) => m.name !== name),
      };
    }
    default: {
      throw Error(`알수없는 액션 타입이다: ${action.type}`);
    }
  }
}

/* useReducer를 사용하면?
	객체를 변경하고 업데이트 하는 로직들이 외부에 있기 때문에 컴포넌트에서는 단순히 명령만 해주면 된다.
	- 업데이트 해줘~ 삭제 해줘~ 추가해줘~ OO해야할 데이터는 이것들이야~~ 이렇게 명령만(dispatch) 하면됨
	- action을 dispatch하다 (명령을 보내다!)
	컴포넌트는 어떻게 오브젝트 업데이트하고 변경하는지 신경쓰지 말고 필요한 로직들에만 집중해서 개발하고,
	객체를 변경하는 로직인 Reducer는 외부에 있기 때문에 다른 컴포넌트에서 
	person을 업데이트 하거나 객체를 어떻게 변경해야하는지 로직은 재사용이 가능
	다른 컴포넌트에서 충분히 재사용이 가능하다.

	참고 > https://react.dev/reference/react/useReducer
*/
