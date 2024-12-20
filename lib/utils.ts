import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price:number)=>{
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  })
  return formatter.format(price)
}
