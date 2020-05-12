import React from "react";

function NavBar() {
  return (
    <header class="main-header">
      <nav>
        <h1 id="logo">Recipee</h1>
        <ul class="nav-link-list">
          <li>
            <a href="#" class="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#" class="nav-link">
              Contact
            </a>
          </li>
          <li>
            <a href="#" class="nav-link">
              Register
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
