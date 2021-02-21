const quizData = [
  {
    date: `April 12`,
    question: `Tell me what the Devil's Dictionary defined as the chief factor in the progress of the human race`,
    answer: 'Villains.',
  },
  {
    date: `April 19`,
    question: `Between A and B, which line seems longer?`,
    answer: `They're the same.`,
  },
  {
    date: `April 23`,
    question: `Between music, theatre, and chariot racing, which sport did Nero win when he participated in the Olympics?`,
    answer: `All of them.`,
  },
  {
    date: `April 25`,
    question: `What's that phrase originally meant to convey? "My country, right or wrong"`,
    answer: `You unquestioningly support it.`,
  },
  {
    date: `April 25`,
    question: `But the original meaning was different? So I guess it'd be something like...`,
    answer: `You have a duty to correct it.`,
  },
  {
    date: `April 27`,
    question: `Do you know the name of the theorem named after this number?`,
    answer: `The Four Color Theorem.`,
  },
  {
    date: `April 30`,
    question: `First off, the "wunder" part probably means...`,
    answer: `Wonder.`,
  },
  {
    date: `April 30`,
    question: `Next, the "kind" part. That's probably...`,
    answer: `Child.`,
  },
  {
    date: `April 30`,
    question: `So a "wunderkind" would be...`,
    answer: `A prodigy.`,
  },
]

export default function handler(req, res) {
  const {
    query: { input },
    method,
  } = req

  switch (method) {
    case 'GET':
      const matches = quizData.filter((quiz) => {
        const { question, answer } = quiz

        // simple logic for now. thinking pg eventually.
        return (
          question.toLowerCase().includes(input) ||
          answer.toLowerCase().includes(input)
        )
      })
      res.status(200).json(matches)
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
