
import React, {useEffect, useState} from 'react'
import Image from "next/image";
import {getCatbyId, getDogbyId} from "@/utils/api";
import Link from "next/link";
import {DetailedInfo} from "@/app/components/DetailedInfo";

export const Breed = ({breed}: { breed: any[]}) => {
    const [name, setName] = useState([])
    const [card,setCard] = useState([])
    const [detail, setDetail] = useState([])
    // useEffect(() => {
    //     // for (let step = 0; [detail].length > step; step++) {
    //     //     getCatbyId([detail].id[step]).then(res => {
    //     //         setCatsNames.push(res)
    //     //     })
    //     // }
    //     {[detail].map(([detail]) => {
    //         getCatbyId([detail].id).then(res => {
    //                      console.log("ff",res)
    //
    //         })
    //     })}
        // getCatbyId([detail]).then(res => {
        //     // setUrl(res.url)
        //     // setName(res.breeds[0].name)
        //     console.log('qwe',res.breeds)
        //     console.log('Name',res.breeds[0].name)
        // })
    // }, [])

    useEffect(() => {
             console.log("WQEQWEQW", breed)
        let n: string[] = []
        let f: string[] = []
        let d: string[] = []
            for (let step = 0; breed?.length > step; step++) {
                // console.log('CatsID`s from BReedPage:', [detail][step]?.id)
                getCatbyId(breed[step]?.id)
                    .then(r => {
                        console.log('getCatbyId:',r)
                        n.push(r.breeds[0].name)
                        d.push(r.id)
                        if (n.length == 10) {
                            // @ts-ignore
                            setName(n)
                            f = n.concat(breed)
                            // @ts-ignore
                            setCard(f)
                            console.log('CArd:',f)
                        }
                        if (d.length == 10) {
                            // @ts-ignore
                            setDetail(d)
                            console.log('Details:', d)
                        }
                })
                getDogbyId(breed[step]?.id)
                    .then(r => {
                        console.log('getDogbyId:',r)
                        n.push(r.breeds[0].name)
                        if (n.length == 10) {
                            // @ts-ignore
                            setName(n)
                            f = n.concat(breed)
                            // @ts-ignore
                            setCard(f)
                            console.log('CArd:',f)
                        }
                    })
            }
            console.log(name)
    },[breed])

    const handleNavigate = () => {
        console.log('qwe')
    }

    return (
        <div className='flex flex-nowrap py-8'>
            {/*<p>{catsNames}</p>*/}
            <div className='flex'>
                {breed.map((index, idN) => {
                    return (
                        <div key={index.id} className='flex justify-center items-center w-full mx-1'>
                            <div className='flex px-4 shadow-2xl max-h-[220px] items-center justify-between rounded-2xl hover:scale-105 transition-all'>
                                <div className='flex flex-col items-center justify-start min-h-[260px] gap-y-2 cursor-pointer'>
                                    <Image src={index.url} alt='qwe' width={220} height={80} className='h-[140px]'/>
                                    {/*<p>{index?.name}</p>*/}
                                    <Link href={`/${detail[idN]}`}>
                                        <p className='flex text-center'>{name[idN]}</p>
                                    </Link>
                                    <div className='hidden'>
                                        <DetailedInfo breed={detail}/>
                                    </div>
                                </div>
                                {/*<div>{index.url}</div>*/}
                                {/*<div>{url}</div>*/}
                            </div>
                        </div>
                    )
                })}
            </div>
            {/*<div className='flex'>*/}
                {/*{name.map((index,id) => {*/}
                {/*    return (*/}
                {/*        <div key={id} className='flex flex-col'>*/}
                {/*            <div>{id}</div>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*})}*/}
            {/*</div>*/}
        </div>
    )
}
