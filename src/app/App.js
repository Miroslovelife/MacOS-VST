import React from "react";
import Header from "../containers/header/Header"
import Footer from "../containers/footer/Footer"
import Content from "../containers/content/content";


class App extends React.Component {
  render() {
    return(
      <div className="main">
      <Header />
      <Content />
      <Footer />
      </div>
    )
  }
}

export default App;
