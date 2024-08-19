import { useRouter } from 'next/router'
import {useEffect} from "react";
import {getCatbyId} from "@/utils/api";

// @ts-ignore
export default function DetailShow({params}) {

    useEffect(() => {
        console.log(params)
        getCatbyId(params).then(res => {
            console.log(res)
        })
    }, [params])

    const router = useRouter()
    console.log("SUQA",params)
    return <p>Post</p>
}