import Head from 'next/head'
import { useState } from 'react'

import styles from '../styles/Index.module.css'

import Container from '../components/Container'
import ResultList from '../components/ResultList'
import Result from '../components/Result'
import Input from '../components/Input'

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
    <Container>
      <Head>
        <title>Persona 5AQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.formContainer}>
          <h1>Persona 5AQ</h1>

          <form onSubmit={runSearch}>
            {/* <label htmlFor="search">fuzzy search:</label> */}

            <Input
              type="text"
              id="search"
              name="search"
              value={search}
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
          </form>
        </div>

        <div>
          {results.length > 0 && (
            <ResultList>
              {results.map((result, index) => (
                <Result
                  key={index}
                  question={result.question}
                  answer={result.answer}
                />
              ))}
            </ResultList>
          )}
        </div>
      </main>
    </Container>
  )
}
