import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await NextCors(req, res, {
    methods: ['GET', 'POST'],
    origin: '*',
    optionsSuccessStatus: 200
  });

  if (req.method === 'POST') {
    const { pulso, spo2 } = req.body;

    if (typeof pulso !== 'number' || typeof spo2 !== 'number') {
      return res.status(400).json({ error: 'Datos inválidos: pulso y spo2 deben ser números.' });
    }

    try {
      const registro = await prisma.registro.create({
        data: { pulso, spo2 }
      });
      return res.status(200).json(registro);
    } catch (error) {
      console.error('Error al guardar datos:', error);
      return res.status(500).json({ error: 'Error al guardar los datos' });
    }
  }

  if (req.method === 'GET') {
    try {
      const registros = await prisma.registro.findMany({
        orderBy: { fecha: 'desc' }
      });
      return res.status(200).json(registros);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener los datos' });
    }
  }

  return res.status(405).json({ error: 'Método no permitido' });
}
