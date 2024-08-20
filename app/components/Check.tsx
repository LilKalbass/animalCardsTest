import { FaCheck } from "react-icons/fa";

export const Check = ({ value, text }: { value: number, text: string }) =>
{
    if (value) {
        const check = <FaCheck/>
        return <div className='flex items-center gap-x-1'>
            <h3 className='text-[22px]'>{text}</h3>
            <div className='text-2xl'>{check}</div>
        </div>;
    }
};

