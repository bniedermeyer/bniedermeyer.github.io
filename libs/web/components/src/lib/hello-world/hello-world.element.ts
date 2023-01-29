export class HelloWorldElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    this.innerHTML = `
    <div class="w-screen bg-yellow-500 py-8">
      <h1 class="text-6xl ">Hello World</h1>
    </div>
    `;
  }
}
customElements.define('hello-world', HelloWorldElement);
