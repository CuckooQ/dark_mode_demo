class DummyContent {
  target;

  constructor(target) {
    this.target = target;
    this.render();
  }

  template() {
    return `
      <section>
        <article class="post">
          <h1>The Principles of Good Design</h1>
          <p class="post-meta">Circa 2014 <span>by</span> Ian Daniel Stewart</p>
          <p>Is <strong>beauty</strong> objectively true? Are there principles you can use to guide you to it in your work? Can designers from both the sciences and the arts look at each others work and find <strong class="sevenhundred">beauty</strong>? These are important questions for all designers.</p>
          <p>For those of us who design things … we need to be able to recognize it. We need good taste to make good things. Instead of treating <strong class="eighthundred">beauty</strong> as an airy abstraction, to be either blathered about or avoided depending on how one feels about airy abstractions, let’s try considering it as a practical question: how do you make good stuff?</p>
          <a href="#">Read More</a>
        </article>
      </section>
    `;
  }

  render() {
    this.target.innerHTML = this.template();
  }
}

export default DummyContent;
