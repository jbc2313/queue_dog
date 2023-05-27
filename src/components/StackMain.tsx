import { useEffect, useState, useRef } from 'react';
import { getBreeds } from '../util/fetchDog'; 
import DogList from './DogList';
import { initTimer, startTime } from '../util/timeTrack'
import Stackchart from './StackChart';

const StackMain = () => {
    const render = useRef<number>(0); 
    const [dogsList, setDogsList] = useState<string[]>()
    const [stack, setStack] = useState<string[]>()
    const [stackSize, setStackSize] = useState<number>()

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
           {dogsList === undefined ? <h1>Dogs loading..</h1> : <DogList doggoList={dogsList} setStack={setStack} setStackSize={setStackSize} setStackClears={setStackClears} />}

            {/*  // moved from DogList compnonent */}
            <h3>Dogs in Stack: {stackSize}</h3>
            <ul>
                {stack != undefined ?
                    <>
                      {stack?.map(dog => <li>{dog}</li>)}
                    </>
                    :
                    <>
                        <p>Stack EMPTY</p>
                    </>

                }
            </ul>
            {/* END of moved */}
        </div>
    )
}

export default StackMain;




