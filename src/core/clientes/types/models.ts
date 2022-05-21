export type Cliente = {
  id: number
  nome: string
  email: string
  telefone: string
  tipo: "FISICA" | "JURIDICA"
  enderecos: Enderecos[]
}

export type Enderecos = {
  id: number
  cliente_id: number
  endereco: string
  bairro: string
  cidade: string
  cep: string
}