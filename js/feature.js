features=[
    {
        "src":"../../img/features/f1.png",
        "nameFeature": "Free Shopping"
    },
    {
        "src":"../../img/features/f2.png",
        "nameFeature": "Online Order"
    },
    {
        "src":"../../img/features/f3.png",
        "nameFeature": "Save Money"
    },
    {
        "src":"../../img/features/f4.png",
        "nameFeature": "promotions"
    },
    {
        "src":"../../img/features/f5.png",
        "nameFeature": "Happy sell"
    },
    {
        "src":"../../img/features/f6.png",
        "nameFeature": "support"
    },
]

// function render feature
function renderFeature(){
    let itemFeature = document.getElementById("feature").innerHTML="";
    let i=0;
    let feature;
    for(feature of features){
      let contentFeature = `
       <section id="feature" class="section-p1">
       <div class="fe-box">
            <img src=${feature.src} alt="" />
        <h6>${feature.nameFeature}</h6>
        </div>
    </section>`;
      itemFeature =document.getElementById("feature").innerHTML+=contentFeature;
      i++;
    }
}
renderFeature();