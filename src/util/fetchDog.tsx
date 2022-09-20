
export const getBreeds = async () => {
    const data = await fetch('https://dog.ceo/api/breeds/list/all')
    const datalist = await data.json()
    const doglist = await datalist.message
    return doglist

}
