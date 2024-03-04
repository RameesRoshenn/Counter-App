import React, { useState } from 'react'
import { Stack, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../redux/counterSlice';

function Counter() {
  
  //state to hold  value from input box
  const [range ,setRange]=useState()
  

  //hook to dispatch a function in action
  const dispatch = useDispatch()
  //coponent can access the state by using  useSelector Hook
  const count = useSelector((state) => state.counter.value)


  //range
  console.log(range);

  return (


    <>
      <div style={{ height: '100px', color: 'black' }} className='flex-column   w-100'>
        <h1 className='d-flex justify-content-center align-items-center pt-4 ' style={{ fontSize: '50px' }} >{count}</h1>

      </div>

      <div className='mt-5'>
        <Stack direction="row" spacing={2}>
          <Button onClick={() => dispatch(increment(Number(range)))} type='submit' className='bg-success' style={{ width: '200px', height: '50px' }} variant="contained">Increment</Button>
          <Button onClick={() => dispatch(decrement(Number(range)))} type='submit' className='bg-warning' style={{ width: '200px', height: '50px' }} variant="contained">Decrement</Button>
          <Button onClick={() => dispatch(reset(Number(range)))} type='submit' className=' bg-danger ' style={{ width: '180px', height: '50px' }} variant="contained">Reset</Button>

        </Stack>
      </div>


      {/* input box */}
      <div>
        <input onChange={(e)=>setRange(e.target.value)} type="text" className=' form-control w-100  mt-3  ' placeholder='enter the range' style={{ borderColor: 'blue' }} />

      </div>


    </>
  )
}

export default Counter