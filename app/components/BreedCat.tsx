
import React, {useEffect, useState} from 'react'
import Image from "next/image";
import {getCatbyId} from "@/utils/api";
import Link from "next/link";

export const BreedCat = ({breed}: { breed: any[]}) => {
    const [name, setName] = useState<string[]>([]);
    const [detail, setDetail] = useState<number[]>([]);

    useEffect(() => {
        let n: string[] = [], d: number[] = [];
            for (let step = 0; breed?.length > step; step++) {
                getCatbyId(breed[step]?.id)
                    .then(r => {
                        n.push(r.breeds[0].name)
                        d.push(r.id)
                        if (n.length == 10) {
                            setName(n)
                        }
                        if (d.length == 10) {
                            setDetail(d)
                        }
                })
            }
    },[breed])

    return (
        <div className='flex py-16 md:py-8'>
            <div className='flex 2xl:flex-nowrap flex-wrap gap-y-16 items-center justify-center'>
                {breed.map((index, idN) => {
                    return (
                        <div key={index.id} className='flex justify-center items-center px-2'>
                            <div className='flex px-4 shadow-2xl max-h-[220px] items-center justify-between rounded-2xl hover:scale-105 transition-all'>
                                <Link href={`detail/${detail[idN]}`}>
                                    <div className='flex flex-col items-center justify-start min-h-[260px] gap-y-2 cursor-pointer'>
                                        <Image src={index.url} alt='qwe' width={220} height={80} className='h-[160px] rounded-2xl '/>
                                        <p className='flex text-center'>{name[idN]}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
