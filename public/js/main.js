console.log('Foi!!')
let teste
switch (window.location.pathname) {
    case "/produtos":
        var array = [];

        Array.from(document.getElementsByClassName("modal")).forEach((modal) => {
            array.push(new bootstrap.Modal(modal));
        });
        console.log("produtos")
        teste = document.getElementsByClassName("modal-delete");
        console.log(Array.from(teste));
        Array.from(teste).forEach((btn, i) => {
            btn.onclick = function () {
                console.log(i);
                array[i].show();
            };
        });  
        break;
    
    
    case "/lojas":
        var array = [];

        Array.from(document.getElementsByClassName("modal")).forEach((modal) => {
            array.push(new bootstrap.Modal(modal));
        });
        console.log("Lojas")
        teste = document.getElementsByClassName("modal-delete");
        console.log(Array.from(teste));
        Array.from(teste).forEach((btn, i) => {
            btn.onclick = function () {
                console.log(i);
                array[i].show();
            };
        });
        break;
}