import { cn } from "@/lib/utils"
import Image from "next/image"
import { HTMLAttributes } from "react"

interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
   imgSrc: string
   dark?: boolean
}
const Phone =({imgSrc, className, dark= false, ...props}: PhoneProps)=>{
    return(
        <div className={cn('relative pointer-events-none z-50 overflow-hidden', className)}
        {...props}>
            <Image src={dark ? "https://res.cloudinary.com/durtjwxjs/image/upload/v1730366654/phone-template-dark-edges_budzll.png" : "https://res.cloudinary.com/durtjwxjs/image/upload/v1730366700/phone-template-white-edges_ilc2a3.png"} alt="image" 
            className="pointer-events-none z-50 select-none" />
            <div className="absolute -z-10 inset-0">
                <Image src={imgSrc} 
                className="object-cover min-w-full min-h-full"
                 alt="img" />
            </div>
        </div>
    )

}

export default Phone