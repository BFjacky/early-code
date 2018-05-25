module.exports = app => {
  app.get('/snake', 'snake.index');
  app.get('/snake/save','snake.saveForm');
  app.get('/snake/rank','snake.getRank');
  app.get('/bangbang','bangbang.index');
  app.get('/bangbang/add','bangbang.add');
  app.get('/bangbang/init','bangbang.init');
  app.get('/bangbang/updateTimely','bangbang.updateTimely');
  app.get('/','home.index')
};
