/* eslint-disable react/prop-types */
 import './Button.scss'
 
 export const Button = (props) => {
console.log("props",props);
return <button className='button'>{props.text}</button>;
 };
