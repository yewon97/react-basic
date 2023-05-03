import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppProfile from './basic/AppProfile';
import AppCounter from './basic/AppCounter';
import AppProducts from './basic/AppProducts';
import AppXY from './AppXY';
import AppMentor from './AppMentor';
import AppMentors from './AppMentors';
import AppMentorsImmer from './AppMentorsImmer';
import AppForm from './AppForm';
import AppWrap from './AppWrap';
import AppCard from './AppCard';
import AppTheme from './AppTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppProfile /> */}
    {/* <AppCounter /> */}
    {/* <AppProducts /> */}
    {/* <AppXY /> */}
    {/* <AppMentor /> */}
    {/* <AppMentors /> */}
    {/* <AppMentorsImmer /> */}
    {/* <AppForm /> */}
    {/* <AppWrap /> */}
    {/* <AppCard /> */}
    <AppTheme />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
