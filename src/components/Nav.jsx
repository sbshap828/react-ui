import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pods">Pictures of the Day</NavLink>
    </nav>
  )
}

export default Nav