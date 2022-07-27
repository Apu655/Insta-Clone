import Post from './Post'

const Posts =()=>{

    const posts = [
        {
            name:'Apu Islam',
            id:'1',
            img:'apu.jpeg',

        }
    ]

    return(
        <div>
            {posts.map((post)=>(
                <Post key={post.id} name={post.name} img={post.img}/>
            ))}
        </div>
    )
}

export default Posts;