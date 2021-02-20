import styles from './Result.module.css'

export default function Result({ question, answer }) {
  return (
    <li className={styles.listItem}>
      {question} | {answer}
    </li>
  )
}
