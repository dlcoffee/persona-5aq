import quizData from '../../quizData'

export default function handler(req, res) {
  const {
    query: { input },
    method,
  } = req

  switch (method) {
    case 'GET':
      const searchableInput = input ? input.toLowerCase() : ''
      const matches = quizData.filter((quiz) => {
        const { question, answer } = quiz

        // simple logic for now. thinking pg eventually.
        return (
          question.toLowerCase().includes(searchableInput) ||
          answer.toLowerCase().includes(searchableInput)
        )
      })
      res.status(200).json(matches)
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
