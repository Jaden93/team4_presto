// // let count = 1;
// // let nextImg = document.querySelector('#changeNext');
// // let changeImg = document.querySelector('#changeImg')
// // nextImg.addEventListener('click', function (event) {
// //     //pushare length dopo il click


//     count++
    
//         changeImg.src =`./img/carousel_${count}.png`;
            

//         //    innerHTML = `<div class="col-12 col-md-5">
//         //    <h2 class="display-5 font-weight-light">Comincia a guadagnare</h2>
//         //    <p class="lead ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quidem, placeat officiis
//         //      quod magni magnam temporibus labore non cupiditate et unde ab molestiae id quis quasi ad vel ea dolore?</p>
//         //  </div>`
        
        
//         if (count == 5) {
//             count = 0
//         }
// })



// $(document).ready(function() {

//   $('[data-toggle=offcanvas]').click(function() {

//     $('.sidebar-offcanvas').toggleClass('active', 1000);

//   });

// });


let prova = document.querySelector('#category-wrapper')
let changeUrl = document.querySelector('.prova')



function categoryAdd() {
let category = ["Offerte della settimana","musica", "lotta","elettronica","abbigliamento","Ultimo minuto"]


    category.forEach(cat => {
        let card = document.createElement('li')
        card.classList.add('col-md-2','text-center','col-sm-6', 'col-6')
        card.innerHTML = `

          <div class="prova"></div>
          <h5 class="font-size-cat fc-sec pt-3">${cat}</h5>
        
       
        
    `
        
      prova.appendChild(card)
    });

}
if (prova)
{
  categoryAdd()
}




// $(document).ready(function(){

//     $('.center-carousel').slick({
//         centerMode: true,
//         centerPadding: '60px',
//         slidesToShow: 3,
//         responsive: [
//           {
//             breakpoint: 768,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '40px',
//               slidesToShow: 3
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               arrows: false,
//               centerMode: true,
//               centerPadding: '40px',
//               slidesToShow: 1
//             }
//           }
//         ]
//       });

// })
let searchAd = document.querySelector('#barraRicerca')

fetch('./annunci.json').then(data => data.json()).then(contatti => {





  
function populateAd() {
  
     
      let catWrapper = document.querySelector('#wrap-cat') 

      contatti.forEach(contatto => {
      let card = document.createElement('div');

      card.classList.add('col-md-3','mx-3','my-3','col-8')
      card.innerHTML = `
      <div class="card-custom">
      <div class="card-inner">
          <div class="text-light card-inner-front">
              <i class="fas [12, 5, 8, 130, 44]fa-car fs-1 my-5"></i>
              <h3 class="text-card-title">${contatto.category}</h3>
              <h3 class="text-card-title">${contatto.name}</h3>
          </div>
          <div class="card-inner-back">
            <p class='pt-4 text-card-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempora quae sint laudantium quibusdam animi suscipit!</p>
            <h3 class="text-light text-card-title">120$</h3>
          </div>
      </div>
  </div>
      `
      

     


    

      catWrapper.appendChild(card)
 
})


}
function addCategoryRadio() {

  let set = new Set();
  contatti.forEach(contatto => {
     set.add(contatto.category)   
  })

  set = Array.from(set)
  console.log(set.length)
  for (i=0; i < set.length; i++) {

    console.log(set[i])

let filterRadios = document.querySelector('#radios')
let newForm = document.createElement('div')
newForm.classList.add('form-check')

newForm.innerHTML = `
<input class="hover form-check-input" category-filter="${set[i]}" type="radio" id="flexRadioDefault2" checked>
<label class="form-check-label" for="flexRadioDefault2">
  ${set[i]}
</label>
`
 filterRadios.appendChild(newForm)
}


}



addCategoryRadio()



$('.hover').on("click",function(e){
  let targetText = $(e.target).siblings('label').text().trim()
  console.log(targetText)
  let contattiCompleti = contatti;
  let catWrapper = document.querySelector('#wrap-cat') 
    catWrapper.innerHTML = '';
       for (i=0 ; i < contatti.length; i++) {

        if (targetText == contatti[i].category) {

           
        
        let card = document.createElement('div');
        
        card.classList.add('noPaddingCard', 'col-lg-2','mx-3','my-3','col-8')
        card.innerHTML = `
        <div class="card-custom">
        <div class="card-inner">
            <div class="text-light card-inner-front">
                <i class="fas [12, 5, 8, 130, 44]fa-car fs-1 my-5"></i>
                <h3 class="text-card-title">${contattiCompleti[i].category}</h3>
                <h3 class="text-card-title">${contattiCompleti[i].name}</h3>
            </div>
            <div class="card-inner-back">
              <p class='pt-4 text-card-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempora quae sint laudantium quibusdam animi suscipit!</p>
              <h3 class="text-light text-card-title">120$</h3>
            </div>
        </div>
    </div>
        `
        
        catWrapper.appendChild(card)
       }

      }  
})



function inputText() {

console.log(document.querySelector('#barraRicerca'))  

}
inputText()
function addAdCategory() {

  let set = new Set();
   contatti.forEach(contatto => {
      set.add(contatto.category)   
   })
 
   set = Array.from(set)




   searchAd.addEventListener('input',function(event){

  
       let catWrapper = document.querySelector('#wrap-cat') 
       let textPrint = this.value
       let contattiCompleti = contatti;
       catWrapper.innerHTML = '';
       for (i=0 ; i < contatti.length; i++) {

       if (textPrint == contattiCompleti[i].category) {

        let card = document.createElement('div');
        
        card.classList.add('col-md-2','mx-3','my-3','col-8')
        card.innerHTML = `
        <div class="card-custom">
        <div class="card-inner">
            <div class="text-light card-inner-front">
                <i class="fas [12, 5, 8, 130, 44]fa-car fs-1 my-5"></i>
                <h3 class="text-card-title">${contattiCompleti[i].category}</h3>
                <h3 class="text-card-title">${contattiCompleti[i].name}</h3>
            </div>
            <div class="card-inner-back">
              <p class='pt-4 text-card-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempora quae sint laudantium quibusdam animi suscipit!</p>
              <h3 class="text-light text-card-title">120$</h3>
            </div>
        </div>
    </div>
        `
        
        catWrapper.appendChild(card)
  
      
  }  else if (textPrint !==  contattiCompleti[i].category) {
          console.log()

  }




  


  


  
   }
  


})

   }
    
    


 
addAdCategory()





// fine fetch















})







// }




$('.center').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 4,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5,



    responsive: [
      {
        breakpoint: 968,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
          swipe: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 3,
          swipe: true,
          vertical: true,
          verticalSwiping:true,

               }
      }
    ]
  });
