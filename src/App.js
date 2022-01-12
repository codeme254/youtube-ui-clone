import './App.css';
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import PlayPage from './pages/PlayPage';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/play" exact element={<PlayPage />} />
      </Routes>
  );
};
// function App() {
//   return (
//     <Homepage />
//   );
// };

export default App;