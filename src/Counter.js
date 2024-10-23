import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import './counter.css'
function Count()
{
    const [ count,setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
      }function decriment() {
        setCount(count - 1);
      }
      function reset() {
        setCount(0);
      }

    return(
 <div>
     <h1 >Counter</h1>
     <h2 className='countr'>{count}</h2>
        <button  onClick={handleClick} style={{marginRight:'20px', padding:'10px 50px'}}>
          <h3>+</h3>
        </button>
        <button  onClick={reset}><h3>Reset</h3></button>
        <button onClick={decriment}style={{margin:'20px', padding:'10px 50px'}}><h3>-</h3></button>

    
 </div>
    )

}
export default Count