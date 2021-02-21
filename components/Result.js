import styles from './Result.module.css'

import Dialogue from './Dialogue'

export default function Result({ question, answer }) {
  return (
    <li className={styles.listItem}>
      <div style={{ width: '90%' }}>
        <Dialogue text={question} />
      </div>
      <div style={{ position: 'relative', left: '50%', width: '50%' }}>
        <Dialogue text={answer} />
      </div>
    </li>
  )
}
