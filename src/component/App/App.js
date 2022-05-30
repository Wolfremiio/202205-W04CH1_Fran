import { Gentleman } from '../Gentleman/gentleman';
import './App.css';
//import logo from './logo.svg'

export default function App() {
  return (
    <>
      <div class="container">
        <header class="main-header">
          <h1 class="main-title">The pointing gentlemen</h1>
        </header>
        <Gentleman></Gentleman>
        <main class="main">
          <ul class="gentlemen"></ul>
        </main>
      </div>
    </>
  );
}
