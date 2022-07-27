import MiniProfile from './MiniProfile';
import Posts from './Posts';
import Stories from './Stories'
import Suggestions from './Suggestions';

const Feed = () => {
    return ( 
        <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-xl xl:grid-cols-3 xl:max-w-5xl mx-auto'>
            {/* Section 1 */}
            <section className='col-span-2'>
            {/* Stories */}
            <Stories></Stories>
            {/* <img src='apu.jpeg' className='object-cover w-full'></img> */}
            <Posts></Posts>
            </section>
            {/* Posts */}


            <section className='hidden xl:inline-grid md:col-span-1'>
            
            {/* Mini profile */}
            <div className='fixed '>
            
            <MiniProfile/>
            <Suggestions/>
            </div>
            

            {/* Suggestions */}
            
            </section>

        </main>
     );
}
 
export default Feed;