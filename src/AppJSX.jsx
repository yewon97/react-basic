import logo from './logo.svg';
import './App.css';

function AppJSX() {
	const name = "yewon"
	const list = ['우유', '딸기', '바나나'];

  return (
    <>
			<h1 className='orange'>{`Hello ${name}`}</h1>
			<h2>Hello2</h2>
			<p>{name}</p>
			<ul>
				{list.map(item => <li>{item}</li>)}
			</ul>
			<img 
				style={{ width: '200px', height: '200px' }}
				src="https://images.unsplash.com/photo-1647891937869-bc31fe3f9836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3774&q=80" 
				alt="picture" 
			/>
    </>
  );
}

export default AppJSX;