import {useState} from 'react'
import {myqueue} from '../util/queueClass'


const Updater = (props: any) => {
    const [x, setX] = useState(0)
    const testDogs = ['pug', 'collie', 'yorkie', 'mastif']
    const Add2Queue = () => {
        if(x === 4){
            console.log('test finished')
            return
        }
        console.log(x, 'is X')
        myqueue.enqueue(testDogs[x]) 
        setX(x + 1)
        props.show(true)
    }

    return (
        <button onClick={Add2Queue} >Add2Queue</button>
    )

}


export default Updater;
