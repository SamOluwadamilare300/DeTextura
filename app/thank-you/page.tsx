import { Suspense } from "react";
import ThankYou from "./Thank-you";


const Page = () => {
    return (
      <Suspense>  
      <ThankYou/>
      </Suspense>
    );
  };
  
  export default Page;