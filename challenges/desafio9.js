db.produtos.find({
  valoresNutricionais: {
    $elemMatch: {
      tipo: { $eq: "calorias" },
      quantidade: { $lt: 500 },
    },
  },
},
{
  _id: 0,
  nome: 1,
});
