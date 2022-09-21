import React, { useEffect } from 'react'


type Props = {
    dogName: string;
    key: number;
}

const DogList: React.FC<Props> = ({dogName, key}) => {


    return (
        <ul>
            <li>{dogName}, # {key}</li>
        </ul>
    )

}


export default DogList;
