import { HeartFilled } from '@ant-design/icons';

export default function Brand({ light = false }) {
  return (
    <div className="brand" style={{ color: light ? '#fff' : '#111' }}>
      <span className="brand__logo">
        <HeartFilled />
      </span>
      <span>Logos Health</span>
    </div>
  );
}
