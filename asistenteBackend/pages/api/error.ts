import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

let errores: { mensaje: string; fecha: string }[] = [];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, {
    methods: ['GET', 'POST'],
    origin: '*',
    optionsSuccessStatus: 200
  });

  if (req.method === 'POST') {
    const { mensaje } = req.body;

    if (!mensaje || typeof mensaje !== 'string') {
      return res.status(400).json({ error: 'Mensaje de error inválido' });
    }

    const errorObj = {
      mensaje,
      fecha: new Date().toISOString()
    };
    errores.push(errorObj);
    return res.status(200).json({ message: 'Error registrado', error: errorObj });
  }

  if (req.method === 'GET') {
    return res.status(200).json(errores);
  }

  return res.status(405).json({ error: 'Método no permitido' });
}
