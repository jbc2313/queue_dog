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





export const startTime = (dogName: string) => {
    if(TIList == undefined){
        return
    }
    TIList.forEach(dog => {
        if(dog.name === dogName){
            dog.timeIn = performance.now()

        }
    })


}

export const stopTime = (dogName: string) => {
    if(TIList == undefined){
        return
    }
    TIList.forEach(dog => {
        if(dog.name === dogName){
            dog.timeOut = performance.now()
        }
    })
    
}      

export const showTimes = () => {
    if(TIList == undefined) return
    const viewer = TIList.map(dog => { 
        console.log('DOG NAME =', dog.name)
        console.log('DOG T_IN =', dog.timeIn)
        console.log('DOG T_OUT =', dog.timeOut)
        console.log('-------------')
        
    })
}


const createTable = (dogList: string[]) => {


}
