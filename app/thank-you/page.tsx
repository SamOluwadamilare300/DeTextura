
const ThankYou = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg mb-8">Your payment was successful. We appreciate your business.</p>
        <a href="/main" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Create More
        </a>
      </div>
    );
  };
  
  export default ThankYou;