var webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: {
      demo: "./demo.js",
      vendor: ['react', 'react-dom']
    },
    output: {
        path: __dirname + "/demo",
        filename: "demo.js"
    },
    module:{
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-1'
        }
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ]
}
