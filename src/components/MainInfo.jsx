import React from 'react'

function MainInfo() {
  return (
    <div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className='w-1/2 inline-flex justify-end items-center rounded-2xl border-0 h-full pr-10'>
            <img src="/myPic.jpg" alt="" width={220} className='rounded-full border-0 select-none' />
        </div>
        <div className='w-1/2 inline-flex absolute justify-start text-center font-sans text-lg'>
            <div className='block'>
            <pre >Hello, I'm <br />
            <span className=' text-4xl font-bold font-serif'>Kishan Jain </span><br />
            Full stack Developer, Backend Developer<br/>
            <button type='button' className='border-2 border-black rounded-3xl px-3 m-3' ><a href="/myResume.pdf" target='_blank'>See Resume</a></button>
            <span className='flex justify-center items-center'>
                <a href="https://github.com/Kishan-Jain" target='_blank'><img src="/github.jpg" alt="" width={32} /></a>
                <a href="https://www.linkedin.com/in/kishan-jain-88ba672ba/" target='_blank'><img src="/linkedin.png" alt="" width={40} /></a>

            </span>
            </pre>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainInfo
