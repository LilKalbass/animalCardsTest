import { useRouter } from 'next/router'

export default function DetailShow() {
    const router = useRouter()
    return <p>Post: {router.query.id}</p>
}