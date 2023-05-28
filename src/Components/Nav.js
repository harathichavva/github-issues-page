import React from "react";
const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <i class="bi bi-github fs-2 me-2 text-light"></i>
          <div class="input-group flex-wrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input type="text" class="form-control " placeholder="search" aria-label="search" aria-describedby="addon-wrapping" />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
