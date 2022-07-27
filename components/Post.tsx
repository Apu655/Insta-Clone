import {

    ChatIcon,
    PaperAirplaneIcon,
    BookmarkIcon,
    EmojiHappyIcon
} from '@heroicons/react/outline'
import {
    HeartIcon,
} from '@heroicons/react/solid'
interface Props{
    name: string

    img: string
  
  }
const Post = ({name,img}:Props)=>{

    return(
        <div className='border-2 border-gray-200 rounded-sm bg-white'>
            <div>
                <div className='flex p-4 justify-between'>
                    <div className="flex space-x-2">
                        <img src={img} className='h-10 w-10 rounded-full'/>
                        <p className="flex items-center font-bold">{name}</p>
                    </div>
                    <div><p>....</p></div>
                </div>
                <div>
                    <img src={img}/>
                </div>
            </div>
            <div className='flex justify-between py-2 px-5'>
                <div className='flex space-x-2'>
                    <HeartIcon className='h-10 text-red-500 cursor-pointer hover:scale-110 transition-all transoform ease-out'/> 
                    <ChatIcon className='h-10 cursor-pointer hover:scale-110 transition-all transoform ease-out'/>
                    <PaperAirplaneIcon className='h-10 cursor-pointer hover:scale-110 transition-all transoform ease-out'/>
                </div>
                <div>
                    <BookmarkIcon className='h-10'/>
                </div>
            </div>

            {/* Caption */}
            <p className='px-5 py-2'>
                <span className='font-bold truncate'>{name}</span> Caption   
            </p>

            <form className='flex py-2'>
                <EmojiHappyIcon className='h-10 px-5'></EmojiHappyIcon>
                <input className='border-none focus:ring-0 outline-none w-full'type='text' placeholder='Add a comment....'/>
                <p className='px-2 flex items-center font-semibold'>Post</p>
            </form>
        </div>
    )

}

export default Post