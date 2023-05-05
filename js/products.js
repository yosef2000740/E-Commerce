listProducts=[
    {
        "imgProduct":"../../img/products/f1.jpg",
        "brand":"adidas",
        "nameProduct": "Shirt",
        "star": 5,
        "price": 78,
    },
    {
        "imgProduct":"../../img/products/f2.jpg",
        "brand":"adidas",
        "nameProduct": "Shirt",
        "star": 5,
        "price": 80,
    },
    {
        "imgProduct":"../../img/products/f3.jpg",
        "brand":"adidas",
        "nameProduct": "Shirt",
        "star": 5,
        "price": 99,
    },
    {
        "imgProduct":"../../img/products/f4.jpg",
        "brand":"Nick",
        "nameProduct": "Shirt",
        "star": 5,
        "price": 99,
    },
    {
        "imgProduct":"../../img/products/f5.jpg",
        "brand":"zarah",
        "nameProduct": "Shirt",
        "star": 5,
        "price": 99,
    },
    {
        "imgProduct":"../../img/products/f6.jpg",
        "brand":"dragon",
        "nameProduct": "Shirt",
        "star": 5,
        "price": 99,
    }
    ,
    {
        "imgProduct":"../../img/products/f7.jpg",
        "brand":"dragon",
        "nameProduct": "Shirt",
        "star": 5,
        "price": 99,
    },
    {
        "imgProduct":"../../img/products/n6.jpg",
        "brand":"dragon",
        "nameProduct": "pants",
        "star": 5,
        "price": 99,
    },
    {
        "imgProduct":"../../img/products/n6.jpg",
        "brand":"dragon",
        "nameProduct": "short-pants",
        "star": 4,
        "price": 99,
    }

]

// function render feature
function addListProduct(idSection){
    let listPro = document.getElementById(idSection).innerHTML="";
    let i=0;
    for(product of listProducts){
        let contentFeature = `
   <div  class="pro-container">
     <div class="pro">
       <img src="${product.imgProduct}" alt="" />
         <div class="des">
           <span>${product.border}</span>
             <h5>${product.nameProduct}</h5>
               <div class="star">

              </div>
            <h4>$ ${product.price}</h4>
          </div>
          <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
         </div>
   </div>
       `;
        listPro =document.getElementById(idSection).innerHTML+=contentFeature;
        i++;
    }
}
addListProduct("cardProductSection1");
addListProduct("cardProductSection2");