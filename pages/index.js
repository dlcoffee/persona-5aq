import Head from 'next/head'
import { useState } from 'react'

export default function Index() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const runSearch = async (event) => {
    event.preventDefault()

    const res = await fetch(`/api/search?input=${search}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })

    const response = await res.json()
    setResults(response)
  }

  return (
    <div>
      <Head>
        <title>Persona 5AQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form onSubmit={runSearch}>
          <label htmlFor="search">fuzzy search:</label>

          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={handleChange}
          />

          <input type="submit" value="submit" />
        </form>

        <div>
          {results.length > 0 && (
            <ul>
              {results.map((result, index) => (
                <li key={index}>
                  {result.question} | {result.answer}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <footer>footer</footer>
    </div>
  )
}
