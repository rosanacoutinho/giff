const proxy = [

  {
    context: ['/api'],
    target: 'http://192.168.15.6:8080/signo-service/signo?nascimento=18/07/1964',
    secure: false,
    pathRewrite: {'^/api' : ''}
  }
];

module.exports = proxy;