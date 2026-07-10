import { Row, Col, Button, Space } from 'antd';
import { DownloadOutlined, FilterOutlined } from '@ant-design/icons';
import { useAuth } from '../context/AuthContext.jsx';
import MetricCard from '../components/dashboard/MetricCard.jsx';
import TrendChart from '../components/dashboard/TrendChart.jsx';
import BarComparison from '../components/dashboard/BarComparison.jsx';
import {
  metrics,
  hemoglobinTrend,
  cholesterolTrend,
  glucoseComparison,
} from '../utils/mockData.js';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="stack-lg">
      <div className="page-header">
        <div>
          <h2>Hello, {user?.full_name?.split(' ')[0] || 'there'} 👋</h2>
          <p>Here&apos;s a quick snapshot of your latest health metrics.</p>
        </div>
        <Space>
          <Button icon={<FilterOutlined />}>Last 12 months</Button>
          <Button type="primary" icon={<DownloadOutlined />}>
            Export Report
          </Button>
        </Space>
      </div>

      <div className="metric-grid">
        {metrics.map((m) => (
          <MetricCard key={m.code} {...m} />
        ))}
      </div>

      <Row gutter={[20, 20]}>
        <Col xs={24} lg={12}>
          <TrendChart
            title="Hemoglobin trend"
            data={hemoglobinTrend}
            lines={[
              { dataKey: 'value', name: 'Hemoglobin (g/dL)', color: '#e53935' },
            ]}
          />
        </Col>
        <Col xs={24} lg={12}>
          <TrendChart
            title="Cholesterol breakdown"
            data={cholesterolTrend}
            lines={[
              { dataKey: 'total', name: 'Total', color: '#1976d2' },
              { dataKey: 'ldl', name: 'LDL', color: '#ed6c02' },
              { dataKey: 'hdl', name: 'HDL', color: '#2e7d32' },
            ]}
          />
        </Col>
        <Col xs={24}>
          <BarComparison
            title="Blood glucose — fasting vs post-meal"
            data={glucoseComparison}
            bars={[
              { dataKey: 'fasting', name: 'Fasting', color: '#e53935' },
              { dataKey: 'postMeal', name: 'Post-meal', color: '#ffb74d' },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}
