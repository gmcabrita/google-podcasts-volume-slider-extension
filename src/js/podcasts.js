import "../img/icon-128.png";
import "../img/icon-34.png";
import { MDCSlider } from "@material/slider";

let audioNode = document.querySelector("audio");

audioNode.addEventListener("loadeddata", function processOnce(event) {
  addVolumeSlider();
  audioNode.removeEventListener("loadeddata", processOnce);
});

function addVolumeSlider() {
  let parentNode = document.querySelector("div.feR69e");
  let currentVolume = audioNode.volume * 100;
  let volumeNode = document.createElement("div");
  volumeNode.style =
    "width: 100px; margin-left: 15px; margin-right: 33px; margin-top: 20px";
  volumeNode.innerHTML = `
    <div class="mdc-slider" tabindex="0" role="slider"
         aria-valuemin="0" aria-valuemax="100" aria-valuenow="${currentVolume}"
         aria-label="Select Value">
      <div class="mdc-slider__track-container">
        <div class="mdc-slider__track"></div>
      </div>
      <div class="mdc-slider__thumb-container">
        <svg class="mdc-slider__thumb" width="21" height="21">
          <circle cx="10.5" cy="10.5" r="7.875"></circle>
        </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>
  `;
  parentNode.appendChild(volumeNode);
  let slider = new MDCSlider(document.querySelector(".mdc-slider"));
  slider.listen("MDCSlider:input", () => {
    audioNode.volume = slider.value / 100;
  });
}
