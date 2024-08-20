import {Rating} from "@/app/components/Rating";
import Image from "next/image";
import "@/app/globals.css";
import {Check} from "@/app/components/Check";
import {ShortInf} from "@/app/components/ShortInf";

export const DetailedInfo = ({ breed, img }: { breed: any[], img: string}) => {
    return (
        <section className='flex py-10'>
            <div className='container mx-auto'>
                {breed.map((index => {
                    return (
                        <div key={index} className='flex justify-between xl:flex-row flex-col items-center xl:items-start gap-y-4 xl:gap-y-0'>
                            <div className='flex items-center flex-col'>
                                <Image src={img} alt='detailed_img' width={620} height={620} className='rounded-2xl'/>
                                <h2 className= 'text-[40px]'>{index.name}</h2>
                            </div>
                            <div className=' xl:max-w-[30%] w-full flex flex-col gap-y-4'>
                                <div className='flex gap-y-2 flex-col justify-center items-center' >
                                    <h2 className='text-2xl'>Temperament:</h2>
                                    <p className='text-center text-[20px]'>{index.temperament}</p>
                                </div>
                                <div className='flex justify-center items-center gap-y-2 flex-col'>
                                    <h2 className='text-2xl'>Description:</h2>
                                    <p className='text-center text-[18px]'>{index.description}</p>
                                    <p className='text-center text-[18px]'>{index?.breed_group}</p>
                                    <p className='text-center text-[18px]'>{index?.bred_for}</p>
                                </div>
                            </div>
                                <div className='flex flex-col items-center'>
                                    <h2 className='flex pb-4 text-2xl'>Short Info:</h2>
                                    <div className='flex flex-col py-2 items-center'>
                                        <ShortInf text='Life Span:' value={index.life_span} sysM = 'yrs'/>
                                        <ShortInf text='Weight:' value={index.weight.metric} sysM = 'k/g'/>
                                        <ShortInf text='Height:' value={index?.height?.metric} sysM = 'm'/>
                                    </div>
                                    <div className='flex flex-col py-1 items-center'>
                                        <Rating text='Adaptability:' value={index.adaptability}/>
                                        <Rating text ='Child Friendly:' value={index.child_friendly}/>
                                        <Rating text='Dog Friendly:' value={index.dog_friendly}/>
                                        <Rating text='Energy:' value={index.energy_level}/>
                                        <Rating text='Stranger Friendly:' value={index.stranger_friendly}/>
                                        <Rating text='Shedding:' value={index.shedding_level}/>
                                        <Rating text='Intelligence:' value={index.intelligence}/>
                                    </div>
                                    <div className='flex flex-col py-1 items-center'>
                                        <Check text='Experimental:' value={index.experimental}/>
                                        <Check text='Grooming:' value={index.grooming}/>
                                        <Check text='Hairless:' value={index.hairless}/>
                                        <Check text='Has Health Issues:' value={index.health_issues}/>
                                        <Check text='Hypoallergenic:' value={index.hypoallergenic}/>
                                        <Check text='Indoor:' value={index.indoor}/>
                                        <Check text='Rare:' value={index.rare}/>
                                    </div>
                                </div>
                        </div>
                    )
                }))}
            </div>
        </section>
    )
}