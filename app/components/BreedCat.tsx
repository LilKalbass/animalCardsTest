import React, {useEffect, useState} from 'react'
import Image from "next/image";
import {getCatbyId} from "@/utils/api";
import Link from "next/link";

export const BreedCat = ({breed}: { breed: any[]}) => {
    const [cats, setCats] = useState<{id: string; url: string }[]>([]);
    const [names, setNames] = useState<string[]>([]);

    useEffect(() => {
        const fetchCats = async () => {
            const initialCats = breed.map((b) => ({
                id: b.id,
                url: b.url
            }));
            setCats(initialCats);
            const fetchedNames = await Promise.all(
                breed.map(async (b) => {
                    try {
                        const response = await getCatbyId(b.id);
                        return response.breeds[0]?.name;
                    } catch (error) {
                        return 'Error';
                    }
                })
            );
            setNames(fetchedNames);
        };
        fetchCats();
    }, [breed]);

    return (
        <div className='flex py-16 md:py-8'>
            <div className='flex 2xl:flex-nowrap flex-wrap gap-y-16 items-center justify-center'>
                {cats.map((cat, idN) => {
                    return (
                        <div key={cat.id} className='flex justify-center items-center px-2'>
                            <div className='flex px-4 shadow-2xl max-h-[220px] items-center justify-between rounded-2xl hover:scale-105 transition-all'>
                                <Link href={`detail/${cat.id}`}>
                                    <div className='flex flex-col items-center justify-start min-h-[260px] gap-y-2 cursor-pointer'>
                                        <Image src={cat.url} alt='qwe' width={220} height={80} className='h-[160px] rounded-2xl ' loading='lazy'/>
                                        <p className='flex text-center text-[18px]'>{names[idN]}</p>
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
