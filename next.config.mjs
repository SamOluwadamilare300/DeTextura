/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[  {
            hostname: "utfs.io",
            protocol: "https",
            
        },
        {
          hostname: "res.unsplash.com",
          protocol: "https",
        },
        {
            hostname: "res.pexels.com",
            protocol: "https",
          },
          {
            hostname: "res.cloudinary.com",
            protocol: "https",
          },
          {
            hostname: "utfs.io",
            
            
          },
          
    ]
    }
};


export default nextConfig;
