import { Component } from "react";

export default class Hello extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <main>
          <div className="hello-page">
            <h1>Hello World!</h1>
            <p>This is a class component route</p>
          </div>
          <a href="/info" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            переход на info
          </a>
        </main>
      </>
    );
  }
}