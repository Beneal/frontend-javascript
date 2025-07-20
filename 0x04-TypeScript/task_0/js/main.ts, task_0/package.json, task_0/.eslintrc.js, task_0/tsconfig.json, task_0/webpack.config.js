<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Table</title>
</head>
<body>
  <script src="main.js"></script>
</body>
</html>


const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  mode: 'development',
  devtool: 'inline-source-map'
};


{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "lib": ["DOM", "ES6"],
    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "Node",
    "outDir": "./dist",
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}

{
  "name": "typescript-webpack-students",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack",
    "start": "webpack serve --open"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "webpack": "^5.0.0",
    "webpack-cli": "^5.0.0",
    "webpack-dev-server": "^4.0.0",
    "ts-loader": "^9.0.0",
    "html-webpack-plugin": "^5.0.0"
  }
}

