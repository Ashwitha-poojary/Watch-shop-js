function add(){
    let watch_list= document.getElementById("watch-list");
    //create a card
    let card_name = document.createElement("div");
    card_name.classList.add("card");
    card_name.style.width="18rem";
    //image
    let image = document.createElement("img");
    image.classList.add("card-img-top")
    image.src="watch1.jpg"
    //div
    let card_body=document.createElement("div");
    card_body.classList.add("card-body");
    //h5
    let title=document.createElement("h5");
    title.classList.add("card-title");
    title.innerHTML= "TITAN"
    //p
    let para = document.createElement("p");
    para.classList.add("card-tex");
    para.innerHTML="t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    //button
    let button = document.createElement("a");
    button.classList.add("btn-primary");
    button.classList.add("btn");
    button.innerHTML= "ADD TO CART"

    card_name.appendChild(image);
    
    card_body.appendChild(title);
    card_body.appendChild(para);
    card_body.appendChild(button);

    card_name.appendChild(card_body);

    watch_list.appendChild(card_name);


 console.log(watch_list)

}
add()
add()
add()
