import { Form, Input, Select, DatePicker, Button, Avatar, App, InputNumber } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { patient } from '../utils/mockData.js';

export default function ProfilePage() {
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const onFinish = (values) => {
    console.log('Profile save (mock):', values);
    message.success('Profile updated');
  };

  return (
    <div className="stack-lg">
      <div className="page-header">
        <div>
          <h2>Patient Profile</h2>
          <p>Keep this up to date — reference ranges depend on age and gender.</p>
        </div>
      </div>

      <div style={{ background: '#fff', padding: 24, borderRadius: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <Avatar size={72} style={{ background: '#e53935' }} icon={<UserOutlined />}>
            {patient.full_name[0]}
          </Avatar>
          <div>
            <div style={{ fontSize: 20, fontWeight: 600 }}>{patient.full_name}</div>
            <div style={{ color: '#6b7280' }}>Primary patient</div>
          </div>
        </div>

        <Form
          form={form}
          layout="vertical"
          initialValues={{
            ...patient,
            date_of_birth: dayjs(patient.date_of_birth),
          }}
          onFinish={onFinish}
          size="large"
          style={{ maxWidth: 720 }}
        >
          <Form.Item
            name="full_name"
            label="Full name"
            rules={[{ required: true, message: 'Enter your name' }]}
          >
            <Input />
          </Form.Item>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Form.Item name="date_of_birth" label="Date of birth" rules={[{ required: true }]}>
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
              <Select
                options={[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'other', label: 'Other' },
                ]}
              />
            </Form.Item>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
            <Form.Item name="blood_group" label="Blood group" rules={[{ required: true }]}>
              <Select
                options={['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((v) => ({
                  value: v,
                  label: v,
                }))}
              />
            </Form.Item>

            <Form.Item name="height_cm" label="Height (cm)">
              <InputNumber min={50} max={250} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="weight_kg" label="Weight (kg)">
              <InputNumber min={2} max={300} style={{ width: '100%' }} />
            </Form.Item>
          </div>

          <Button type="primary" htmlType="submit">
            Save changes
          </Button>
        </Form>
      </div>
    </div>
  );
}
