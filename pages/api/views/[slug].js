export default async function handler(req, res) {
  try {
    const slug = req.query.slug.toString()

    if (req.method === 'POST') {
      // Without a database, just return a dummy increment
      return res.status(200).json({
        total: '1',
      })
    }

    if (req.method === 'GET') {
      // Without a database, return dummy count as 0
      return res.status(200).json({ total: '0' })
    }

    return res.status(405).json({ message: 'Method not allowed' })
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}
