const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './script.js', // Основной JS файл
  output: {
    filename: 'bundle.js', // Оптимизированный выходной JS файл
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
    clean: true, // Очищает папку dist перед каждой сборкой
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Правило для CSS файлов
        use: ['style-loader', 'css-loader'], // Загрузчики для CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Указываем исходный HTML файл
    }),
  ],
  mode: 'production', // Оптимизация кода для продакшена
};
