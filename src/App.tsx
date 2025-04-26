import { Layout } from './components/layout';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <div className="w-full h-full">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
