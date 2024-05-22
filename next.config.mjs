/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.eldestapeweb.com",
                protocol: "https"
            }
        ]
    }
};

export default nextConfig;
