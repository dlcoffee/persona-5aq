import Head from 'next/head'
import { useState } from 'react'

import Result from '../components/Result'

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
            <ul style={{ margin: 0, padding: 0 }}>
              {results.map((result, index) => (
                <Result
                  key={index}
                  question={result.question}
                  answer={result.answer}
                />
              ))}
            </ul>
          )}
        </div>
      </main>

      <footer>footer</footer>
    </div>
  )
}
