export const PRODUCT_PRICES = {
    material: {
      silicone: 0,
      polycarbonate: 5_00000,
    },
    finish: {
      smooth: 0,
      textured: 3_00000,
    },
   
  } as const

  export const BASE_PRICE = 1000000

  // const PhoneCheckout = ({ configuration }) => {
  //   // Calculate total price including all options
  //   const calculateTotalPrice = () => {
  //     let total = BASE_PRICE;
      
  //     if (configuration.material === 'polycarbonate') {
  //       total += PRODUCT_PRICES.material.polycarbonate;
  //     }
      
  //     if (configuration.finish === 'textured') {
  //       total += PRODUCT_PRICES.finish.textured;
  //     }
      
  //     return total / 100; // Convert to lowest currency unit for Flutterwave
  //   };
  
  //   const fwConfig = {
  //     public_key: 'FLWPUBK_TEST-93bc3cf0fcae86e2b33e17aaecd82c72-X',
  //     tx_ref: Date.now(),
  //     amount: calculateTotalPrice(),
  //     currency: 'NGN',
  //     payment_options: 'card,mobilemoney,ussd',
  //     customer: {
  //       email: 'damilarea71@gmail.com',
  //       phone_number: '08144954091',
  //       name: 'Samson'
  //     },
  //     customizations: {
  //       title: 'Textura',
  //       description: 'Phone Case Payment',
  //       logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
  //     },
  //     text: 'Pay Now',
  //     callback: (response) => {
  //       console.log('Payment complete:', response);
  //       closePaymentModal();
  //     },
  //     onClose: () => {
  //       console.log('Payment modal closed');
  //     },
  //   };
  
  //   return (
  //     <div className="mt-8 flex justify-end">
  //       <FlutterWaveButton {...fwConfig} />
  //     </div>
  //   );
  //  };
  
  // export default PhoneCheckout;