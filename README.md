# Create React Project from Scratch

  1. Create Project direcory `mkdir dirname` and `cd dirname`.
  2. Node Package Manager Initialization `npm init`.
  3. Git initialization `git init`.
  4. Create public directory `mkdir public` and source code directory for react `mkdir src`.
  5. Create index.html file in public file and put follwing code.

```
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="Content-Type" content="text/html;">
      <meta name="viewport" content="width=device-width, initial-scale=1.0,
        maximum-scale=1.0, shrink-to-fit=no">
        <title>React App</title>
    </head>
    <body>
      <div id="root"></div>
      <noscript>Please enable JavaScript to view the <a href="http://localhost">link</a></noscript>
      <script src="../dist/bundle.js"></script>
    </body>
  </html>
```

  6. For ES6 Run `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react`.
  7. Install react and react-dom `npm install react react-dom`.
  8. Create three files Index.js, App.js. App.css in `src`.
  9. Write code in App.js.
```
import React from 'react';
import "./App.css";

const App = ()=>(
  <div className="container">
    <h1 className="title">Hello, React!</h1>
  </div>
);
export default  App;
```
  10. Write code in Index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

  11. Write css in App.css.
```
.container{
  padding: 2.5% 5%;
}
.title{
  text-align:center;
}
```

  12. Install webpack and resources `npm install --save-dev webpack webpack-cli webpack-dev-server style-loader  css-loader babel-loader`.
  13. Create file `webpack.config.js` and put the configuration.

```
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/Index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
   // contentBase
    static : {
      directory : path.join(__dirname, "public/")
    },
    port: 3000,
    // publicPath
    devMiddleware:{
       publicPath: "https://localhost:3000/dist/",
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}

```
  14. Open package.json and add following into scripts.

```
"dev": "npx webpack-dev-server --mode development",
"build": "npx webpack --mode development",
```
  15. Run `npm run dev` to compile the code and see the effect at localhost:3000 in browser.
  16. Run `npm run build` for build the react application with all resoureces.

## Resoureces
  -
## Changelog
  - [1.0.0] 2022-09-15
    - ADDED: Setup the react application from scratch.
    - ADDED: Use of Redux library for state management.
