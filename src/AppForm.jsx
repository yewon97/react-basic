import React, { useState } from 'react';

export default function AppForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="email">이메일:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
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
