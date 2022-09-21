import { dogstack } from './stackClass'

export const cleanUp = () => {
   const cleanedDog: string | undefined = dogstack.pop()
   console.log(cleanedDog, 'Was Removed from Stack')

};
