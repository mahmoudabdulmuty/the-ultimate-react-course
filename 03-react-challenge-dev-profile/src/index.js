import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// App Components
import Avatar from './components/Avatar';
import Intro from './components/Intro';
import SkillList from './components/SkillList';
import './index.css';

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro
          title='Jonas Schmedtmann'
          bio='Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach'
        />
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
