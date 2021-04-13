import {Link} from 'react-router-dom';

const Navbar = () =>
{
    return(
        <div>        
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <Link className="nav-link" to="/">Dashboard</Link>
      <Link className="nav-link" to="/about">About</Link>
      <Link className="nav-link" to="/masuk">Masuk</Link>
      <Link className="nav-link" to="/daftar">Daftar</Link>

      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;