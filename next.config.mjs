/** @type {import('next').NextConfig} */

const nextConfig = {};

export default nextConfig;

// import MiniCssExtractPlugin from "mini-css-extract-plugin";

// const nextConfig = {
//   webpack: (config, { isServer }) => {
//     // Ensure MiniCssExtractPlugin is only used in production mode
//     if (!isServer) {
//       config.plugins.push(
//         new MiniCssExtractPlugin({
//           filename: "[name].css",
//           chunkFilename: "[id].css",
//         })
//       );
//     }

//     return config;
//   },
// };

// export default nextConfig;
