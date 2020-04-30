class KawalItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  set property({ status, summary, color }) {
    this._status = status;
    this._summary = summary;
    this._color = color;
    this.render();
  }
  render() {
    this.innerHTML = `
      <div class="col-sm my-2">
        <div class="text-center h3 text-${this._color}"><span>${this._summary}</span></div>
          <div class="text-center font-weight-bold">
            <span>${this._status}</span>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("kawal-item", KawalItem);
