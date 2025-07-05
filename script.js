const contact = document.querySelector(".contact");

function contactPop() {
  let main = document.createElement("div");
  let GitHub = document.createElement("a");
  let exitBut = document.createElement("div");
  let dropBox = document.createElement("div");
  let exiticone = document.createElement("i");
  exiticone.classList.add("fa-brands", "fa-x");
  let GitHubicone = document.createElement("i");
  GitHubicone.classList.add("fa-brands", "fa-github");
  let GitHubText = document.createTextNode("GitHub");
  exitBut.style.cssText = `
  position: relative;
  top: -10px;
  left: 335px;
  cursor: pointer;
  width: 13px;
  color: #fff;
  cursor: pointer;
}
`;
  main.style.cssText = `
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  width: 360px;
  height: 100px;
  border: 4px solid #676767;
  border-top: transparent;
  z-index: 5;
  `;
  GitHub.style.cssText = `
  color: #fff;
  position: relative;
  bottom: -75px;
  left: 10px;
  cursor: pointer;
  `;
  dropBox.style.cssText = `
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  width: 100vw;
  height: 100vh;
  opacity: 0.6;
  `;
  GitHub.appendChild(GitHubicone);
  GitHub.appendChild(GitHubText);
  exitBut.appendChild(exiticone);
  document.body.appendChild(dropBox);
  main.appendChild(GitHub);
  main.appendChild(exitBut);
  exitBut.onclick = () => {
    dropBox.remove();
    main.remove();
  };
  dropBox.onclick = () => {
    dropBox.remove();
    main.remove();
  };
  GitHub.href = "https://github.com/7snDev/";
  GitHub.target = "_black";
  document.body.appendChild(main);

}

contact.addEventListener("click", () => contactPop());

document.querySelector(".logo").addEventListener("click", () => {
  window.location.href = "/";
})