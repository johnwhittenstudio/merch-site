import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">BAND NAME</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">LINK 1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">LINK 2</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;