# PastryUI

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&style=for-the-badge)
![MaterialUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white&style=for-the-badge)

## Descrição do projeto
PastryUI é uma biblioteca de componentes React baseada no Material UI (MUI), criada para facilitar a construção de cardápios de confeitaria de forma prática, bonita e reutilizável.

Ela foi pensada inicialmente para atender as necessidades da confeitaria da minha mãe 💕, mas pode ser facilmente adaptada para qualquer negócio que precise de um cardápio simples, elegante e funcional.

## Funcionalidades
A principal funcionalidade da PastryUI é o componente `CakeFactory`, responsável por gerar um cardápio completo e customizável a partir dos objetos tipados `CakeBoardData[]` e `Reference`.

## Tipos
### CakeBoardData
Refere-se a uma seção do cardápio, composto pelo nome da seção, os tamanhos dos bolos (em formato redondo e retangular) e os sabores.

```ts
type CakeBoardData = {
  name?: string;
  flavors?: string[];
  roundFormats?: CakeFormat[];
  squareFormats?: CakeFormat[];
}
```

### CakeFormat
Este tipo encapsula o tamanho do bolo e o seu respectivo preço.

```ts
type CakeFormat = {
  size: string;
  price: Price;
}
```

### Price
Este tipo representa o valor do formato de bolo e em qual moeda.

```ts
type Price = {
  value: number;
  currency?: Currency;
};
```

#### Currency
Currency é um enum que reúne algumas moedas e seus formatos para exibição no componente do formato de bolo.

```ts
enum Currency {
  BRL = 'R$',
  USD = '$',
  EUR = '€',
  GBP = '£',
  JPY = '¥',
}
```

### Reference
O tipo Reference representa uma tabela de referência dos tamanhos de bolo, que permite a inclusão de múltiplos cabeçalhos e valores, assim como um nome para a tabela.

```ts
type Reference = {
  name?: string;
  headers: ReferenceHeader[];
  values: string[][];
  disclaimer?: string;
}
```

#### ReferenceHeader
O tipo de ReferenceHeader refere-se a cada cabeçalho da tabela de referências, incluindo o nome da coluna, uma nota de rodapé e o peso da nota (quantidade de asteriscos a ser usada como índice da nota de rodapé).

```ts
type ReferenceHeader = {
  name: string;
  footnote?: string;
  footnoteWeight?: number;
}
```

## Exemplo de uso
<details>
<summary> Ver exemplo completo de uso do CakeFactory</summary>

```ts
import { CakeFactory, Currency } from "pastry-ui";

const cakeboards = [
  {
    name: "Bolos premium",
    flavors: [
      "Bolo de KitKat", "Bolo Morango Folhado", "Bolo de Ninho com Nutella"
    ],
    roundFormats: [
      { size: "P", price: { value: 145, currency: Currency.BRL } },
      { size: "M", price: { value: 190, currency: Currency.BRL } },
      { size: "G", price: { value: 240, currency: Currency.BRL } },
    ],
    squareFormats: [
      { size: "40 fatias", price: { value: 260, currency: Currency.BRL } },
      { size: "50 fatias", price: { value: 275, currency: Currency.BRL } },
      { size: "60 fatias", price: { value: 300, currency: Currency.BRL } }
    ]
  }
];

const reference = {
  name: "Tamanhos e medidas",
  headers: [
    { name: "Forma" },
    { name: "Diâmetro" },
    { name: "Fatias" },
    {
      name: "Peso",
      footnoteWeight: 1,
      footnote: "O peso pode variar de acordo com o sabor"
    }
  ],
  values: [
    ["PP", "15 cm", "10 a 12 fatias", "1,5 kg a 1,7 kg"],
    ["P", "17 cm", "15 a 17 fatias", "1,8 kg a 2 kg"],
    ["M", "20 cm", "20 a 24 fatias", "2,5 kg a 2,9 kg"],
    ["G", "27 cm", "30 a 34 fatias", "3,5 kg a 3,9 kg"]
  ],
  disclaimer: "NÃO trabalhamos por Kg"
}

// Exemplo de uso do componente
export default function Menu() {
  return (
    <CakeFactory
      name="Sabores de bolo"
      cakeBoards={cakeboards}
      reference={reference}
    />
  );
}
```
</details>

## Desenvolvimento
### Tecnologias utilizadas
- **Linguagem**: TypeScript;
- **UI Framework**: Material UI.

### Exemplo em produção
Você pode ver a PastryUI sendo usada no site da confeitaria da minha mãe:

👉 [https://rebeca-ferreira-confeitaria.web.app/](https://rebeca-ferreira-confeitaria.web.app/)

## Instalação
Você pode instalar a PastryUI diretamente via Git:

```bash
npm install git+https://github.com/davidmrtns/pastry-ui.git
```

ou, se estiver usando Yarn:

```bash
yarn add git+https://github.com/davidmrtns/pastry-ui.git
```

Certifique-se de que seu projeto está usando **TypeScript** e **React**.

> ⚠️ Esta biblioteca depende do MUI (@mui/material), então lembre-se de adicioná-lo ao seu projeto, caso ainda não tenha feito isso.

## Autor
- David Martins - [@davidmrtns](https://github.com/davidmrtns/)
