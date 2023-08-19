window.addEventListener("load", () => {
    const visitas = document.querySelector(".numero");
    const cantVisitas = localStorage.getItem("visitas") || 0;
    let numero = parseInt(cantVisitas);
    if (numero => 0) {
        localStorage.setItem("visitas", numero + 1);
        console.log("suma");
    }  else {
        localStorage.setItem("visitas", 0);
        console.log(cantVisitas);
    }
    visitas.textContent = localStorage.getItem("visitas");

    const reset = document.querySelector(".reset");
    reset.addEventListener("click", () => {
        localStorage.setItem("visitas", 0);
        visitas.textContent = 0;
    })

})