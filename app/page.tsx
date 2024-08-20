'use client'

import {fetchCatImg, fetchDogImg} from "@/utils/api";
import {useEffect, useRef, useState} from "react";
import {BreedCat} from "@/app/components/BreedCat";
import {BreedDOg} from "@/app/components/BreedDOg";
export default function Home() {
    const [catImages, setCatImages] = useState<string[]>([]);
    const [dogImages, setDogImages] = useState<string[]>([]);
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;

            fetchCatImg().then((res: string[]) => {
                // console.log('OMG',res)
                setCatImages(res);
            });

            fetchDogImg().then((res: string[]) => {
                setDogImages(res);
            });
        }
    }, []);

    return (
        <main>
            <div className='max-w-[1800px] mx-auto'>
                <div className='flex flex-col items-center gap-y-4 py-8 '>
                    <div className='flex py-2  items-center pb-10'>
                        <h1 className='text-[36px]'>Animal Cards App</h1>
                    </div>
                    <div className='flex flex-col  items-center gap-y-2'>
                        <h2 className='text-3xl'>Cats:</h2>
                        <BreedCat breed={catImages}/>
                    </div>
                    <div className='flex flex-col items-center gap-y-2'>
                        <h2 className='text-3xl'>Dogs:</h2>
                        <BreedDOg breed={dogImages}/>
                    </div>
                </div>
            </div>
        </main>
    );
}