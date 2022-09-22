import { dogstack } from './stackClass'
import { stopTime } from './timeTrack'


export const cleanUp = () => {
   const cleanedDog: string | undefined = dogstack.pop()
   console.log(cleanedDog, 'Was Removed from Stack')
   if(cleanedDog == undefined) return
   stopTime(cleanedDog)

};
