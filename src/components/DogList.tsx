import React, { useState } from 'react'
import { dogstack } from '../util/stackClass'
import { cleanUp } from '../util/cleanStack'
import { showTimes } from '../util/timeTrack'
import { randDoggo } from '../util/rando' 
import { startTime } from '../util/timeTrack'

type Props = {
    doggoList: string[] | undefined,
    setStack: any,
    setStackSize: any,
}

const DogList: React.FC<Props> = ({ doggoList, setStack, setStackSize }: Props) => {

    const [stackList, setStackList] = useState<string[] | undefined>()

    const clearList = () => {
        setTimeout(()=> {
            if(dogstack.size() > 4) {
                // dont need this
                //performance.measure('Begin')
                for(let i = dogstack.size();i > 0;i--){  
                    cleanUp()
                }

                updateList()
                // continue the stack filling
                sim()
           // showTimes()
            }


        }, 500)

    }
    
    const updateList = () => {
        setStackList(dogstack.list())
        setStack(dogstack.list())
        setStackSize(dogstack.size())
    }


    const sim = () => {
        if(doggoList === undefined){
            return
        } else {
            //const length: number = dogsList.current.length - 1 
            //const doggo = dogsList.current[getRandom(0, length )]
            if(doggoList == undefined) return
                console.log('this is doggolist', doggoList)
            let doggo = randDoggo(doggoList)
                console.log('this is doggo', doggo)
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
                    doggo = randDoggo(doggoList)
                }while(doggo === islisted)
                console.log('the islisted doggo is ===', islisted)
                console.log('the newdoggo is ====', doggo)
            }
            if(doggo === undefined) {
                console.log('lost the doggo?? how?')
                return 
            }
            dogstack.push(doggo)
            console.log(doggo)
            console.log('stacklist',dogstack.list())
            startTime(doggo)
            if(dogstack.size() !== 5){
                updateList()
                console.log('about to hit looper')
                looper()
            }else{
                clearList()
            }

        }
    }

    const looper = () => setTimeout(sim, 4000)




    return (
        <div>
            <button onClick={sim} >Start Sim</button>
        </div>

    )

}


export default DogList;
