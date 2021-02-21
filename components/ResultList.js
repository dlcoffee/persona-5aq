import { Children } from 'react'
import styles from './ResultList.module.css'

export default function ResultList({ children }) {
  return <ul className={styles.list}>{children}</ul>
}
