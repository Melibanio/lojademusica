# Loja de Música - Angular CRUD

Projeto Integrador II - SENAC | Prof. Dr. Fernando T. Fernandes

## Instalação

```bash
npm install
```

> Se aparecer erro de dependências, use: `npm install --legacy-peer-deps`

## Como rodar (dois terminais separados)

**Terminal 1 — API (json-server):**
```bash
npm run api
```
Acesse: http://localhost:3000/produtos

**Terminal 2 — Angular:**
```bash
npm start
```
Acesse: http://localhost:4200

## Login padrão
- **E-mail:** admin@lojamusica.com  
- **Senha:** admin123

## Rotas
| URL | Descrição |
|-----|-----------|
| /home | Tela inicial |
| /login | Login |
| /produtos | Listagem de produtos |
| /produtos/novo | Cadastrar produto |
| /produtos/editar/:id | Editar produto |
