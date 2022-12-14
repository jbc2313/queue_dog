import { dogstack } from './stackClass'

//timeIn = time in stack/queue
//timeOut = time NOT in stack/queue

interface tableItem{
    name: string;
    timeIn: number;
    timeOut: number;
    totTime: number;

}

type tableItemList = tableItem[]

let TIList: tableItemList | undefined 

export const initTimer = (dogList: string[]) => {
   TIList = dogList.map((dog) => {
      return {
        name: dog,
        timeIn: 0,
        timeOut: 0,
        totTime: 0,
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
            const timetmp = dog.timeOut - dog.timeIn
            const tottimetmp = dog.totTime + timetmp
            dog.totTime = tottimetmp
            // check the times 
            console.log(dog.name)
            console.log('timeIN----',dog.timeIn)
            console.log('timeOUT----',dog.timeOut)
            console.log('TOTTIME----',dog.totTime)
            console.log('TIMETEMPERARY------',timetmp)
            console.log('------NEXT DOG--------')
            dog.timeIn = 0,
            dog.timeOut = 0
        }
    })
    
}      

export const showTimes = () => {
    if(TIList == undefined) return
    const viewer = TIList.map(dog => { 
        console.log('DOG NAME =', dog.name)
        console.log('DOG T_IN =', dog.timeIn)
        console.log('DOG T_OUT =', dog.timeOut)
        console.log('Dog TOTALTIME=', dog.totTime)
        console.log('-------------')
        
    })
}


export const dogNames = () => {
    if(TIList == undefined) return
    const names: string[] | undefined = TIList.map(dog => {
        return dog.name
    })
    return names

}

export const expTimes = () => {
    if(TIList == undefined) return
    const data: number[] | undefined = TIList.map(dog => {
        return dog.totTime / 1000
    })
    return data

}

const createTable = (dogList: string[]) => {


}
