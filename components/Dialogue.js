import styles from './Dialogue.module.css'

export default function Dialogue({ text, width = '100%' }) {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.content}>{text}</div>
      </div>
    </div>
  )
}
