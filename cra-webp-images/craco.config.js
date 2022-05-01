const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

// ================= Choose one  =================

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.optimization.minimize = true;
            webpackConfig.optimization.minimizer.push(
                new ImageMinimizerPlugin({
                    minimizer: {
                        implementation: ImageMinimizerPlugin.imageminMinify,
                        options: {
                            plugins: [
                                ['mozjpeg', { quality: 85 }]
                            ],
                        },
                    },
                    generator: [{
                        // You can apply generator using `?as=webp`, you can use any name and provide more options
                        preset: 'webp',
                        implementation: ImageMinimizerPlugin.imageminGenerate,
                        options: {
                            plugins: ['imagemin-webp'],
                        },
                    }, ],
                }),
            );
            return webpackConfig;
        },
    },
};

// module.exports = {
//     webpack: {
//         configure: (webpackConfig) => {
//             webpackConfig.optimization.minimize = true;
//             webpackConfig.module.rules[1].oneOf[1] = {
//                 test: /\.(jpe?g|png|webp)$/i,
//                 use: {
//                     loader: 'responsive-loader',
//                     options: {
//                         adapter: require('responsive-loader/sharp'),
//                     },
//                 },
//             };

//             return webpackConfig;
//         },
//     },
// };