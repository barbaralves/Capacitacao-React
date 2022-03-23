// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function numeroAleatorio(min = 1, max = 100000){
  return parseInt(Math.random() * (max- min)) + min
}

export default function handler(req, res) {
  res.status(200).json([
    {id: numeroAleatorio(), nome: 'Diário de Tom Riddle', filme: 2},
    {id: numeroAleatorio(), nome: 'Anel dos Gaunt', filme: 6},
    {id: numeroAleatorio(), nome: 'Medalhão de Sonserina', filme: 7.1},
    {id: numeroAleatorio(), nome: 'Taça de Lufa-Lufa', filme: 7.2},
    {id: numeroAleatorio(), nome: 'Diadema de Rowena Ravenclaw', filme: 7.2},
    {id: numeroAleatorio(), nome: 'Nagini', filme: 7.2},
    {id: numeroAleatorio(), nome: 'Harry Potter', filme: 7.2}
  ])
}
