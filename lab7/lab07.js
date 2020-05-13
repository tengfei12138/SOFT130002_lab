const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
let div=document.getElementsByClassName("justify");
for (let i=0;i<works.length;i++){
    let div1=document.createElement("div");
    div1.className="item";
    let tips=document.createElement("h4");
    tips.innerHTML="Genre"+"&nbsp;"+":"+"&nbsp"+works[i].tips;
    div1.appendChild(tips);
    div[0].appendChild(div1);
    let author=document.createElement("div");
    author.classList.add("inner-box");
    let author1=document.createElement("h3");
    author1.style.display="inline";
    author1.innerHTML=works[i].author;
    let author2=document.createElement("h5");
    author2.style.display="inline";
    author2.style.marginLeft="1em";
    author2.innerHTML="lifetime:"+works[i].lifetime;
    author.appendChild(author1);
    author.appendChild(author2);
    div1.appendChild(author);
    let photo=document.createElement("div");
    photo.classList.add("inner-box");
    let photo1=document.createElement("h3");
    photo1.innerHTML="Popular Photos";
    photo.appendChild(photo1);
    for (let j=0;j<works[i].photos.length;j++){
        let photo2=document.createElement("img");
        photo2.setAttribute('src',works[i].photos[j]);
        photo2.className="photo";
        photo.appendChild(photo2);
    }
    div1.appendChild(photo);
    let button=document.createElement("button");
    let p=document.createElement("p");
    p.innerHTML="Visit";
    button.appendChild(p);
    div1.appendChild(button);
}