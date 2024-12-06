import { blog_data } from '@/Assets/assets'
import { BloomFilter } from 'next/dist/shared/lib/bloom-filter'
import React, { useState } from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {
const[menu,setmenu]=useState("All");

  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
<button  onClick={()=>setmenu('All')} className={menu==="All"?'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
<button  onClick={()=>setmenu('Technology')}className={menu==="Technology"?'bg-black text-white py-1 px-4 rounded-sm':""} >Technology</button>
<button  onClick={()=>setmenu('Startup')}className={menu==="Startup"?'bg-black text-white py-1 px-4 rounded-sm':""} >Startup</button>
<button  onClick={()=>setmenu('Lifestyle')} className={menu==="Lifestyle"?'bg-black text-white py-1 px-4 rounded-sm':""}>Lifestyle</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
{blog_data.filter((item)=> menu==="All"? true:item.category===menu).map((item,index)=>{
    return<BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category}/>
})}
      </div>
    </div>
  )
}

export default BlogList
