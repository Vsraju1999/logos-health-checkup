import { Tag } from 'antd';
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  CheckCircleFilled,
} from '@ant-design/icons';

const statusMeta = {
  normal: { color: 'success', label: 'Normal', icon: <CheckCircleFilled /> },
  high: { color: 'error', label: 'High', icon: <ArrowUpOutlined /> },
  low: { color: 'warning', label: 'Low', icon: <ArrowDownOutlined /> },
};

export default function MetricCard({ title, value, unit, status, range }) {
  const s = statusMeta[status] || statusMeta.normal;
  return (
    <div className="metric-card">
      <div className="metric-card__top">
        <div className="metric-card__title">{title}</div>
        <Tag color={s.color} icon={s.icon}>
          {s.label}
        </Tag>
      </div>
      <div className="metric-card__value">
        {value}
        <span className="metric-card__unit">{unit}</span>
      </div>
      <div className="metric-card__meta">Reference: {range} {unit}</div>
    </div>
  );
}
