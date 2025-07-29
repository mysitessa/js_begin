import { Component } from "react";

export default class Hello extends Component {
  render() {
    return (
      <main><div className="hello-page">
      <h1>Hello World!</h1>
      <p>This is a class component route</p>
    </div>
    <a href="/info"
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"> переход на info</a>
    </main>
      
    );
  }
}