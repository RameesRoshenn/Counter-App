
import './App.css';

import Counter from './components/Counter';

function App() {
  return (
    <div style={{height:'100vh'}} className=" d-flex  justify-content-center  align-items-center  bg-black w-100 " >
      <div style={{width:'500px'}} className='bg-light rounded p-5'>
        <h2 style={{color:'blue' ,fontSize:'35px'}} className='ps-3 pt-0 mt-0 m-4 mb-0 pb-3 fw-bold'>Counter Application</h2>

<Counter/>
        

        </div>
    </div>
  );
}

export default App;
