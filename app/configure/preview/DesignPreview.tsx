'use client';

import Phone from '@/app/components/Phone';
import { COLORS, MODELS } from '@/app/validators/option-validators';
import { cn } from '@/lib/utils';
import { Configuration } from '@prisma/client';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

const DesignPreview = ({configuration}: {configuration: Configuration}) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setShowConfetti(true);

    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    // Set initial dimensions
    updateDimensions();

    // Update dimensions on resize
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const {color, model } = configuration
  const tw = COLORS.find((supportedColor) => supportedColor.value === color)?.tw

  const {} = MODELS.options.find(({value})=> value === model)!

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
      
      <div className="mt-20 grid grid-cols-1 text-sm 
      sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12">
         <div className="sm:col-span-4 md:col-span-3 md:row-span-2 
         md:row-end-2">
            <Phone className={cn(`bg-${tw}`)} imgSrc={configuration.croppedImageUrl!}/>
         </div>
      </div>
    </>
  );
};

export default DesignPreview;
