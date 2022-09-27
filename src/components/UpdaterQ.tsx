import { useRef, useState, useEffect} from 'react'
import {myqueue} from '../util/queueClass'
import { getBreeds } from '../util/fetchDog' 
import { getRandom } from '../util/rando'
// updates the queue
const UpdaterQ = () => {
    const render = useRef<number>(0)
    const [breedList, setBreedList] = useState<string[]>()
    useEffect(() => {
        if(render.current === 0){
            getBreeds()
            .then(res => {
                const list = Object.keys(res)
                console.log(list)
                setBreedList(list)
                render.current = 1   
                
            })
        }else{
            console.log('already fetched breeds')
        }
    }, [])
    
    const simulateQueue = () => {
        if(breedList == undefined){
            console.log('no dogs')
            return
        }
        let x = 10
        do{
            console.log('in do while #', x)
            myqueue.enqueue(breedList[getRandom(0, breedList.length - 1)])
            x--
        }while(x > 0)

    }


    const startQueue = () => {
        const timeout = () => { setTimeout(() => {
            simulateQueue() 
            console.log('in timeout now')
        }, 2000) 
    }
        console.log('calling timeout')
        timeout()
    }

    const cleanQueue = () => {
        let z = 5
        do{
            myqueue.dequeue()
            z--
        }while(z > 0)

    }


    return (
        <div>
            <button onClick={startQueue} >Feed the Q</button>
            <button onClick={cleanQueue} >Drain the Q</button>
        </div>
    )

}


export default UpdaterQ;
