let form = document.querySelector("form")
let input= document.querySelector("input")
let button = document.querySelector("button")
let image = document.querySelector("img")

const getQrCode = async(e) =>{

    e.preventDefault();
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=&data=${input.value}`);


 
    image.style.width =  "200px"
    image.style.height ="200px"

    image.setAttribute("src", response.url)
     
 
    form.reset();
};
form.addEventListener("submit", getQrCode)