// Object.preventExtensions (Não vai permitir que sejam adicionados novos
// atributos no objeto, mas permitirá a alteração e/ou a exclusão de atributos)

const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promoção"
});

console.log("Extensível:", Object.isExtensible(produto));

produto.nome = "Borracha";
produto.descricao = "Borracha escolar branca";
delete produto.tab;
console.log(produto);

// Object.seal (Não vai permitir a inclusão ou a exclusão de atributos do
// objeto, mas vai permitir a alteração dos valores dos atributos existentes)
const pessoa = { nome: "Juliana", idade: 35 };
Object.seal(pessoa);
console.log("Selado:", Object.isSealed(pessoa));

pessoa.sobrenome = "Silva";
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze = selado + valores constantes
