module.exports = {
    productionSourceMap: false,
    publicPath: '/wordpress/',
    /*
    devServer: {
        proxy: 'http://localhost/wordpress/wp-content/plugins/vue-router-wp-test/',
    },
    */
    outputDir: './dist',
    configureWebpack: {
        devServer: {
            contentBase: '/wp-content/plugins/cah-faculty-staff-4/dist/',
            allowedHosts: ['localhost/wordpress'],
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        },
        output: {
            filename: 'js/cah-faculty-staff-4.js',
            chunkFilename: 'js/chunk-cah-faculty-staff-4.js',
        }
    },
    css: {
        extract: {
            filename: 'css/cah-faculty-staff-4.css',
            chunkFilename: 'css/chunk-cah-faculty-staff-4.css',
        }
    }
}