import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Layout} from './Layouts/Layout'; 
import {Today} from './pages/TodayPage/Today';
import {ByDate} from './pages/ByDatePage/ByDate';
import {About} from './pages/AboutPage/About.jsx';
import {QueryClient , QueryClientProvider} from '@tanstack/react-query';
import './index.scss';

const queryClient = new QueryClient();

function App() {
  
  return (
      <QueryClientProvider client={queryClient} >
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}> 
      <Route index element={<Today/>} />
      <Route path="/ByDate" element={<ByDate/>} />
      <Route path="/About" element={<About/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
