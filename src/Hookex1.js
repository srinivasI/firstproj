import React , { useState, useEffect }from "react";
/* export default function Hookex1() {  
      const [count, setCount] = useState(0);  
      const incrementCount = () => setCount(count + 1);  
      //useDocumentTitle(`You clicked ${count} times`);  
      // useEffect(() => {  
      //   document.title = `You clicked ${count} times`  
      // });  
    return (
        <div>
            <button onClick={incrementCount}>{count}  </button>
        </div>
    );
} */

 export default function Hookex1() {
    const [count, setCount] = useState(0);
  
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
    });
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }