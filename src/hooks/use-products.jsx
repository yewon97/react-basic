import { useEffect, useState } from 'react';

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(); // undefined 할당되어있음
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴!');
        setProducts(data);
        setLoading(false);
      })
      .catch((e) => {
        setError('에러가 발생했음!');
      })
      .finally(() => setLoading(false));
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [salesOnly]);

  return [loading, error, products];
}

// 커스텀 hook은 내가 원하는 데이터를 반환하면된다.

// 🚨 Hooks은 (함수들은) 값의 재사용이 아니라 로직의 재사용을 위한 것이다.
