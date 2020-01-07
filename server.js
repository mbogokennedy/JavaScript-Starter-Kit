import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.dev.config';

const compiler = webpack(config);

const port = process.env.PORT || 3000;
const app = express();
app.use(express.static(path.join(__dirname, './src/public')));


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: '/'
}));

app.use(webpackHotMiddleware(compiler));

app.use('*', (req, res, next) => {
  const filename = path.join(compiler.outputPath, './src/views/index.html');
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});


app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server running on port ${port}`);
  }
});
