
interface Props{
    username: string

    img: string
  
  }
const Story = ({img,username}:Props)=>{
    
    return(
        <div className='hover:scale-110 transition transform ease-out w-20'>
            <img src={img} className='h-16 w-16 rounded-full border p-[2px] object-contain cursor-pointer border-red-500'/>
            <p className='text-center text-xs w-16 truncate event-none'>{username}</p>
        </div>
    )
}

export default Story