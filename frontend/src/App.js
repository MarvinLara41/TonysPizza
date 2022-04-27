function App() {
  return (
    <div className="App">
      <header className="home__header">
        <div className="home__logo">
          <a href="/">Tony's Pizza</a>
        </div>
        <div className="home__title">
          <h1>Tony's Pizza</h1>
          <h3>The best pizza in town!</h3>
        </div>
        <div className="home__links">
          <ul>
            <li>
              <a href="/order">Order</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <a href="/signin">Sign In</a>
            </li>
          </ul>
        </div>
      </header>
      <main className="main">
        <div className="main__products"> List products</div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
