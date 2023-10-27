import "./navbar.css"


function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg "  data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">DISS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home.jsx">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about.jsx">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/inventory.jsx">Inventory</a>
              </li>
              <li classNmae="nav-item">
                <a className="nav-link disabled" href="/src/App.js">Top-Pic's</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar