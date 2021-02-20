const data = [{ question: 'what is the meaning of life?', answer: '42' }]

export default function handler(req, res) {
  const {
    query: { input },
    method,
  } = req

  switch (method) {
    case 'GET':
      const matches = data.filter(() => true) // TODO: simple match logic
      res.status(200).json(matches)
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
