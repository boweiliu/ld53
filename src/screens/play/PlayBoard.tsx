import styles from './PlayBoard.module.css';

export function PlayBoard() {
  return (
    <div className={styles.playBoard}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
        }}
      >
        top left
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40px',
          height: '40px',
        }}
      >
        top right
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '40px',
          height: '40px',
        }}
      >
        bottom right
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '40px',
          height: '40px',
        }}
      >
        bottom left
      </div>
    </div>
  );
}
