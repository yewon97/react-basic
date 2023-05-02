import React, { useState } from 'react';

export default function AppForm() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input type="text" name="name" id="name" value={form.name} onChange={handleChange} />
      <label htmlFor="email">이메일:</label>
      <input type="email" name="email" id="email" value={form.email} onChange={handleChange} />
      <button>submit</button>
    </form>
  );
}

/* Uncontrolled Component (비제어 컴포넌트)
	e.g. input 같은 것들
	cf. https://react.dev/reference/react-dom/components/input
	
	입력 폼은 데이터 보여지는 것이, 또는 이미 보여지고 있는 것이
	리액트 컴포넌트에서 가지고 있는 상태와 똑같이 매칭이 되도록 타이밍이 딱 맞도록 해주는것이 젤 중요!
*/

/* 정리
	form에 있는 input데이터는 사용자가 바로 수정하고, 눈으로 확인가능 -> Uncontrolled Component
	👉 리액트에서 추구하는 것과 어긋남
	👉 리액트에서 UI 업데이트는 항상 리액트의 상태로부터 발생되어야 하기 때문에다.

	form을 사용할 때는 항상 상태를 이용해서 
	value -> 상태의 값을 출력하고
	onChange가 발생할 때 마다 상태를 업데이트 해줘야한다.

	상태는 개별적으로 관리해도 되지만, 
	연관된 데이터라면 객체로 관리해 나가면 된다. (useReducer, Immer 사용하면됨)
*/
