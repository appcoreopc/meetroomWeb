import * as React from 'react';
import { Link } from 'react-router-dom';

export const Main : React.StatelessComponent<{}> = () => {
  return (
      
  <div>
  
    <header className="primary-header"></header>

    <aside className="primary-aside">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Users</Link></li>
        <li><Link to="/members">Widgets</Link></li>
      </ul>
    </aside>
    <main>
      <h1> content here  </h1>      
    </main>

  </div>

  );
}
