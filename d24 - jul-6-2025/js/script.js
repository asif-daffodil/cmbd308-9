const header = document.querySelectorAll(".header");
const details = document.querySelectorAll(".details");

// header[0].addEventListener("click", () => {
//     if(details[0].style.display == "block"){
//         details[0].style.display = "none";
//     }else{
//         details[0].style.display = "block";
//     }
// })

// header.forEach((head, ind) => {
//     head.addEventListener("click", () => {
//         details[ind].style.display = details[ind].style.display == "block" ? "none":"block";
//     })
// })

header.forEach((head, ind) => {
    head.addEventListener("click", () => {
        details.forEach((d, i) => {
            if(ind == i) {
                details[ind].style.display = details[ind].style.display == "block" ? "none":"block";
            }else{
                details[i].style.display = "none";
            }
        })
    })
})