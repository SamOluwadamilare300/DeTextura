'use client'
import React, { useEffect, useState } from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { Configuration } from '@prisma/client';
import { BASE_PRICE, PRODUCT_PRICES } from '@/app/config/products';
import { Button } from '@/components/ui/button';

// Type for payment response
interface PaymentResponse {
  status: string;
  tx_ref: string;
  transaction_id?: string;
}

const DesignPreview = ({ configuration }: { configuration: Configuration }) => {
  const [paymentConfig, setPaymentConfig] = useState<any>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Calculate total price based on configuration
  useEffect(() => {
    let calculatedPrice = BASE_PRICE;
    
    if (configuration.material === 'polycarbonate') {
      calculatedPrice += PRODUCT_PRICES.material.polycarbonate;
    }
    if (configuration.finish === 'textured') {
      calculatedPrice += PRODUCT_PRICES.finish.textured;
    }
    
    // Convert to main currency unit (e.g., from cents to dollars/naira)
    setTotalPrice(calculatedPrice / 100);
  }, [configuration]);

  // Set up Flutterwave config when totalPrice is calculated
  useEffect(() => {
    if (totalPrice > 0) {
      const config = {
        public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
        tx_ref: `TX-${Date.now()}`,
        amount: totalPrice,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: configuration.customerEmail || 'customer@example.com',
          phone_number: configuration.phoneNumber || '',
          name: configuration.customerName || 'Customer',
        },
        customizations: {
          title: 'Phone Case Purchase',
          description: `${configuration.model} Phone Case - ${configuration.color}`,
          logo: '/your-logo-url.png',
        },
        meta: {
          configuration_id: configuration.id,
          color: configuration.color,
          model: configuration.model,
          finish: configuration.finish,
          material: configuration.material
        }
      };
      setPaymentConfig(config);
    }
  }, [totalPrice, configuration]);

  // Handle successful payment
  const handlePaymentSuccess = async (response: PaymentResponse) => {
    try {
      if (response.status === 'successful') {
        // Here you would typically:
        // 1. Verify the transaction on your backend
        // 2. Update order status
        // 3. Send confirmation email
        // 4. Redirect to success page
        console.log('Payment successful:', response);
        
        // Example API call to verify transaction
        const verificationResponse = await fetch('/api/verify-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            transaction_id: response.transaction_id,
            tx_ref: response.tx_ref
          }),
        });

        if (verificationResponse.ok) {
          // Handle successful verification
          window.location.href = '/order/success';
        }
      }
    } catch (error) {
      console.error('Payment verification failed:', error);
      window.location.href = '/order/error';
    } finally {
      closePaymentModal();
    }
  };

  // Handle payment modal close
  const handlePaymentClose = () => {
    console.log('Payment modal closed');
  };

  return (
    <div className="mt-8">
      <div className="bg-gray-50 p-6 sm:rounded-lg sm:p-8">
        <div className="flow-root">
          {/* Price breakdown */}
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-600">Base Price</span>
            <span className="font-medium text-gray-900">
              ₦{(BASE_PRICE / 100).toFixed(2)}
            </span>
          </div>
          
          {configuration.material === 'polycarbonate' && (
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600">Polycarbonate Material</span>
              <span className="font-medium text-gray-900">
                ₦{(PRODUCT_PRICES.material.polycarbonate / 100).toFixed(2)}
              </span>
            </div>
          )}
          
          {configuration.finish === 'textured' && (
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600">Textured Finish</span>
              <span className="font-medium text-gray-900">
                ₦{(PRODUCT_PRICES.finish.textured / 100).toFixed(2)}
              </span>
            </div>
          )}

          <div className="my-4 h-px bg-gray-200" />
          
          <div className="flex items-center justify-between py-2">
            <span className="font-semibold text-gray-900">Total</span>
            <span className="font-semibold text-gray-900">
              ₦{totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          {paymentConfig && (
            <Button className="px-6">
              <FlutterWaveButton
                {...paymentConfig}
                className="flw-button"
                callback={handlePaymentSuccess}
                onClose={handlePaymentClose}
                text="Pay Now"
              />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignPreview;