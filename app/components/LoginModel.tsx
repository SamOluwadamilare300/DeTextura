  
import { Dispatch, SetStateAction } from "react"
import AnimationData from "@/Animation - 1730454833432.json";
import Lottie from 'lottie-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs"
import { buttonVariants } from "@/components/ui/button"
  
export default function LoginModel({isOpen, setIsOpen}: {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
  return (
   <Dialog  onOpenChange={setIsOpen} open={isOpen} >  
          <DialogContent className="absolute z-[9999999]" > 
            <DialogHeader>  
                <div className="relative mx-auto w-24 h-24 mb-2">
              
          <Lottie animationData={AnimationData} style={{ width: "100%", height: "100%" }} />
      
                </div>
                <DialogTitle className="text-3xl text-center font-bold tracking-tight text-gray-900">
                    Log in To Continue 
                </DialogTitle>
                <DialogDescription className="text-base text-center py-2"> 
                 <span className="font-medium text-zinc-900">
                    Your Configuration was Saved!
                 </span> {" "}
                 Please Login or Create an account to complete your purchase. 
                </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200 ">
                <LoginLink className={buttonVariants({variant:'outline'})}>Login</LoginLink>
                <RegisterLink className={buttonVariants({variant: 'default'})} >Sign Up</RegisterLink>
            </div>
            </DialogContent> 
   </Dialog>
  )
}
