import { useState,useEffect,useRef } from "react";

const Clock = function (){
  const [date, setDate] = useState(new Date());
  const timerId = useRef();

//sin parametro -> siempre se ejecuta
//[] -> rendereiza solo la primera vez
//[a,b,c]-> Vigila y reaacciona a los cambios 
//return -> se ejecuta en el dismount

  useEffect(() => {
    console.log('componentDidMount');
    timerId.current = setInterval(()=> this.tick(), 1000);
    return() => {
        console.log('componentWillUnmount');
        clearInterval(timerId.current);
    };
  }, []);

  useEffect(() => console.log('componentDidUpdate'));


  const tick = () =>{
    console.log('tick');
    setDate(new Date());
    };

  return(
    <div>
        <h2>Hello, World!</h2>
        <h2>It's {date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
