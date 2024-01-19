import React from 'react'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='relative bg-whitesmoke w-full overflow-hidden flex flex-col items-center justify-start pt-[27px] px-5 pb-[307px] box-border gap-[64px] tracking-[normal] mq450:gap-[16px] mq675:gap-[32px]'>
       <Home/>
    </div>
  )
}

export default App