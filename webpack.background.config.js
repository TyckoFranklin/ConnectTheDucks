const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports =

    {
        "mode": "development",
        "entry": ['babel-polyfill', "./src/backgroundIndex.js"],
        "output": {
            "path": __dirname + '/dist/background',
            "filename": "[name].js"
        },
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
                                "env"
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

