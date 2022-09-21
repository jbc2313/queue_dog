import React, { useEffect, useState } from 'react'
import { dogstack } from '../util/stackClass'

type Props = {
    doggoList: string[] | undefined;
}

const DogList: React.FC<Props> = ({ doggoList }) => {



    return (
        <div>
            <ul>
                {doggoList != undefined ? 
                    <>
                      {doggoList?.map(dog => <li>{dog}</li>)} 
                    </>
                    :
                    <>
                        <p>Stack EMPTY</p>
                    </>

                }
            </ul>
        </div>

    )

}


export default DogList;
