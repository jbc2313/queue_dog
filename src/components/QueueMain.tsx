import { useEffect, useState } from 'react';
import { getBreeds } from '../util/fetchDog'; 
import { getRandom } from '../util/rando'; 


const Queue = () => {

    const [doglist, setDoglist] = useState<string[]>();
    const [renders, setRenders] = useState<number>(0);
    const [dogQueue, setDogQueue] = useState<string[]>();


    useEffect(() => {
       if(renders > 1){
            return
       } else {
        getBreeds()
        .then(res => {
            const list = Object.keys(res)
            setDoglist(list)
        })
       }

    }, [])

    setInterval(()=> {
       const getDog = doglist[getRandom()] 
       setDogQueue() 

        }, 3500) 










    return (
        <div>
            <button>GET LIST</button>
            <p></p>

        </div>
    )


}

export default Queue;
