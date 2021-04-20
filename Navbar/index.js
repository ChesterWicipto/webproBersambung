import {Link} from 'react-router-dom';

const Navbar = () =>
{
    return(
        <div className="container">        
       <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <div className="card bg-info ">
        <Link className="nav-link text-white" to="/">Dashboard</Link>
        </div>
      <div className="card bg-danger">
      <Link className="nav-link text-white" to="/about">About</Link>
      </div>
      <div className="card bg-success">
      <Link className="nav-link text-white" to="/masuk">Masuk</Link>
      </div>
      <div className="card bg-warning">
      <Link className="nav-link text-white" to="/daftar">Daftar</Link>
      </div>
      <div className="card bg-primary">
      <Link className="nav-link text-white" to="/adduser">AddUser</Link>
      </div>
      

      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;