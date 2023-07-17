import { NextApiRequest, NextApiResponse } from 'next'

// Endpoint para o envio do formulário de contato
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Aqui você pode adicionar a lógica para processar os dados recebidos do formulário
    // Neste exemplo, só estamos retornando os dados recebidos como resposta
    const { name, email, message } = req.body
    const data = { name, email, message }
    return res.status(200).json(data)
  }

  return res.status(405).end() // Método HTTP não permitido
}
