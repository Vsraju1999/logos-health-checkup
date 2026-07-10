import { Form, Input, Button, Checkbox, Divider, App } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import AuthShell from '../../components/auth/AuthShell.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { message } = App.useApp();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await login(values);
      message.success('Welcome back!');
      const to = location.state?.from?.pathname || '/dashboard';
      navigate(to, { replace: true });
    } catch {
      message.error('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell>
      <h1>Welcome back</h1>
      <p className="sub">Sign in to continue to your health dashboard.</p>

      <Form layout="vertical" onFinish={onFinish} requiredMark={false} size="large">
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
          rules={[{ required: true, message: 'Enter your password' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Enter password" />
        </Form.Item>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}
        >
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <Button type="primary" htmlType="submit" block loading={loading}>
          Sign In
        </Button>

        <Divider plain>or</Divider>

        <div style={{ textAlign: 'center' }}>
          New here? <Link to="/register">Create an account</Link>
        </div>
      </Form>
    </AuthShell>
  );
}
