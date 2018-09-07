module.exports.jogo = function(application, req, res) {
  if (req.session.autorizado !== true) {
    res.send('Usuário precisa fazer o login');
    return
  }

  let usuario = req.session.usuario;
  let casa = req.session.casa
  let connection = application.config.dbConnection;
  let JogoDAO = new application.app.models.JogoDAO(connection);

  JogoDAO.iniciaJogo(res, usuario, casa);
};


module.exports.sair = function(application, req, res) {
  req.session.destroy(function(err){
    res.render('index', {validacao:{}})
  });
};

module.exports.suditos = function(application, req, res) {
  res.render('aldeoes', {validacao:{}});
};

module.exports.pergaminhos = function(application, req, res) {
  res.render('pergaminhos', {validacao:{}});
};
