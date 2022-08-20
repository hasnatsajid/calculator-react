function App() {
  return (
    <div className="App">
      <section class="main">
        <section class="display"></section>

        <div class="container">
          <button class="key trash keymod">
            <i class="fas fa-trash"></i>
          </button>
          <button class="key percent keymod">
            <i class="fas fa-percent"></i>
          </button>
          <button class="key backspace keymod">
            <i class="fas fa-backspace"></i>
          </button>
          <button class="key divide keymod">
            <i class="fas fa-divide"></i>
          </button>
        </div>

        <div class="container">
          <button class="key seven numkey">7</button>
          <button class="key eight numkey">8</button>
          <button class="key nine numkey">9</button>
          <button class="key keymod multiply">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="container">
          <button class="key four numkey">4</button>
          <button class="key five numkey">5</button>
          <button class="key six numkey">6</button>
          <button class="key keymod minus">
            <i class="fas fa-minus"></i>
          </button>
        </div>

        <div class="container">
          <button class="key one numkey">1</button>
          <button class="key two numkey">2</button>
          <button class="key three numkey">3</button>
          <button class="key keymod add">
            <i class="fas fa-plus"></i>
          </button>
        </div>

        <div class="container">
          <button class="key null numkey">0</button>
          <button class="key zero numkey">0</button>
          <button class="key dot numkey">
            <i class="fas fa-circle"></i>
          </button>
          <button class="key keymod equals">
            <i class="fas fa-equals"></i>
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
