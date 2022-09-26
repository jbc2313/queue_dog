import React, { useState } from 'react'
import { dogstack } from '../util/stackClass'
import { cleanUp } from '../util/cleanStack'
import { showTimes } from '../util/timeTrack'

type Props = {
    doggoList: string[] | undefined;
}

const DogList: React.FC = () => {

    const [stackList, setStackList] = useState<string[] | undefined>()
    const [stackSize, setStackSize] = useState<number>()

    setInterval(()=> {
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


    return (
        <div>
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
