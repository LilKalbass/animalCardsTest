import { useRouter } from 'next/router'
import {useEffect, useState} from "react";
import {getCatbyId} from "@/utils/api";
import axios from "axios";
import {DetailedInfo} from "@/app/components/DetailedInfo";

// @ts-ignore
export default function DetailShow() {

    const router = useRouter()
    const {id} = router.query
    const [animal, setAnimal] = useState([]);
    const [img, setImg] = useState('')

    useEffect(() => {
        if (id) {
            const accessDetails = async () => {
                let DogeOrKote;
                try {
                    const res = await fetch(`https://api.thedogapi.com/v1/images/${id}`);
                    if (res.ok) {
                        DogeOrKote = await res.json();
                    } else {
                        const resCat = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
                        DogeOrKote = await resCat.json();
                    }
                    setAnimal(DogeOrKote.breeds);
                    setImg(DogeOrKote.url)
                } catch (error) {
                    console.error("Error fetching animal data:", error);
                }
            };
            accessDetails();
        }
    }, [id]);

    return (
        <>
                <DetailedInfo breed={animal} img = {img}/>
        </>
    )
}