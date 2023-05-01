import classnames from 'classnames';

export function BaseHexagon(props: {
  className?: string;
  center: { x: number; y: number };
  sideLength: number;
}) {
  const { className, sideLength, center } = props;

  const left = center.x - sideLength;
  const top = center.y - sideLength * 0.866;
  return (
    <div
      className={classnames(className)}
      style={{
        backgroundColor: 'gray',
        clipPath: 'polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%)',
        position: 'absolute',
        left: `${left}px`,
        top: `${top}px`,
        width: `${sideLength * 2}px`,
        height: `${sideLength * 1.732}px`,
      }}
    />
  );
}
