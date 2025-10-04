import React from 'react'
import list from '../../public/list.json'
import Card from './Cards'
import { Link } from 'react-router-dom'

const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4'>
      <div className='mt-28 item-center justify-center text-center'>
        <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here! :)</span></h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio 
          veritatis sed laborum tempora suscipit quaerat nostrum laboriosam 
          accusantium quidem. Tenetur officia vitae fugit error sequi dolores maiores quas sit 
          corrupti maxime exercitationem cupiditate ut 
          cum eaque adipisci veniam, eos dolor omnis culpa optio excepturi tempora 
          delectus ratione! Placeat, a rem.</p>
        <Link to={'/'}>
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 '>
        {
          list.map((item)=>(
            <Card key={item.id} item={item}/>
          ))
        }
      </div>

    </div>
    </>
  );
}

export default Course