export default interface Itens {
  id: number;
  nome: string;
  categoriaId: number;
  categoria?: {
    id: number;
    nome: string;
  };
  criadoEm: string; // ou Date se você preferir manipular como objeto de data
}
