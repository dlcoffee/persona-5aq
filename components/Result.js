import styles from './Result.module.css'

import Dialogue from './Dialogue'

export default function Result({ question, answer }) {
  return (
    <li className={styles.listItem}>
      <div style={{ width: '80%' }}>
        <Dialogue text={question} />
      </div>
      <div style={{ position: 'relative', left: '40%', width: '60%' }}>
        <Dialogue text={answer} />
      </div>
    </li>
  )
}
