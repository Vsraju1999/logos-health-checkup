import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
      <Result
        status="404"
        title="404"
        subTitle="The page you're looking for doesn't exist."
        extra={
          <Button type="primary" onClick={() => navigate('/dashboard')}>
            Back to dashboard
          </Button>
        }
      />
    </div>
  );
}
