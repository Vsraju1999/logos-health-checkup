import { Form, Input, Button, App, Result } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AuthShell from '../../components/auth/AuthShell.jsx';

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { message } = App.useApp();

  const onFinish = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);
    setSent(true);
    message.success('Reset link sent (mock)');
  };

  if (sent) {
    return (
      <AuthShell>
        <Result
          status="success"
          title="Check your inbox"
          subTitle="If an account exists for that email, we have sent a password reset link."
          extra={<Link to="/login"><Button type="primary">Back to sign in</Button></Link>}
        />
      </AuthShell>
    );
  }

  return (
    <AuthShell>
      <h1>Forgot password?</h1>
      <p className="sub">
        Enter your email and we&apos;ll send you a reset link.
      </p>

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

        <Button type="primary" htmlType="submit" block loading={loading}>
          Send Reset Link
        </Button>

        <div style={{ textAlign: 'center', marginTop: 16 }}>
          Remembered? <Link to="/login">Sign in</Link>
        </div>
      </Form>
    </AuthShell>
  );
}
