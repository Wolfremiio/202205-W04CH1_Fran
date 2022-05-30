import { Gentleman } from '../Gentleman/gentleman';
import './App.css';

export default function App() {
  return (
    <>
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointing gentlemen</h1>
        </header>
        <Gentleman></Gentleman>
        <section className="controls">
          <p className="info">0 gentlemen pointing at you</p>
          <button className="button button--select">Select all</button>
        </section>
        <main className="main">
          <ul className="gentlemen"></ul>
        </main>
      </div>
    </>
  );
}
