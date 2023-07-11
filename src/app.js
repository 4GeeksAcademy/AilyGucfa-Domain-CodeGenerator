/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["my", "some", "our"];
let adjective = ["great", "funny", "wonderful"];
let noun = ["adventure", "catVideos", "dog"];
let domainNameEnxtension = ["net", "com", "org"];

function getDomainName() {
  let result = "";
  for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
    for (
      let adjectiveIndex = 0;
      adjectiveIndex < adjective.length;
      adjectiveIndex++
    ) {
      for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
        for (
          let domainNameEnxtensionIndex = 0;
          domainNameEnxtensionIndex < domainNameEnxtension.length;
          domainNameEnxtensionIndex++
        ) {
          let domainNameConcat =
            pronoun[pronounIndex] +
            "" +
            adjective[adjectiveIndex] +
            "" +
            noun[nounIndex] +
            "." +
            domainNameEnxtension[domainNameEnxtensionIndex];
          result = result + domainNameConcat + "<br>";
        }
      }
    }
  }

  document.getElementById("result").innerHTML = result;
  document.getElementById("btn").style.display = "none";
}
window.onload = function() {
  document.getElementById("btn").addEventListener("click", getDomainName);
};
