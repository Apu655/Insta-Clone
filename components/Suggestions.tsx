import { useEffect,useState } from "react";
interface ISuggestionsProps {
}
const Suggestions: React.FunctionComponent= () => {
    const { faker } = require('@faker-js/faker');
    const [suggestions,setSuggestions] = useState([])
    useEffect(()=>{
        const suggestions:any = [...Array(5)].map((_,i)=>({
            ...faker.helpers.contextualCard(),
            id:i
        })); 
        setSuggestions(suggestions);
        
        console.log(suggestions)

    },[])
console.log(suggestions)


    return (
        
      <div className="mt-4 ml-10 ">
          
          <div className="flex justify-between text-sm mb-5">
              <h3 className="text-gray-500">
                  Suggestions for you
              </h3>
              <button className="text-gray-600 font-semibold">See All</button>
          </div>
          <div>
            {suggestions.map((value:any)=>(
                <div 
                key = {value.id}
                className='flex items-center justify-between mt-3'>
                <img src={value.avatar} className='h-10 w-10 rounded-full border object-contain cursor-pointer '/>

                <div className="flex-1 ml-4 ">
                <p className='text-sm font-bold w-16 cursor-pointer'>{value.name}</p>
                <p className="text-gray-400 text-xs">Works at {value.company.name}</p>
                </div>
            </div>
            ))}
          </div>
      </div>
  )
};

export default Suggestions;
