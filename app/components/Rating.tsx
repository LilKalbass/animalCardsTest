import { IoIosStarOutline,IoIosStarHalf, IoIosStar } from "react-icons/io";

export const Rating = ({ value, text }: { value: number, text: string }) =>
{
    if (value) {
        const stars = Array.from({length: 5}, () => <IoIosStarOutline className='text-[24px]'/>);
        let i;
        for (i = 0; i < value; i++) {
            stars[i] = <IoIosStar className='text-[24px]'/>;
        }

        if (value % 1 != 0) {
            stars[i - 1] = <IoIosStarHalf className='text-[24px]'/>;
        }
     return <div className='flex items-center gap-x-1'>
         <h3 className='text-[22px]'>{text}</h3>
         <div className='flex items-center'>{stars}</div>
        </div>;
    }
};

