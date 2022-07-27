import Image from 'next/image'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from '@heroicons/react/outline'
import {HomeIcon} from '@heroicons/react/solid';
import {useSession} from "next-auth/react";

const Header = () => {
    
    const {data:session} = useSession();
    console.log(session)
    //console.log("This is a god damn object : ",obj)
    return (

        <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
        <div className='flex justify-between max-w-5xl mx-4 lg:mx-auto'>
            {/*  left: Instagram logo */}
            <div className='relative h-16 w-32 hidden lg:block'>
            <Image 
            src='https://links.papareact.com/ocw' 
            layout='fill'
            objectFit='contain'
            />
            </div>
            <div className='relative mt-3 h-10 w-10 flex-shrink-0 lg:hidden hover:cursor-pointer'>
            <Image 
            src='https://links.papareact.com/jjm' 
            layout='fill'
            objectFit='contain'
            />
            </div>
            {/* Middle: Search bar */}
            
            <div className='max-w-xs'>
                <div className='relative mt-1 rounded-md p-3'> 
                <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none '>
                    <SearchIcon className='h-5 w-5 text-gray-500'></SearchIcon>
                </div>
                <input type='text' placeholder='Search' className='bg-gray-100 block w-full pl-10 border-gray-100 focus:ring-black focus:border-black rounded-md'></input>
                </div>
            </div>


            {/* Right */}
            <div className='flex items-center space-x-4'>
            <HomeIcon className='navBtn'></HomeIcon>
            <MenuIcon className='h-6 md:hidden'></MenuIcon>
            <div className='relative'>
                <div className='navBtn absolute bg-red-500 rounded-full h-5 w-5 -top-1 -right-1 flex items-center justify-center z-10 animate-pulse'>3</div>
            <PaperAirplaneIcon className='navBtn rotate-45'></PaperAirplaneIcon>
            </div>
            <PlusCircleIcon className='navBtn'></PlusCircleIcon>
            <UserGroupIcon className='navBtn'></UserGroupIcon>
            <HeartIcon className='navBtn'></HeartIcon>
            <img src='apu.jpeg' className='rounded-full cursor-pointer h-10'/>
            </div>

        </div>
        </div>
      );
}
 
export default Header;