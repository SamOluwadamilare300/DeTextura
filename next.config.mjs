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


// const nextConfig = {
//   env: {
//     KINDE_SITE_URL: process.env.KINDE_SITE_URL ?? `https://https://detextura.onrender.com`,
//     KINDE_POST_LOGOUT_REDIRECT_URL:
//       process.env.KINDE_POST_LOGOUT_REDIRECT_URL ?? `https://https://detextura.onrender.com`,
//     KINDE_POST_LOGIN_REDIRECT_URL:
//       process.env.KINDE_POST_LOGIN_REDIRECT_URL ?? `https://https://detextura.onrender.com/dashboard`
//   }
// };

// module.exports = nextConfig;