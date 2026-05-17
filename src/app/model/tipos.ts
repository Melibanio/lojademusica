export interface Produto {
  id?: number;
  nome: string;
  categoria: string;
  preco: number;
  estoque: number;
}

export interface Admin {
  id?: number;
  nome: string;
  email: string;
  senha: string;
}
