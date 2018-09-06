module.exports.index = function(application, req, res) {
  res.render('index', {validacao: {}});
};

module.exports.autenticar = function(application, req, res) {
  let dadosForm = req.body;

  req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
  req.assert('senha', 'Senha não pode ser vazia').notEmpty();

  let erros = req.validationErrors();

  if (erros) {
    res.render("index", {validacao:erros});
    return
  }

  let connection = application.config.dbConnection;
  let UsuariosDAO = new application.app.models.UsuariosDAO(connection)

  UsuariosDAO.autenticar(dadosForm, req, res);

  // res.send('ta tudo ok para a sessão');
};
