import { BaseHexagon } from '@/components/Hexagon';
import styles from './PlayBoard.module.css';

export function PlayBoard() {
  return (
    <div className={styles.playBoard}>
      <BaseHexagon center={{ x: 100, y: 100 }} sideLength={30} />
      <BaseHexagon center={{ x: 100, y: 160 }} sideLength={30} />
      <BaseHexagon center={{ x: 100, y: 220 }} sideLength={30} />
      <BaseHexagon center={{ x: 152, y: 130 }} sideLength={30} />
      <BaseHexagon center={{ x: 152, y: 190 }} sideLength={30} />
      <BaseHexagon center={{ x: 204, y: 160 }} sideLength={30} />
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
