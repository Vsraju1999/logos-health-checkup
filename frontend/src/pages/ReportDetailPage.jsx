import { Button, Descriptions, Space, Table, Tag } from 'antd';
import { ArrowLeftOutlined, DownloadOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { reportDetail } from '../utils/mockData.js';

const statusColors = { normal: 'green', high: 'red', low: 'gold' };

export default function ReportDetailPage() {
  const navigate = useNavigate();
  useParams();

  const columns = [
    { title: 'Test', dataIndex: 'test_name' },
    { title: 'Value', dataIndex: 'value' },
    { title: 'Unit', dataIndex: 'unit' },
    {
      title: 'Reference range',
      render: (_, r) => `${r.ref_low} – ${r.ref_high}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (s) => <Tag color={statusColors[s]}>{s.toUpperCase()}</Tag>,
    },
  ];

  return (
    <div className="stack-lg">
      <div className="page-header">
        <Space>
          <Button icon={<ArrowLeftOutlined />} onClick={() => navigate('/reports')}>
            Back
          </Button>
          <div>
            <h2 style={{ marginBottom: 0 }}>{reportDetail.original_name}</h2>
            <p>Extracted lab values from your report.</p>
          </div>
        </Space>
        <Button type="primary" icon={<DownloadOutlined />}>
          Download PDF
        </Button>
      </div>

      <div style={{ background: '#fff', padding: 20, borderRadius: 12 }}>
        <Descriptions column={{ xs: 1, sm: 2, md: 3 }}>
          <Descriptions.Item label="Lab">{reportDetail.lab_name}</Descriptions.Item>
          <Descriptions.Item label="Report date">{reportDetail.report_date}</Descriptions.Item>
          <Descriptions.Item label="Tests extracted">{reportDetail.results.length}</Descriptions.Item>
        </Descriptions>
      </div>

      <div style={{ background: '#fff', padding: 4, borderRadius: 12 }}>
        <Table
          rowKey="test_name"
          dataSource={reportDetail.results}
          columns={columns}
          pagination={false}
        />
      </div>
    </div>
  );
}
