import React from 'react'
import book from '../../public/book.jpg'
const Bannner = () => {
    return (
        <>
            <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>

                <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>Hello,welcomes here to learn something <span className="text-pink-500">new everday!!!</span></h1>
                        <p className='text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur fuga ad, dolor at perspiciatis repellendus sint.
                            Ad facere libero sit alias odit, eos molestiae hic aliquid nisi? Officiis, ipsa?
                        </p>

                        <label className="input validator">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input type="email" placeholder="mail@site.com" required />

                        </label>

                        <div className="validator-hint hidden">Enter valid email address

                        </div>



                    </div>
                    <button className="btn btn-secondary ">Secondary</button>


                </div>

                <div className='w-full md:w-1/2 order-1'>
                    <img src={book} alt="Books Banner" className=" w-150 h-100 mt-20 ml-10  rounded-xl " ></img>
                </div>

            </div>
        </>
    )
}

export default Bannner