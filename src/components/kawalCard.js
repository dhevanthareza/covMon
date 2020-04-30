import "./kawalItem";
import axios from "axios";

class KawalCard extends HTMLElement {
  connectedCallback() {
    this.setup();
  }
  async setup() {
    this.innerHTML = `
      <div class="dcard bg-white">
        <div id="itemList" class="row">
          <div class="col-sm">
            <div class="spinner-grow text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div> 
            Sedang Mengambil Data
          </div>
        </div>
      </div>
    `;
    const colors = {
      sembuh: "success",
      meninggal: "danger",
      positif: "warning",
    };
    try {
      let data = await axios.get("https://api.kawalcorona.com/indonesia/");
      document.querySelector("#itemList").innerHTML = "";
      data = data.data[0];
      delete data.name;
      Object.keys(data).forEach((key) => {
        const element = document.createElement("kawal-item");
        element.setAttribute("class", "col-sm");
        document.querySelector("#itemList").appendChild(element);
        element.property = {
          status: key.toUpperCase(),
          summary: data[key],
          color: colors[key],
        };
      });
    } catch (err) {
      document.querySelector("#itemList").innerHTML = `
        <span class="ml-5 h3">Gagal Mengambil Data</span>
      `;
    }
  }
}
customElements.define("kawal-card", KawalCard);
