/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    // this includes files from the monorepo base two directories up
    outputFileTracingRoot: path.join(__dirname, './'),
    outputFileTracingIncludes: {
      '/eslint-config-custom': ['./eslint-config-custom/**/*'],
      '/tsconfig': ['./tsconfig/**/*'],
      '/ui': ['./ui/**/*'],
    }
  },
}

module.exports = nextConfig
