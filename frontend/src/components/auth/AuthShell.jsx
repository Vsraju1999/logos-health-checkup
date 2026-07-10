import { CheckCircleFilled } from '@ant-design/icons';
import Brand from '../common/Brand.jsx';

export default function AuthShell({ children }) {
  return (
    <div className="auth-shell">
      <div className="auth-shell__hero">
        <Brand light />
        <div>
          <div className="hero-quote">
            Understand your body. Track every result. Make smarter health decisions.
          </div>
          <ul className="hero-list">
            <li>
              <CheckCircleFilled /> Upload PDF lab reports in seconds
            </li>
            <li>
              <CheckCircleFilled /> Auto-extract Hemoglobin, HbA1c, TSH and more
            </li>
            <li>
              <CheckCircleFilled /> Beautiful trend charts across months
            </li>
            <li>
              <CheckCircleFilled /> Secure and private &mdash; only you can see your data
            </li>
          </ul>
        </div>
        <div style={{ opacity: 0.7, fontSize: 13 }}>
          &copy; {new Date().getFullYear()} Logos Health
        </div>
      </div>
      <div className="auth-shell__form">
        <div className="auth-card">{children}</div>
      </div>
    </div>
  );
}
