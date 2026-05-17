import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../model/tipos';

@Component({
  selector: 'app-produto-listagem',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './produto-listagem.component.html',
  styleUrl: './produto-listagem.component.css'
})
export class ProdutoListagemComponent implements OnInit {
  listaProdutos: Produto[] = [];
  mensagem = '';
  mensagemTipo = '';
  carregando = true;

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.carregando = true;
    this.service.listar().subscribe({
      next: (dados) => {
        this.listaProdutos = dados;
        this.carregando = false;
      },
      error: () => {
        this.mensagem = 'Erro ao carregar produtos. Verifique se o json-server está rodando na porta 3000.';
        this.mensagemTipo = 'erro';
        this.carregando = false;
      }
    });
  }

  excluir(id: number | undefined): void {
    if (!id) return;
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.service.excluir(id).subscribe({
        next: () => {
          this.mensagem = 'Produto excluído com sucesso!';
          this.mensagemTipo = 'sucesso';
          this.carregarProdutos();
          setTimeout(() => this.mensagem = '', 3000);
        },
        error: () => {
          this.mensagem = 'Erro ao excluir produto.';
          this.mensagemTipo = 'erro';
        }
      });
    }
  }
}
