// const withPWA = require("@ducanh2912/next-pwa").default({
//     dest: "public",
//     cacheOnFrontEndNav: true,
//     aggressiveFrontEndNavCaching: true,
//     reloadOnOnline: true,
//     swcMinify: true,
//     workboxOptions: {
//       disableDevLogs: true,
//     },
//     // ... other options you like
//   });

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["i.imgur.com", "cdn.sanity.io", "img.clerk.com"]
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig
// module.exports = withPWA(nextConfig)
