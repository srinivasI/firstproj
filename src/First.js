import Person from "./Person";

 function First(props) {
  const myfcompirst = 'Hello My First  Component content!';
  
  return (
    <div><Person name="Aspire"/><a>{props.value}Docs</a><a>Tutorial</a>{myfcompirst}</div>
  );
}

 export default First;
