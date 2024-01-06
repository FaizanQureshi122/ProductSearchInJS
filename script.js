
var mobile = {
    Samsung : {
      SamsungzFold : {
          name: 'Samsung Galaxy Z Fold 5',
          image : 'https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyZFold5-b.jpg',
          price: 199990.99,
          // colors: ['Black', 'Blue', 'White'],
          frontCamera: '16 MP',
          backCamera: '48 MP',
          model: 'Note 10',
         },
         Samsung_Galaxy_S23_Ultra : {
          name: 'Samsung Galaxy S23 Ultra',
          image : 'https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS23Ultra-b.jpg',
          price: 159990.99,
          // colors: ['Black', 'Blue', 'White'],
          frontCamera: '16 MP',
          backCamera: '48 MP',
          model: 'Note 10',
         },
          
         Samsung_Galaxy_S23 : {
          name: 'Samsung Galaxy S23',
          image : 'https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS23-b.jpg',
          price: 54000.99,
          // colors: ['Black', 'Blue', 'White'],
          frontCamera: '16 MP',
          backCamera: '48 MP',
          model: 'Note 10',
         },
         
         Samsung_Galaxy_Z_Flip_5 : {
          name: 'Samsung Galaxy Z Flip 5',
          image : 'https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyZFlip5-b.jpg',
          price: 54300.99,
          // colors: ['Black', 'Blue', 'White'],
          frontCamera: '16 MP',
          backCamera: '48 MP',
          model: 'Note 10',
         },

         SamsungGalaxyS21Plus : {
          name: 'Samsung Galaxy S21 Plus',
          image : 'https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyS21Plus-b.jpg',
          price: 184_999,
          // colors: ['Black', 'Blue', 'White'],
          frontCamera: '10 MP',
          backCamera: '12 MP',
          model: 'S 21',
         },
         SamsungGalaxyM52 : {
          name: 'Samsung Galaxy M52',
          image : 'https://www.whatmobile.com.pk/admin/images/Samsung/SamsungGalaxyM52-b.jpg',
          price: 82_999,
          // colors: ['Black', 'Blue', 'White'],
          frontCamera: '32 MP',
          backCamera: '64 MP',
          model: 'M 52',
         },


        },
 
        infinix : {
          InfinixZero305G : {
            name: 'Infinix Zero 30 5G',
            image : 'https://www.whatmobile.com.pk/admin/images/Infinix/InfinixNote12256GB-b.jpg',
            price: 99_999,
            // colors: ['Black', 'Blue', 'White'],
            frontCamera: '50 MP',
            backCamera: '108 MP',
            model: '30 5G',
           },
           InfinixHot10S : {
            name: 'Infinix Hot 10S',
            image : 'https://www.whatmobile.com.pk/admin/images/Infinix/InfinixHot10s-b.jpg',
            price: 25_999,
            // colors: ['Black', 'Blue', 'White'],
            frontCamera: '8 MP',
            backCamera: '48 MP',
            model: '10 S',
           },

        },
        Vivo : {
          VivoX80 : {
            name: 'Vivo X80',
            image : 'https://www.whatmobile.com.pk/admin/images/Vivo/VivoX80-b.jpg',
            price: 169_999,
            // colors: ['Black', 'Blue', 'White'],
            frontCamera: '32 MP',
            backCamera: '50 MP',
            model: 'X80',
           },
           VivoY73: {
            name: 'Vivo Y73',
            image : 'https://www.whatmobile.com.pk/admin/images/Vivo/VivoY73-b.jpg',
            price: 89_999,
            // colors: ['Black', 'Blue', 'White'],
            frontCamera: '16 MP',
            backCamera: '64 MP',
            model: 'Y73',
           },
           VivoY73: {
            name: 'Vivo Y73',
            image : 'https://www.whatmobile.com.pk/admin/images/Vivo/VivoY73-b.jpg',
            price: 89_999,
            // colors: ['Black', 'Blue', 'White'],
            frontCamera: '16 MP',
            backCamera: '64 MP',
            model: 'Y73',
           },
           
           VivoY21: {
            name: 'Vivo Y21',
            image : 'https://www.whatmobile.com.pk/admin/images/Vivo/VivoY21-b.jpg',
            price: 59_999,
            // colors: ['Black', 'Blue', 'White'],
            frontCamera: '8 MP',
            backCamera: '64 MP',
            model: 'Y21',
           },
        },
      
};


function updateProductList(mobile) {
  var h2Ele = document.getElementById('product');

  
    for (var brandKey in mobile) {
      var brand = mobile[brandKey];

      for (var seriesKey in brand) {
        var series = brand[seriesKey];

      h2Ele.innerHTML += `<section id="section" class="p-4  ">
      
      <div class="card  col-lg-4" style="width: 18rem; height: 620px">
      <div class="card shadow">

    <div id="data" class="card-body ">
    <div class="product"> 
    <div class="pb-4"> 
         <img src="${series.image}" alt="${series.name}" style="max-width: 100%;">
         </div> 
         <h3>${series.name}</h3>
          <p>Price: ${series.price}</p>

          <p>Front Camera: ${series.frontCamera}</p>
          <p>Back Camera: ${series.backCamera}</p>
          <p>Model: ${series.model}</p>
        </div>
    </div>
    </div>
</div>  
</section>`;
    }}}
// Call the function with the mobile object
updateProductList(mobile);

var home = document.getElementById('home').addEventListener('click',function(){

  function updateProductList(mobile) {
    var h2Ele = document.getElementById('product');
    h2Ele.innerHTML = '';
  
    
      for (var brandKey in mobile) {
        var brand = mobile[brandKey];
  
        for (var seriesKey in brand) {
          var series = brand[seriesKey];
  
        h2Ele.innerHTML += `<section id="section" class="p-4  ">
  <div class="card  col-lg-4" style="width: 18rem; height: 620px">
  <div class="card shadow">
    
  <div id="data" class="card-body ">
     
      <div class="product"> 
           <div class="pb-4"> 
           <img src="${series.image}" alt="${series.name}" style="max-width: 100%;">
           </div> 
           <h3>${series.name}</h3>
            <p>Price: ${series.price}</p>
  
            <p>Front Camera: ${series.frontCamera}</p>
            <p>Back Camera: ${series.backCamera}</p>
            <p>Model: ${series.model}</p>
          </div>
      </div>
</div>    </div>
  </section>`;
      }}}
  // Call the function with the mobile object
  updateProductList(mobile);
  
});


var samsungD = document.getElementById("sams");

samsungD.addEventListener('click',function(){
    
  function updateProductList(mobile) {
    var h2Ele = document.getElementById('product');
     h2Ele.innerHTML = '';
    // Iterate over the Samsung brand
    for (var seriesKey in mobile.Samsung) {
      var series = mobile.Samsung[seriesKey];
  
      h2Ele.innerHTML += `<section id="section" class="p-4">
        <div class="card col-lg-4" style="width: 18rem; height: 620px">
        <div class="card shadow">

        <div id="data" class="card-body">
            <div class="product"> 
              <div class="pb-4"> 
                <img src="${series.image}" alt="${series.name}" style="max-width: 100%;">
              </div> 
              <h3>${series.name}</h3>
              <p>Price: ${series.price}</p>
              <p>Front Camera: ${series.frontCamera}</p>
              <p>Back Camera: ${series.backCamera}</p>
              <p>Model: ${series.model}</p>
            </div>
          </div>
</div>        </div>
      </section>`;
    }
  }
  
  // Call the function with the mobile object
  updateProductList(mobile);
});


var infinx = document.getElementById('infinx');

infinx.addEventListener('click',function(){
      function productinfinix (mobile){
   var h2Ele = document.getElementById('product');

   h2Ele.innerHTML = '';

    for(var itemkey in mobile.infinix){
      var items = mobile.infinix[itemkey];

      h2Ele.innerHTML += `<section id="section" class="p-4">
      <div class="card col-lg-4 " style="width: 18rem; height: 700px">
      <div class="card shadow">

        <div id="data" class="card-body">
          <div class="product"> 
            <div class="pb-4"> 
              <img src="${items.image}" alt="${items.name}" style="max-width: 100%;">
            </div> 
            <h3>${items.name}</h3>
            <p>Price: ${items.price}</p>
            <p>Front Camera: ${items.frontCamera}</p>
            <p>Back Camera: ${items.backCamera}</p>
            <p>Model: ${items.model}</p>
          </div>
      </div>  </div>
</div>      </div>
    </section>`;

    }}
 productinfinix(mobile);
});

var vivo = document.getElementById('vivo');
vivo.addEventListener('click',function(){
    const listvivo = (mobile)=>{

      var h2Ele = document.getElementById('product');
      h2Ele.innerHTML = '';

      for(var series in mobile.Vivo){
        var series2 = mobile.Vivo[series];
        h2Ele.innerHTML +=  `<section id="section" class="p-4">
        <div class="card col-lg-4 " style="width: 18rem; height: 700px">
        <div class="card shadow">

        <div id="data" class="card-body">
            <div class="product"> 
              <div class="pb-4"> 
                <img src="${series2.image}" alt="${series2.name}" style="max-width: 100%;">
              </div> 
              <h3>${series2.name}</h3>
              <p>Price: ${series2.price}</p>
              <p>Front Camera: ${series2.frontCamera}</p>
              <p>Back Camera: ${series2.backCamera}</p>
              <p>Model: ${series2.model}</p>
            </div>
          </div>
</div>        </div>
        </div>
      </section>`;

      }
    }
    listvivo(mobile);
});

function filterProducts(searchTerm) {
  var filteredMobile = {};

    var h2Ele = document.getElementById('product');
    h2Ele.innerHTML = '';
  for (var brandKey in mobile) {
    var brand = mobile[brandKey];
    var filteredBrand = {};

    for (var seriesKey in brand) {
      var series = brand[seriesKey];

      // Check if the search term is present in the series name
      if (series.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        filteredBrand[seriesKey] = series;
      }
    }

    // Add the filtered brand to the result if it has matching series
    if (Object.keys(filteredBrand).length > 0) {
      filteredMobile[brandKey] = filteredBrand;
    }
  }

  // Update the product list with the filtered mobile object
  updateProductList(filteredMobile);
}

// Attach an event listener to the search input
document.getElementById('searchInput').addEventListener('input', function (event) {
  filterProducts(event.target.value);
});

// Initial product list update
updateProductList(mobile);









// example
// for(var k in mobile){
//   for(var k1 in mobile[k]){
//     for(var k2 in mobile[k1]){
      
//   console.log(mobile[k][k1])
//     }
//   }
// }