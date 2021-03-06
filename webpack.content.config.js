const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports =

    {
        "mode": "development",
        "entry": "./src/contentIndex.js",
        "output": {
            "path": __dirname + '/dist/content',
            "filename": "[name].js"
        },
        plugins: [
            new MinifyPlugin({ removeDebugger: false, removeConsole: false }, {comments:false}),            
        ],
        "module": {
            "rules": [
                // {
                //     "enforce": "pre",
                //     "test": /\.(js|jsx)$/,
                //     "exclude": /node_modules/,
                //     // "use": "eslint-loader"
                // },
                {
                    "test": /\.js$/,
                    "exclude": /node_modules/,
                    "use": {
                        "loader": "babel-loader",
                        "options": {
                            "presets": [
                                "es2015",
                                "env",
                                "react",
                                "stage-2"
                            ],
                            "plugins": [
                                "transform-class-properties",
                            ]
                        }
                    }
                },
                {
                    "test": /\.css$/,
                    use:['style-loader','css-loader']
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                }
            ]
        },
    }

