const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const postcssCustomProperties = require('postcss-custom-properties');
const autoprefixer = require('autoprefixer');
const tailwindCss = require('tailwindcss');
const tailwindCssNesting = require('tailwindcss/nesting')

module.exports = {
    //mode
    mode: 'production',

    //entries
    entry: {
        index: './src/index.js'
    },

    //outputs
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    //Webpack plugins
    plugins:[
        new HtmlWebpackPlugin({ //This plugin makes an html file that can be configured below
            template: "./src/index.html",
            favicon: "./src/images/favicon-32x32.png"
        }),
        new MiniCssExtractPlugin(), //This plugin makes CSS files if you include them in js
    ],

    //Optimization options
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(), //This plugin minimizes CSS in production
        ],
        minimize: true, //set to true to minimize even in development
    },

    module: {
        //This section determines how various file types are processed with webpack
        rules: [
            {   
                //CSS files
                test: /\.css$/i,
                use: [

                    //MiniCssExtractPlugin loader is used instead of style-loader
                    //since CSS is no longer being appended with JS
                    MiniCssExtractPlugin.loader,

                    //CSS Loader
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,//import following loader(s)
                        }
                    },

                    //PostCSS loader to integrate postcss
                    { loader: 'postcss-loader', options: {
                        postcssOptions: {

                            //PostCSS plugins are imported and configured here
                            plugins: [

                                //1. postcss-custom-properties to process CSS custom properties for older browsers
                                //   preserve is set to false to disallow preserving custom properties after processing them
                                postcssCustomProperties( {preserve: false} ),

                                //2. autoprefixer
                                autoprefixer(),
                                
                                //3. tailwind-css
                                //   configured in it's own file to avoid extending this one
                                tailwindCssNesting(),
                                tailwindCss(),
                            ],
                            }
                        }
                    }

                    ],
            },
            {

                //Image files
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
        
            },
            {

                //HTML documents
                test: /\.html$/i,
                loader: "html-loader",

            },
        ],
    }
}