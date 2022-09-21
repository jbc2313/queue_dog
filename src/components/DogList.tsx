import React, { useEffect, useState } from 'react'
import { dogstack } from '../util/stackClass'

type Props = {
    doggoList: string[] | undefined;
}

const DogList: React.FC = () => {

    const [stackList, setStackList] = useState<string[] | undefined>()


    setInterval(()=> {
        const cpy = dogstack.list();
        const cpylist: string[] = []
        const updater = cpy?.forEach(dog => {
                cpylist.push(dog)

            })
        setStackList(cpylist)

    }, 2000)

    return (
        <div>
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
