/** @type {import('next').NextConfig} */

const path = require('path'); 
const nextConfig = {
  reactStrictMode: false,
  basePath: "/newPortfolio",
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
    prependData: `@import "./src/app/scss/common/variable.module.scss"; @import "./src/app/scss/common/common.scss";`, // prependData 옵션 추가
  },
};

module.exports = nextConfig;