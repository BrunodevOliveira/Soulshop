switch (window.location.pathname) {
  case "/produtos":
  case "/lojas":
  case "/cupons":
  case "/pagamentos":
    modal();
    break;
}

// if(window.location.pathname.includes("/produtos/")) {
//   modal()
// }

// console.log(window.location.pathname)
function modal() {
  const modalArray = [];

  Array.from(document.getElementsByClassName("modal")).forEach((modal) => {
    modalArray.push(new bootstrap.Modal(modal));
  });

  const deleteButtons = document.getElementsByClassName("modal-delete");
  Array.from(deleteButtons).forEach((btn, i) => {
    btn.onclick = function () {
      modalArray[i].show();
    };
  });
}