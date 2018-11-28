const CARROS = ["Mistubishi", "Ferrari", "Lambo", "Renault"];
const CIDADES = ["Rio de Janeiro", "Sao Paulo", "Amazonas", "Rio Branco"];
const CORES = ["Verde", "Branco", "Preto", "Vermelho"];
const ARRAYCOMCAMPOS = [
  {
    valores: CARROS,
    key: "tipoOferta",
    display: "Tipo de Oferta",
    tipoDeInput: "SELECT"
  },
  {
    valores: CIDADES,
    key: "lugares",
    display: "Cidades",
    tipoDeInput: "SELECT"
  },
  {
    valores: CORES,
    key: "cor",
    display: "Cores",
    tipoDeInput: "SELECT"
  },
  {
    key: "porcentagemCor",
    display: "Intensidade cor",
    tipoDeInput: "PORCENTAGEM"
  },
  {
    key: "porcentagemMotor",
    display: "Porcentagem motor",
    tipoDeInput: "PORCENTAGEM"
  },
  {
    key: "outro",
    display: "Outros",
    tipoDeInput: "INPUT"
  },
  {
    key: "observacao",
    display: "Observacoes",
    tipoDeInput: "INPUT"
  }
];

export default ARRAYCOMCAMPOS;
