"use client";

import React from 'react';
import Image from 'next/image';
import MaxWithWrapper from './components/MaxWithWrapper';
import { ArrowRight, Check, Star } from 'lucide-react';
import Phone from './components/Phone';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Icons } from './components/Icon';
import { Reviews } from './components/Reviews';
import { buttonVariants } from '@/components/ui/button';

import Newsletter from './components/NewsLetter';


const Page = () => {
  // Variants for text and list items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-slate-50">
      <section>
        <MaxWithWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">  
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            {/* Text Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <motion.h1 
                variants={itemVariants}
                className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-4xl md:text-5xl lg:text-6xl"
              >
                <span className="bg-orange-600 rounded-md px-2 text-white">Custom</span> Prints for Every Memory!
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap"
              >
                Craft Your Stories, Designs on <span className="font-semibold"> <br /> T-Shirts, Phone Cases, and Mugs!</span> 
              </motion.p>
              
              {/* Feature List */}
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start"
              >
                {[
                  "Crafted with premium, long-lasting materials.",
                  "Impeccable 100% prints clarity & discounts.",
                  "Affordable pricing with swift delivery."
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="flex gap-1.5 items-center text-left"
                  >
                    <Check className="h-5 w-5 shrink text-orange-600" />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
              
              {/* Buttons */}
              <motion.div 
                variants={itemVariants}
                className="mt-12 flex flex-col sm:flex-row items-center gap-5"
              >
                <Link href="/order">
                  <Button 
                    asChild
                    className="bg-orange-600 text-white hover:bg-orange-700 px-6 py-3 text-lg font-semibold rounded-md flex items-center gap-2"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Make Order
                    </motion.div>
                  </Button>
                </Link>
                <Link href="/shop">
                  <Button 
                    asChild
                    variant="outline" 
                    className="bg-white text-orange-700 hover:bg-orange-600 hover:text-white px-6 py-3 text-lg font-semibold rounded-md flex items-center gap-2"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Shop Here
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit"
          >
            <div className="relative md:max-w-xl">
         
              <motion.img 
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                src="https://res.cloudinary.com/durtjwxjs/image/upload/v1730367033/your-image_emqvyu.png" 
                alt="img" 
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block" 
              />
              <motion.img 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                src="https://res.cloudinary.com/durtjwxjs/image/upload/v1730367049/line_tkbhs9.png" 
                alt="" 
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone 
                className="w-64" 
                imgSrc="https://res.cloudinary.com/durtjwxjs/image/upload/v1730384983/2_ewg71c.jpg" 
              />

            </div>
          </motion.div>
          
        </MaxWithWrapper>
      </section>
        

      {/* Value Proposition section */}
     <section className="bg-slate-50 py-24">
      <MaxWithWrapper  className='flex flex-col items-center gap-16 sm:gap-32'>  
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className='order-1 mt-2 pr-5 pl-5 font-bold text-4xl bg-orange-600  rounded-md md:text-5xl text-white tracking-tight text-center text-balance !leading-tight' >
              Hear from Our Customers  </h2>
              <Icons.underline className='hidden sm:block pointer-events-none absolute insert-x-0 -bottom-6 text-orange-600'/>
            
          </div>
          <div className="mx-auto max-w-2xl grid-cols px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-28">
              <div className="flex gap-o.5 mb-2">
                <Star className='h-5 w-5 text-orange-600 fill-orange-600' />
                <Star className='h-5 w-5 text-orange-600 fill-orange-600' />
                <Star className='h-5 w-5 text-orange-600 fill-orange-600' />
                <Star className='h-5 w-5 text-orange-600 fill-orange-600' />
                <Star className='h-5 w-5 text-orange-600 fill-orange-600' />
              </div>
              <div className="text-lg leading-8">
              <p>
                  "I usually keep my phone together with my keys in my pocket
                  and that led to some pretty heavy scratchmarks on all of my
                  last phone cases. This one, besides a barely noticeable
                  scratch on the corner,{' '}
                  <span className='p-0.5 bg-orange-600 rounded text-white'>
                    looks brand new after about half a year
                  </span>
                  . I love it."
                </p>
              </div>
              <div className='flex gap-4 mt-2'>
                <img
                  className='rounded-full h-12 w-12 object-cover'
                  src='https://res.cloudinary.com/durtjwxjs/image/upload/v1730364557/mine_fkji3w.gif'
                  alt='user'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'>Sam</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-orange-600' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-2xl grid-cols px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-28">
              <div className="flex gap-o.5 mb-2">
                <Star className='h-5 w-5 text-orange-600 fill-orange-600' />
                <Star className='h-5 w-5 text-orange-600 fill-orange-600' />
                <Star className='h-5 w-5 text-orange-600 fill-orange-600' />
                <Star className='h-5 w-5 text-orange-600 fill-orange-600' />
                <Star className='h-5 w-5 text-orange-600 fill-orange-600' />
              </div>
              <div className="text-lg leading-8">
              <p>
                “Partnering with Dare's Apparel for our T-shirt printing needs has been a fantastic experience. Their quick, quality service stands out—our shirts still look brand new even after six months of wear.
                  Ahh, Just Joking!<span className="p-0.5 bg-orange-600 rounded text-white"> ..But Highly recommend! "</span>
                </p>

              </div>
              <div className='flex gap-4 mt-2'>
                <img
                  className='rounded-full h-12 w-12 object-cover'
                  src='https://res.cloudinary.com/durtjwxjs/image/upload/v1730364575/user-5_oo1jld.png'
                  alt='user'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'>John</p>
                  <div className='flex gap-1.5 items-center text-zinc-600'>
                    <Check className='h-4 w-4 stroke-[3px] text-orange-600' />
                    <p className='text-sm'>Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </MaxWithWrapper>
      <div className="pt-16">
          <Reviews/>
      </div>
     </section>
     <section>
        <MaxWithWrapper>  
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm-center">
            <h2 className='order-1 mt-2 pr-5 pl-5 font-bold text-4xl  rounded-md md:text-5xl text-black tracking-tight text-center text-balance !leading-tight' >
            Upload Your Photo get {''} <span  className='relative px-2 bg-orange-600 text-white'>Your Design in Seconds</span></h2>
            </div>
          </div>
          <div className='mx-auto max-w-6xl px-6 lg:px-8'>
            <div className='relative flex flex-col items-center md:grid grid-cols-2 gap-40'>
              <img
                src='/arrow.png'
                className='absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0'
              />

              <div className='relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl'>
                <img
                  src='/horse.jpg'
                  className='rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full'
                />
              </div>

              <Phone className='w-60' imgSrc='/horse_phone.jpg' />
            </div>
          </div>

          <ul className='mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit'>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-orange-600 inline mr-1.5' />
              High-quality silicone material
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-orange-600 inline mr-1.5' />
              Scratch- and fingerprint resistant coating
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-orange-600 inline mr-1.5' />
              Wireless charging compatible
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-orange-600 inline mr-1.5' />5 year
              print warranty
            </li>

            <div className='flex justify-center'>
               <Link
                className={buttonVariants({
                  size: 'lg',
                  className: 'mx-auto mt-10 mb-10',
                })}
                href='/configure/upload'>
                Create Your Now <ArrowRight className='h-4 w-4 ml-1.5 ' />
              </Link>
            </div>
          </ul>
          <Newsletter/>
        </MaxWithWrapper>
     </section>
    </div>
  );
};

export default Page;