db.produtos.updateOne(
  {
    nome: { $eq: "Big Mac" },
  },
  { $set: { ultimaModificacao: new Date() } },
  { upsert: true },
);
db.produtos.find({
    ultimaModificacao: { $exists: true },
},
{
  _id: 0,
  nome: 1,
});
