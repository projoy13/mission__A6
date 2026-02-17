 const loadAllProducts = () => {
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(json => displayTrendingProducts(json))
       
 }
//  {
// "id": 1,
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
// "rating": {
// "rate": 3.9,
// "count": 120
// }
// },
    
    const displayTrendingProducts = (products) => {
      const highRateContainer = document.getElementById("high-ratecontainer");
      highRateContainer.innerHTML = "";

      
    

     
      for (let i = 0; i < 3; i++) {
        const product = products[i];

        const cardDiv = document.createElement("div");
        cardDiv.className = "product-card";

        cardDiv.innerHTML = `
        

<div class=" product-img flex justify-between">
          <img src="${product.image}" alt="${product.title} class=trending-img">
</div> 

         <div class="flex justify-between">
         <h2 class=" border solid rounded-2xl p-0.5 mt-2 w-20px bg-sky-100 text-sky-800">${product.category}</h2>
          <p class="mt-2 ">Rating: ${product.rating.rate} <i class="fa-solid fa-star text-yellow-600"></i></p>

  </div> 
          
          <p class="font-extrabold">Price: $${product.price}</p>
          <div class="flex justify-between">
           <button class="btn btn-active w-30 h-8">Details</button>
           <button class="btn btn-primary w-30 h-8">Add</button>
          </div> 
        `;

        highRateContainer.appendChild(cardDiv);
      }
    };

   
    loadAllProducts();