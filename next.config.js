/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  async redirects() {
    //url 리다이렉트 시켜주기
    return [
      {
        source: '/old-blog/:path*', //기존 url
        destination: '/new-sexy-blog/:path*', //리다이렉트될 url
        permanent: false,
      },
    ];
  },
  async rewrites() {
    // 고유 키 값을 숨기고 싶을떄,
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
