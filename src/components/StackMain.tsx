import { useEffect, useState, useRef } from 'react';
import { getBreeds } from '../util/fetchDog'; 
import { randDoggo } from '../util/rando'; 
import DogList from './DogList';
import { dogstack } from '../util/stackClass'  
import { initTimer, startTime } from '../util/timeTrack'
import Stackchart from './StackChart';

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
                initTimer(list)
                console.log(dogsList.current)
            })
       }

    })


    setInterval(() => {
        if(dogsList === undefined){
            return
        } else {
            //const length: number = dogsList.current.length - 1 
            //const doggo = dogsList.current[getRandom(0, length )]
            
            let doggo = randDoggo(dogsList.current)
            const currDogs = dogstack.list()
            if(currDogs == undefined) return
            const islisted = currDogs.find(dog => dog === doggo)
            if(islisted === undefined){
                // good to continue
                console.log('we found a rando doggo first try!')
            } else {
                // doggo is already in stack, need to find another.
                console.log('doggo is already in stack, lets find another')
                do{
                    doggo = randDoggo(dogsList.current)
                }while(doggo === islisted)
                console.log('the islisted doggo is ===', islisted)
                console.log('the newdoggo is ====', doggo)
            }
            if(doggo === undefined) {
                return 
            }
            dogstack.push(doggo)
            console.log(doggo)
            console.log('stacklist',dogstack.list())
            startTime(doggo)

        }

    }, 1000)



    return (
        <div>
            <Stackchart />
            <h2>Dogs in the Stack</h2>
            <DogList />
        </div>
    )
}

export default StackMain;




