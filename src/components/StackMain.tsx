import { useEffect, useState, useRef } from 'react';
import { getBreeds } from '../util/fetchDog'; 
import DogList from './DogList';
import { dogstack } from '../util/stackClass'  
import { initTimer, startTime } from '../util/timeTrack'
import Stackchart from './StackChart';

const StackMain = () => {
    const render = useRef<number>(0); 
    const [dogsList, setDogsList] = useState<string[]>() 

    useEffect(() => {
       if(render.current === 0) {
            getBreeds()
            .then(res => {
                const list = Object.keys(res)
                setDogsList(list)
                render.current = 1
                initTimer(list)
                console.log(dogsList)
            })
       }

    })




    return (
        <div>
            <Stackchart />
            <h2>Dogs in the Stack</h2>
           {dogsList === undefined ? <h1>Dogs loading..</h1> : <DogList doggoList={dogsList} />}
        </div>
    )
}

export default StackMain;




