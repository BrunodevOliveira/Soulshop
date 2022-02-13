const Produto = require("../models/Produto");

class ProdutoController {
  static async paginaProdutos(req, res) {
    let query = {};
    const { nomeProduto } = req.query;

    if (nomeProduto) {
      //$options: 'i'--> Ignora MAIUSCULA E MINUSCULA
      query = { name: { $regex: `${nomeProduto}`, $options: "i" } };
    }

    const produtos = await Produto.find(query).lean();

    //Posso enviar dados para a página "produtos". basta passar entre { dados aqui }
    res.render("produtos", { produtos, nomeProduto });
  }

  static async paginaAdicionarProduto(req, res) {
    res.render("add_produto");
  }

  static async addProduto(req, res) {
    const { name, price, description, quantity, category } = req.body;
    const produto = Produto({ name, price, description, quantity, category }); //Monta o Objt
    await produto.save(); //Salva no BD

    res.redirect("/produtos"); //Redireciona para essa rota
  }

  static async addAvaliacao(req, res) {
    const { id, avaliationAv, avaliationGrade } = req.body;

    await Produto.findByIdAndUpdate(id, {
      $push: { avaliation: { av: avaliationAv, grade: avaliationGrade } },
    });
    res.redirect(`/produtos/${id}`);
  }

  static async produtoCommentDelete(req, res) {
    const { comment_id, id } = req.body;
    console.log("comment " + comment_id);
    console.log("id " + id);
    await Produto.updateOne(
      { _id: id },
      { $pull: { avaliation: { _id: comment_id } } }
    );

    res.redirect(`/produtos/${id}`);
  }

  static async produtoCommentEdit(req, res) {
    const { id, comment_id, editAvaliationAv, editAvaliationGrade } = req.body;
    const i = `avaliation.${comment_id}`
    console.log(i)

    await Produto.findOneAndUpdate(
      {"_id": id},
      {$set: {[i] : {av: editAvaliationAv, grade: editAvaliationGrade}}}
    )
    

    res.redirect(`/produtos/${id}`)

  }

  static async paginaEditProduto(req, res) {
    const { id } = req.params;
    const produto = await Produto.findById(id).lean();

    res.render("editar_produto", { produto });
  }

  static async editProduto(req, res) {
    const { id, name, price, description, quantity, category } = req.body;

    await Produto.findByIdAndUpdate(id, {
      name,
      price,
      description,
      quantity,
      category,
    });

    res.redirect("/produtos");
  }

  static async deleteProduto(req, res) {
    const { id } = req.body;

    await Produto.findByIdAndDelete(id);
    res.redirect("/produtos");
  }

  static async paginaProduto(req, res) {
    const { id } = req.params;
    const produto = await Produto.findById(id).lean();
    console.log(produto);

    res.render("pagina_produto", { produto });
  }
}

module.exports = ProdutoController;
