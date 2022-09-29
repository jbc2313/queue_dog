import React, { useState, useRef } from 'react'
import { dogstack } from '../util/stackClass'
import { cleanUp } from '../util/cleanStack'
import { showTimes } from '../util/timeTrack'
import { randDoggo } from '../util/rando' 
import { initTimer, startTime } from '../util/timeTrack'

type Props = {
    doggoList: string[] | undefined;
}

const DogList: React.FC<Props> = ({ doggoList }) => {

    const [stackList, setStackList] = useState<string[] | undefined>()
    const [stackSize, setStackSize] = useState<number>()
    const dogsList = useRef<string[]>()
    dogsList.current = doggoList

    const clearList = () => {
        setTimeout(()=> {
            const cpy = dogstack.list();
            const cpylist: string[] = []
            const updater = cpy?.forEach(dog => {
                cpylist.push(dog)

            })
            setStackList(cpylist)
            setStackSize(dogstack.size())
            if(dogstack.size() > 12) {
                performance.measure('Begin')
                for(let i = dogstack.size();i > 0;i--){  
                    cleanUp()
                }
           // showTimes()
            }


        }, 500)
    }


    
    const sim = () => {
        if(dogsList === undefined){
            return
        } else {
            //const length: number = dogsList.current.length - 1 
            //const doggo = dogsList.current[getRandom(0, length )]
            if(dogsList.current == undefined) return
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
    }





    return (
        <div>
            <button>Start Sim</button>
            <h3>{dogstack.size()}</h3>
            <ul>
                {stackList != undefined ? 
                    <>
                      {stackList?.map(dog => <li>{dog}</li>)} 
                    </>
                    :
                    <>
                        <p>Stack EMPTY</p>
                    </>

                }
            </ul>
        </div>

    )

}


export default DogList;
