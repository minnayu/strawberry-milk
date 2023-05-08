/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    LASTFM_TOKEN: process.env.LASTFM_TOKEN
  }
}

module.exports = nextConfig
