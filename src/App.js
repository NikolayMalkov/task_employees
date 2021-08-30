import EmployeesList from './components/EmployeesList';
import { ToastProvider, useToasts } from 'react-toast-notifications'
import './App.css';

function App() {
  return (
    <ToastProvider>
      <div className="wrap">
        <EmployeesList />
      </div>
    </ToastProvider>

  );
}

export default App;
