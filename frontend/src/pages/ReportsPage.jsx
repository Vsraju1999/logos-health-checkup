import { useState } from 'react';
import {
  Upload,
  Table,
  Tag,
  Space,
  Button,
  Popconfirm,
  App,
  Empty,
} from 'antd';
import {
  InboxOutlined,
  EyeOutlined,
  DownloadOutlined,
  DeleteOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { reports as mockReports } from '../utils/mockData.js';

const { Dragger } = Upload;

const statusColors = { ready: 'green', processing: 'blue', failed: 'red' };

const formatSize = (b) =>
  b > 1024 * 1024 ? `${(b / (1024 * 1024)).toFixed(1)} MB` : `${(b / 1024).toFixed(0)} KB`;

export default function ReportsPage() {
  const [reports, setReports] = useState(mockReports);
  const navigate = useNavigate();
  const { message } = App.useApp();

  const uploadProps = {
    name: 'file',
    multiple: false,
    accept: '.pdf',
    beforeUpload: (file) => {
      // Mock upload: prepend a new row.
      const newReport = {
        id: `r-${Date.now()}`,
        original_name: file.name,
        lab_name: 'Pending detection',
        report_date: new Date().toISOString().slice(0, 10),
        file_size: file.size,
        status: 'processing',
        tests: 0,
      };
      setReports((prev) => [newReport, ...prev]);
      message.success(`${file.name} uploaded. Extracting values...`);

      setTimeout(() => {
        setReports((prev) =>
          prev.map((r) =>
            r.id === newReport.id ? { ...r, status: 'ready', tests: 6 } : r
          )
        );
        message.success(`${file.name} processed`);
      }, 2500);

      return false; // prevent actual upload
    },
    showUploadList: false,
  };

  const columns = [
    {
      title: 'Report',
      dataIndex: 'original_name',
      render: (name) => (
        <Space>
          <FileTextOutlined style={{ color: '#e53935', fontSize: 18 }} />
          <span style={{ fontWeight: 500 }}>{name}</span>
        </Space>
      ),
    },
    { title: 'Lab', dataIndex: 'lab_name' },
    { title: 'Date', dataIndex: 'report_date' },
    {
      title: 'Size',
      dataIndex: 'file_size',
      render: (b) => formatSize(b),
    },
    {
      title: 'Tests',
      dataIndex: 'tests',
      render: (n) => (n > 0 ? `${n} extracted` : '—'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (s) => <Tag color={statusColors[s]}>{s.toUpperCase()}</Tag>,
    },
    {
      title: 'Actions',
      render: (_, r) => (
        <Space>
          <Button
            type="link"
            icon={<EyeOutlined />}
            onClick={() => navigate(`/reports/${r.id}`)}
            disabled={r.status !== 'ready'}
          >
            View
          </Button>
          <Button
            type="link"
            icon={<DownloadOutlined />}
            onClick={() => message.info('Download (mock)')}
          >
            Download
          </Button>
          <Popconfirm
            title="Delete this report?"
            description="This action cannot be undone."
            okText="Delete"
            okButtonProps={{ danger: true }}
            onConfirm={() => {
              setReports((prev) => prev.filter((x) => x.id !== r.id));
              message.success('Report deleted');
            }}
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="stack-lg">
      <div className="page-header">
        <div>
          <h2>Reports</h2>
          <p>Upload PDF lab reports and let us extract the values automatically.</p>
        </div>
      </div>

      <Dragger {...uploadProps} style={{ background: '#fff', padding: 24 }}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined style={{ color: '#e53935' }} />
        </p>
        <p className="ant-upload-text" style={{ fontSize: 16 }}>
          Click or drag a PDF report here to upload
        </p>
        <p className="ant-upload-hint">
          Max 10 MB. Supported labs: Apollo, Dr. Lal PathLabs, Metropolis, Thyrocare and more.
        </p>
      </Dragger>

      <div style={{ background: '#fff', padding: 4, borderRadius: 12 }}>
        <Table
          rowKey="id"
          dataSource={reports}
          columns={columns}
          pagination={{ pageSize: 8 }}
          locale={{
            emptyText: (
              <Empty description="No reports uploaded yet" style={{ padding: 40 }} />
            ),
          }}
        />
      </div>
    </div>
  );
}
