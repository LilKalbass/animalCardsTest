'use client'

import {fetchCatImg, fetchDogImg, getCatImgbyId} from "@/utils/api";
import Image from "next/image";
import {useEffect, useState} from "react";
import {Breed} from "@/app/components/Breed";

export default function Home() {
    const [imgUrl, setUrl] = useState(``)
    const [imgName, setName] = useState(``)
    const [catImages, setCatImages] = useState([])
    const [dogImages, setDogImages] = useState([])
    const [catsNames, setCatsNames] = useState([])
    const catsN = []
    useEffect(() => {
        getCatImgbyId().then(res => {
            setUrl(res.url)
            setName(res.breeds[0].name)
            // console.log('qwe',res.breeds)
            // console.log('Name',res.breeds[0].name)

        })
    }, [])
     useEffect(() => {
        fetchCatImg().then(res => {
            console.log('Cats:', res)
            setCatImages(res)
            // for (let step = 0; res.length > step; step++) {
                // console.log('CatsID`s:', res[step].id)
                // getCatbyId((res[step].id)).then(res => {
                //     console.log('getById:',res)
                // })
                // getCatbyId(res.[step].id {breed: string})
                // catsN.push(res[step].id)
            // }
            // setCatsNames(res.id)
            // console.log(catsNames)
            // console.log(catsN)
            // getCatbyId(catImages.id)
            // console.log('CatsID:', catImages.id)
        });

    }, [])
    useEffect(() => {
        fetchDogImg().then(res => {
            setDogImages(res)
            console.log('Dogs:', res)
        })
    }, [])
    // useEffect(() => {
    //     fetchCatBreed().then(res => {
    //         // setDogImages(res)
    //         console.log('KOTIKS:', res)
    //     })
    // }, [])
    // useEffect(() => {
    //     console.log('M:',catImages)
    //     getCatbyId(catImages.id).then(res => {
    //         console.log('qweEEEEEEEEEEEE',res.breeds)
    //     })
    // }, [])
    return (
        <div className='flex flex-col items-center justify-between min-h-[1400px]'>
            {/*<div>{catsN}</div>*/}
            {/*<div>{catsN.map((item) => (*/}
            {/*    <div>*/}
            {/*        {item}*/}
            {/*    </div>*/}
            {/*))}</div>*/}
            <div className='flex py-2 flex-col items-center'>
                <Image src={imgUrl} alt='qe' height={600} width={600}/>
                <p>{imgName}</p>
            </div>
            <div className='flex'>
                <Breed breed={catImages}/>
                {/*{catImages.map((index) => {*/}
                {/*    return (*/}
                {/*        <div key={index} className='flex flex-row justify-center items-center'>*/}
                {/*            <div className='flex-row flex p-4'>*/}
                {/*                <Image src={index.url} alt='qwe' width={200} height={200}/>*/}
                {/*                /!*<div>{index.url}</div>*!/*/}
                {/*                /!*<div>{url}</div>*!/*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*})}*/}
            </div>
            <div className='flex'>
                <Breed breed={dogImages}/>
                {/*{dogImages.map((index) => {*/}
                {/*    return (*/}
                {/*        <div key={index} className='flex flex-row justify-center items-center'>*/}
                {/*            <div className='flex-row flex p-4'>*/}
                {/*                <Image src={index.url} alt='qwe' width={200} height={200}/>*/}
                {/*                /!*<p>{index.id}</p>*!/*/}
                {/*                <Link href='/'/>*/}
                {/*                /!*<div>{index.url}</div>*!/*/}
                {/*                /!*<div>{url}</div>*!/*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*})}*/}
            </div>
        </div>
    );
}