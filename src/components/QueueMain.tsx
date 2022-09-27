import { useState, useEffect } from "react"
import { myqueue } from '../util/queueClass'
import { useSnapshot } from 'valtio'
import UpdaterQ from '../components/UpdaterQ'
import { getRandom } from '../util/rando'

const QueueMain = () => {
    const [myQ, setMyQ] = useState<string[]>()
    const [showQ, setShowQ] = useState<boolean>(false) 
    

    const q = useSnapshot(myqueue)




    return (
        <div>
            <UpdaterQ />
            <ul>
                {q.list()?.map((dog: string, index: number) => {
                    return <li key={index}>{dog}</li> 
                })}
            </ul>
        </div>
    )

}

export default QueueMain
