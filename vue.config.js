const path = require('path');
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "@components": path.resolve(__dirname, 'src', 'components'),
                "@styles": path.resolve(__dirname, 'src', 'styles'),
                "@sound": path.resolve(__dirname, 'src', 'assets', 'sounds')
            }
        }
    },

    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "@styles/_colors.scss";`
            }
        }
    },

    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue_simon_says_game/'
        : '/'
}