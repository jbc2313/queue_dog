import { dogstack } from './stackClass'

//timeIn = time in stack/queue
//timeOut = time NOT in stack/queue

interface tableItem{
    name: string;
    timeIn: number;
    timeOut: number;

}

type tableItemList = tableItem[]

let TIList: tableItemList | undefined 

export const initTimer = (dogList: string[]) => {
   TIList = dogList.map((dog) => {
      return {
        name: dog,
        timeIn: 0,
        timeOut: 0
      }
   }) 
   console.log('TIList created', TIList)


}





export const handleTime = (dogName: string) => {



}


const createTable = (dogList: string[]) => {


}
