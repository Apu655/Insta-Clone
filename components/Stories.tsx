//import * as faker from "faker";
import React, { useEffect,useState } from "react";
import Story from './Story'




const Stories:React.FC = () => {
    const [suggestions,setSuggestions] = useState([])
    const { faker } = require('@faker-js/faker');
    useEffect(()=>{
        const suggestions:any = [...Array(20)].map((_,i)=>({
            ...faker.helpers.contextualCard(),
            id:i,
        }));
        setSuggestions(suggestions)
    },[])
    return ( 
        <div className='my-6'>
            
                <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-md overflow-x-scroll'>
                { suggestions.map((profile:any)=>(
                    <Story 
                    key={profile.id}
                    img={profile.avatar}
                    username={profile.name}
                    />
                ))
                    }
                </div>
                
    
        </div>
     );
}
 
export default Stories;