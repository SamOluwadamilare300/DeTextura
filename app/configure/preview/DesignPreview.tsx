'use client';
import { useRouter } from 'next/navigation';
import Phone from '@/app/components/Phone';
import { BASE_PRICE, PRODUCT_PRICES } from '@/app/config/products';
import { COLORS, MODELS } from '@/app/validators/option-validators';
import { cn, formatPrice } from '@/lib/utils';
import { Configuration } from '@prisma/client';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { Button } from '@/components/ui/button';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { toast } from '@/hooks/use-toast';
import {useKindeBrowserClient} from '@kinde-oss/kinde-auth-nextjs'
import { createCheckoutSession } from './actions';
import LoginModel from '@/app/components/LoginModel';


//User Data
const userData = {
  email: 'damilarea71@gmail.com',
  phone_number: '08144954091',
  name: 'Samson'
};

const DesignPreview = ({configuration}: {configuration: Configuration}) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const router = useRouter();
  const {id} = configuration
  const {user}= useKindeBrowserClient()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false)

  const {color, model, finish, material } = configuration;
  const tw = COLORS.find((supportedColor) => supportedColor.value === color)?.tw;
  const {label: modelLabel} = MODELS.options.find(({value})=> value === model)!;

  // Calculate totalPrice based on selected options
  let totalPrice = BASE_PRICE;
  if (material === 'polycarbonate') totalPrice += PRODUCT_PRICES.material.polycarbonate;
  if (finish === 'textured') totalPrice += PRODUCT_PRICES.finish.textured;

  // Flutterwave configuration inside component to access totalPrice
  const fwConfig = {
    public_key: 'FLWPUBK_TEST-93bc3cf0fcae86e2b33e17aaecd82c72-X',
    tx_ref: String(Date.now()),  // Convert to string
    amount: totalPrice / 100, // Convert from kobo to Naira
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: userData,
    customizations: {
      title: 'Textura',
      description: 'Payment for Products',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
    text: 'Payment with Flutterwave!',
    callback: (response: any) => {
      console.log(response);
      closePaymentModal();
      router.push('https://detextura.onrender.com/thank-you')
    },
    
    onClose: () => {  
      toast({
        title: 'Something went south',
        description: 'There was an error on your end. Please try again!',
        variant: 'destructive',
      })
    } 
      
    
     }
  

  useEffect(() => {
    setShowConfetti(true);

    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleCheckout = () => {
    if (user) {
      // Initiate checkout if the user is logged in
      createCheckoutSession({ configId: configuration.id });
    } else {
      // Store configuration in local storage and show login modal if not logged in
      localStorage.setItem('configuration', configuration.id);
      setIsLoginModalOpen(true);
    }
  };


  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 overflow-hidden justify-center"
      >
        {showConfetti && (
          <Confetti
            width={dimensions.width}
            height={dimensions.height}
            numberOfPieces={1000}
            recycle={false}
          />
        )}
      </div>
      
      {/* End of Confetti */}
 
     <LoginModel isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />
      
      <div className="mt-20 grid grid-cols-1 text-sm 
      sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
         <div className="sm:col-span-4 md:col-span-3 md:row-span-2 
         md:row-end-2">
            <Phone className={cn(`bg-${tw}`)} imgSrc={configuration.croppedImageUrl!}/>
         </div>
         <div className="mt-6 sm:col-span-9 sm:mt-9 md:row-end-1">
            <h3 className='text-3xl font-bold tracking-tight text-gray-900'>Your {modelLabel} Case</h3>
            <div className="mt-3 flex items-center gap-1.5 text-base">
                <Check className='h-4 w-4 text-orange-500' /> In stock and Ready to Ship.
            </div>
         </div>
         <div className="sm:col-span-12 md:col-span-9 text-base">
            <div className="grid grid-cols-1 gap-y-8 border-b border-gray-200 
                py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
                    <div>
                    <p className="font-medium text-zinc-950">Highlights</p>
                      <ol className="mt-3 text-zinc-700 list-disc list-inside">
                     <li>Shock-absorbing technology for superior drop protection</li>
                    <li>Scratch-resistant and anti-fingerprint coating</li>
                     <li>Slim, lightweight design without compromising durability</li>
                      <li>Raised edges for screen and camera protection</li>
                     <li>Compatible with wireless charging and MagSafe</li>
                    <li>Precision cutouts for easy access to buttons and ports</li>
                    </ol>
                    </div>
                    <div>
                    <p className="font-medium text-zinc-950">Material</p>
                    <ol className="mt-3 text-zinc-700 list-disc list-inside">
                    <li>Durable polycarbonate shell for impact resistance</li>
                    <li>TPU (thermoplastic polyurethane) for flexibility and shock absorption</li>
                    <li>Anti-yellowing, scratch-resistant coating for long-lasting clarity</li>
                    <li>Vegan leather for a premium look and feel</li>
                    <li>Recyclable and eco-friendly materials for sustainability</li>
                    <li>Soft microfiber lining to protect the phone’s back</li>
                   </ol>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="bg-gray-50 p-6 sm:rounded-lg sm:p-8">
                        <div className="flow-root text-sm">
                         <div className="flex items-center justify-between py-1 mt-2">
                            <p className="text-gray-600">Base Price</p>
                            <p className="font-medium text-gray-900">
                                {formatPrice(BASE_PRICE/ 100)}
                            </p>
                         </div>
                         {finish === 'textured' ? (
                           <div className='flex items-center justify-between py-1 mt-2'>
                           <p className='text-gray-600'>Textured Finish</p>
                          <p className='font-medium text-gray-900'>
                            {formatPrice(PRODUCT_PRICES.finish.textured / 100)}
                             </p>
                           </div>
                             ) : null}

                         {material === 'polycarbonate' ? (
                             <div className="flex items-center justify-between py-1 mt-2">
                             <p className='text-gray-600'>Soft Polycarbonate Material</p>
                             <p className="font-medium text-gray-900">
                                 {formatPrice(PRODUCT_PRICES.material.polycarbonate / 100)}
                             </p>
                          </div>
                         ): null}

                         <div className="my-2 h-px bg-gray-200">
                            <div className="flex items-center justify-between py-2">
                                <p className="font-semibold text-gray-900">Order Total</p>
                                <p className='font-semibold text-gray-900'>
                                   {formatPrice(totalPrice / 100)}
                                </p>
                            </div>
                         </div>
                        </div>
                        {/* Payment Section */}
      <div className="mt-8 flex justify-end pb-12">
        {user ? (
              <Button className="px-4 sm:px-6 lg:px-8" onClick={handleCheckout}>
                   <FlutterWaveButton {...fwConfig} />
              </Button>
           ) : (
             <Button className="px-4 sm:px-6 lg:px-8" onClick={handleCheckout}>
               Checkout with Payment!
             </Button>
        )}
      </div>
                    </div>
                </div>
         </div>
      </div>
    </>
  );
};

export default DesignPreview;
