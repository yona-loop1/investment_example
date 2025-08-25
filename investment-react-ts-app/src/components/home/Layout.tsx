import { Outlet } from 'react-router-dom';
import '../../App.css';
import * as styles from './layoit.styles'
import useLayout from '../../hooks/useLayout';
import TopBar from './TopBar';

const Layout: React.FC = () => {
  const {
    usersName,
    renderLayout
  } = useLayout();

    return (
    <styles.Container>
      <TopBar userName={usersName}/>
      <styles.DisplayArea>
        <Outlet context={{ renderLayout }}/>
      </styles.DisplayArea>
    </styles.Container>
)};

export default Layout;

/* <div>
  <a href="https://vite.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.tsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p> */