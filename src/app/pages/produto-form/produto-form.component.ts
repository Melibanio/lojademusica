import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../model/tipos';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './produto-form.component.html',
  styleUrl: './produto-form.component.css'
})
export class ProdutoFormComponent implements OnInit {
  titulo = 'Cadastro de Produto';
  modoEdicao = false;
  idEdicao: number | null = null;
  mensagem = '';
  mensagemTipo = '';

  produto: Produto = {
    nome: '',
    categoria: '',
    preco: 0,
    estoque: 0
  };

  categorias = ['Cordas', 'Teclas', 'Percussão', 'Sopro', 'Eletrônicos', 'Acessórios'];

  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.modoEdicao = true;
      this.idEdicao = Number(id);
      this.titulo = 'Editar Produto';
      this.service.buscarPorId(this.idEdicao).subscribe({
        next: (dados) => {
          this.produto = dados;
        },
        error: () => {
          this.mensagem = 'Produto não encontrado.';
          this.mensagemTipo = 'erro';
        }
      });
    }
  }

  salvar(): void {
    if (!this.produto.nome || !this.produto.categoria || this.produto.preco <= 0) {
      this.mensagem = 'Preencha todos os campos obrigatórios corretamente.';
      this.mensagemTipo = 'erro';
      return;
    }

    if (this.modoEdicao && this.idEdicao) {
      this.service.atualizar(this.idEdicao, this.produto).subscribe({
        next: () => {
          this.mensagem = 'Produto atualizado com sucesso!';
          this.mensagemTipo = 'sucesso';
          setTimeout(() => this.router.navigate(['/produtos']), 1500);
        },
        error: () => {
          this.mensagem = 'Erro ao atualizar produto.';
          this.mensagemTipo = 'erro';
        }
      });
    } else {
      this.service.cadastrar(this.produto).subscribe({
        next: () => {
          this.mensagem = 'Produto cadastrado com sucesso!';
          this.mensagemTipo = 'sucesso';
          setTimeout(() => this.router.navigate(['/produtos']), 1500);
        },
        error: () => {
          this.mensagem = 'Erro ao cadastrar produto. Verifique se o json-server está rodando.';
          this.mensagemTipo = 'erro';
        }
      });
    }
  }
}
