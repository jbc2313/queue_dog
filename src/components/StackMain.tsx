import { useEffect, useState, useRef } from 'react';
import { getBreeds } from '../util/fetchDog'; 
import { getRandom } from '../util/rando'; 
import DogList from './DogList';
import { dogstack } from '../util/stackClass'  



const StackMain = () => {
    const render = useRef<number>(0); 
    const dogsList = useRef<string[]>([]); 
    const [stateList, setStateList] = useState<string[]>();

    useEffect(() => {
       if(render.current === 0) {
            getBreeds()
            .then(res => {
                const list = Object.keys(res)
                dogsList.current = list
                render.current = 1
                console.log(dogsList.current)
            })
       }

    })


    setInterval(() => {
        if(dogsList === undefined){
            return
        } else {
            const length: number = dogsList.current.length - 1 
            const doggo = dogsList.current[getRandom(0, length )]
            if(doggo === undefined) {
                return 
            }
            dogstack.push(doggo)
            console.log(doggo)
            console.log('stacklist',dogstack.list())
        }

    }, 1000)


    return (
        <div>
           <h2>Dogs in the Stack</h2>
            <DogList />
        </div>
    )
}

export default StackMain;




