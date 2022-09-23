



export const getRandom = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min )


    }

export const randDoggo = (arr: string[]) => { 
    const length: number = arr.length - 1 
    const doggo: string = arr[getRandom(0, length)]
    return doggo

}
