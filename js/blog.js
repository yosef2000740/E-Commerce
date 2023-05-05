ListFashion=[
    {
        "imgProduct":"../../img/blog/b1.jpg",
        "title":"The Cotton-Jersey Zip-Up Hoodie",
        "discraption": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt eligendi dolorum tenetur deleniti possimus.",
        "num": "13/01",
    },
    {
        "imgProduct":"../../img/blog/b2.jpg",
        "title":"The Cotton-Jersey Zip-Up Hoodie",
        "discraption": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt eligendi dolorum tenetur deleniti possimus.",
        "num": "13/02",
    },
    {
        "imgProduct":"../../img/blog/b3.jpg",
        "title":"The Cotton-Jersey Zip-Up Hoodie",
        "discraption": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt eligendi dolorum tenetur deleniti possimus.",
        "num": "13/11",
    },
    {
        "imgProduct":"../../img/blog/b4.jpg",
        "title":"The Cotton-Jersey Zip-Up Hoodie",
        "discraption": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt eligendi dolorum tenetur deleniti possimus.",
        "num": "14/02",
    },
    {
        "imgProduct":"../../img/blog/b5.jpg",
        "title":"The Cotton-Jersey Zip-Up Hoodie",
        "discraption": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt eligendi dolorum tenetur deleniti possimus.",
        "num": "11/11",
    },
    {
        "imgProduct":"../../img/blog/b6.jpg",
        "title":"The Cotton-Jersey Zip-Up Hoodie",
        "discraption": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt eligendi dolorum tenetur deleniti possimus.",
        "num": "1/01",
    },
    {
        "imgProduct":"../../img/blog/b7.jpg",
        "title":"The Cotton-Jersey Zip-Up Hoodie",
        "discraption": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nesciunt eligendi dolorum tenetur deleniti possimus.",
        "num": "13/01",
    },


]

// function render feature
function showListFashion(){
    let listFash = document.getElementById("blog").innerHTML="";
    let i=0;
    let product;
    for(product of ListFashion){
        let contentFeature = `
    <section id="blog">
         <div class="blog-box">
            <div class="blog-img">
                <img src="${product.imgProduct}" alt="">
            </div>
            <div class="blog-details">
                <h4>${product.title}</h4>
                <p>${product.discraption}
                </p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>
               ${product.num}
            </h1>
        </div>
    </section>
       `;
        listFash =document.getElementById("blog").innerHTML+=contentFeature;
        i++;
    }
}
showListFashion();