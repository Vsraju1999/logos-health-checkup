import { Form, Input, Button, App } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthShell from '../../components/auth/AuthShell.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const { message } = App.useApp();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await register(values);
      message.success('Account created!');
      navigate('/dashboard', { replace: true });
    } catch {
      message.error('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell>
      <h1>Create your account</h1>
      <p className="sub">Start tracking your health metrics in one place.</p>

      <Form layout="vertical" onFinish={onFinish} requiredMark={false} size="large">
        <Form.Item
          name="full_name"
          label="Full name"
          rules={[{ required: true, message: 'Enter your name' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Jane Doe" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Enter your email' },
            { type: 'email', message: 'Enter a valid email' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="you@example.com" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: 'Enter a password' },
            { min: 8, message: 'At least 8 characters' },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="At least 8 characters" />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm password"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Confirm your password' },
            ({ getFieldValue }) => ({
              validator(_, v) {
                if (!v || getFieldValue('password') === v) return Promise.resolve();
                return Promise.reject(new Error('Passwords do not match'));
              },
            }),
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Repeat password" />
        </Form.Item>

        <Button type="primary" htmlType="submit" block loading={loading}>
          Create Account
        </Button>

        <div style={{ textAlign: 'center', marginTop: 16 }}>
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </Form>
    </AuthShell>
  );
}
