/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lift-s3-bucket.s3.ap-northeast-2.amazonaws.com"],
  },
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: { not: /components/ },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: /components/,
        use: ["@svgr/webpack"],
      }
    );

    if (fileLoaderRule) {
      config.module.rules = config.module.rules.filter(
        (rule) => rule.test?.toString() !== /\.svg$/i.toString()
      );
    }

    return config;
  },
};

export default nextConfig;
