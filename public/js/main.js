switch (window.location.pathname) {
  case "/produtos":
  case "/lojas":
  case "/cupons":
    modal();
    break;
}

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
