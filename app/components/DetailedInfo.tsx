import React from 'react'

export const DetailedInfo = ({breed}: { breed: any[]}) => {
    // console.log('DetailedInfo:', breed)
    return (
        <div>{breed.map((index) => {
            return (
                <>
                    <div>{index.id}</div>
                </>
            )
        })}
        </div>
    )
}
