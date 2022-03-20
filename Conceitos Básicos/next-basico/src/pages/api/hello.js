// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const nomes = (req, res) => {
  res.status(200).json([
    { name: 'Hermione Granger' },
    { name: 'Rony Weasley' },
    { name: 'Harry Potter' },
    { name: 'Draco MAlfoy' }
  ])
}

export default nomes 
