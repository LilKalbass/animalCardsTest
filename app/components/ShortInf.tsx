export const ShortInf = ({ value, text, sysM }: { value: string, text: string, sysM: string }) =>
{
    console.log(typeof value)
    if (value) {
        if (value.includes('years')) {
            return (
                <div className='flex gap-x-2 items-center'>
                    <h3 className='text-xl'>{text}</h3>
                    <p className='text-[16px] flex'>{value}</p>
                </div>
            )
        } else {
            return (
                <div className='flex gap-x-2 items-center'>
                    <h3 className='text-xl'>{text}</h3>
                    <p className='text-[16px] flex'>{value}{sysM}</p>
                </div>
            )
        }
    }
};

