async function displayCollections() {
  //Grab json data sent out by api request
  const response = await fetch("/api/collections", {
    method: "GET",
  });
  const collections = await response.json();
  console.log(collections);

  var outputString = ``
  var generatedString = ""
  
  for(let i=0; i<collections.length; i++) {
    generatedString += `
    <h1 class="card-title ml-4 text-accent">${collections[i].title}</h1>
    <div class="carousel rounded-box">
    <div  style="margin-bottom: 2vw; background-color: black">
    <div class="card-body">
      
      <div class="owl-carousel owl-theme">`

      for(let x=0; x<collections[i].artPieces.length; x++) {
        generatedString += `
        
        
        <div class="item">
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img class="h-64" src="${collections[i].artPieces[x].image}" alt="Image" /></figure>
        <div class="card-body">
            <h2 class="card-title">${collections[i].artPieces[x].title}</h2>
            <p class="text-accent">${collections[i].artPieces[x].description}</p>
            <h1>$${collections[i].artPieces[x].price}</h1>
            
        </div>
        </div>
        </div> 
        `
      }

      generatedString += `
        </div>
      </div>
    </div>
    </div>
      `
  }

  outputString += generatedString;

  $("#addCarouselHere").append().html(outputString);
  
  
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    stagePadding: 0,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
   
}

displayCollections();
