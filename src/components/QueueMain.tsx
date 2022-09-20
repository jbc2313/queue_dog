import { useEffect, useState } from 'react';
import { getBreeds } from '../util/fetchDog'; 



const Queue = () => {

    const [doglist, setDoglist] = useState({});
    const [renders, setRenders] = useState<number>(0);

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

    const fixList = () => {
        
        console.log(doglist);

    }
    










    return (
        <div>
            <button onClick={fixList}>GET LIST</button>

        </div>
    )


}

export default Queue;
