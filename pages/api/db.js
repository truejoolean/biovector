import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

export default async function (req, res) {
	const prisma = new PrismaClient({ log: ["query"] })

	try {
		const data = await prisma.post.findMany()
		res.status(200);
		res.json({ data });
	} catch (e) {
		res.status(500)
		res.json({ error: "Unable to fetch sightings" })
	} finally {
		await prisma.disconnect()
	}
}