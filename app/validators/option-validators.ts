   //bg-zinc-900  border-zinc-900    
   //bg-blue-950  border-blue-950   
   //bg-rose-900   border-rose-900    
   //bg-orange-600  border-orange-600   
   //bg-yellow-500  border-yellow-500
   //bg-gray-500    border-gray-500
   //bg-white-900   border-white-900

import { PRODUCT_PRICES } from "../config/products";

export const COLORS = [
    {
        label: "White",
        value: "white",
        tw: "white-900"   
    },
    {
        label: "Black",
        value: "black",
        tw: "zinc-900"    
    },
    {
        label: "Blue", 
        value: "blue", 
        tw: "blue-950"
    },
    {
        label: "Rose",
        value: "rose", 
        tw: "rose-900"
    },
    {
        label: "Gray",
        value: "gray", 
        tw: "gray-500"
    },
    {
        label: "Yellow",
        value: "yellow", 
        tw: "yellow-500"
    },
    {
        label: "Orange",
        value: "orange", 
        tw: "orange-600"
    },
] as const;



export const MODELS = {
    name: "model",
    options: [
        {
            label: "iPhone X",
            value: "iphonex"
        },
        {
            label: "iPhone 11",
            value: "iphone11"
        },
        {
            label: "iPhone 12",
            value: "iphone12"
        },
        {
            label: "Samsung 1",
            value: "samsung1"
        },
        {
            label: "Samsung 2",
            value: "samsung2"
        },
        {
            label: "Redmi 1",
            value: "redmi1"
        },
        {
            label: "Redmi 2",
            value: "redmi1"
        },
        {
            label: "Tecno 1",
            value: "tecno1"
        },
        {
            label: "Tecno 2",
            value: "tecno2"
        }, 
        {
            label: "Infinix 1",
            value: "infinix1"
        },
        {
            label: "Infinix 2",
            value: "infinix2"
        },
    ]
} as  const 

export const MATERIALS ={
    name: "material",
    options: [
        {
            label: "Silicone",
            value: "silicone",
            description: undefined,
            price: PRODUCT_PRICES.material.silicone,
        },
        {
            label: "Soft Polycarbonate",
            value: "polycarbonate",
            description: "Scrath-resistant coating",
            price: PRODUCT_PRICES.material.polycarbonate,
        },
    ],
   
} as const

export const FINISHES ={
    name: "finish",
    options: [
        {
            label: "Smooth Finish",
            value: "smooth",
            description: undefined,
            price: PRODUCT_PRICES.finish.smooth,
        },
        {
            label: "Textured Finish",
            value: "textured",
            description: "Soft grippy texture",
            price: PRODUCT_PRICES.finish.textured,
        },
    ],
   
} as const 