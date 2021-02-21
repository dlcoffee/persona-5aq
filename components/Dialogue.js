import styles from './Dialogue.module.css'

export default function Dialogue({ text, caption, speakerPosition = 'left' }) {
  return (
    <div className={styles.dialogue}>
      {caption && (
        <div className={styles.captionOuter}>
          <div className={styles.captionInner}>
            <div className={styles.captionContent}>{caption}</div>
          </div>
        </div>
      )}
      <div
        className={[
          styles.outer,
          speakerPosition === 'left'
            ? styles.speakerLeftSkew
            : styles.speakerRightSkew,
        ].join(' ')}
      >
        <div className={styles.inner}>
          <div
            className={[
              styles.content,
              speakerPosition === 'left'
                ? styles.speakerLeftUnskew
                : styles.speakerRightUnskew,
            ].join(' ')}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  )
}
