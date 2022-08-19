jQuery(document).ready(function() {
    "use strict";

/*===================================================================================*/
/*	OWL CAROUSEL
/*===================================================================================*/
jQuery(function () {
    var dragging = true;
    var owlElementID = "#owl-main";

    function fadeInReset() {
        if (!dragging) {
            jQuery(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").stop().delay(800).animate({ opacity: 0 }, { duration: 400, easing: "easeInCubic" });
        }
        else {
            jQuery(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3").css({ opacity: 0 });
        }
    }

    function fadeInDownReset() {
        if (!dragging) {
            jQuery(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").stop().delay(800).animate({ opacity: 0, top: "-15px" }, { duration: 400, easing: "easeInCubic" });
        }
        else {
            jQuery(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3").css({ opacity: 0, top: "-15px" });
        }
    }

    function fadeInUpReset() {
        if (!dragging) {
            jQuery(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").stop().delay(800).animate({ opacity: 0, top: "15px" }, { duration: 400, easing: "easeInCubic" });
        }
        else {
            $(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3").css({ opacity: 0, top: "15px" });
        }
    }

    function fadeInLeftReset() {
        if (!dragging) {
            jQuery(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").stop().delay(800).animate({ opacity: 0, left: "15px" }, { duration: 400, easing: "easeInCubic" });
        }
        else {
            jQuery(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3").css({ opacity: 0, left: "15px" });
        }
    }

    function fadeInRightReset() {
        if (!dragging) {
            jQuery(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").stop().delay(800).animate({ opacity: 0, left: "-15px" }, { duration: 400, easing: "easeInCubic" });
        }
        else {
            jQuery(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3").css({ opacity: 0, left: "-15px" });
        }
    }

    function fadeIn() {
        jQuery(owlElementID + " .active .caption .fadeIn-1").stop().delay(500).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeIn-2").stop().delay(700).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeIn-3").stop().delay(1000).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
    }

    function fadeInDown() {
        jQuery(owlElementID + " .active .caption .fadeInDown-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInDown-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInDown-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
    }

    function fadeInUp() {
        jQuery(owlElementID + " .active .caption .fadeInUp-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInUp-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInUp-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
    }

    function fadeInLeft() {
        jQuery(owlElementID + " .active .caption .fadeInLeft-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInLeft-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
    }

    function fadeInRight() {
        jQuery(owlElementID + " .active .caption .fadeInRight-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInRight-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        jQuery(owlElementID + " .active .caption .fadeInRight-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
    }

    jQuery(owlElementID).owlCarousel({

        autoPlay: 5000,
        stopOnHover: true,
        navigation: true,
        pagination: true,
        singleItem: true,
        addClassActive: true,
        transitionStyle: "fade",
        navigationText: ["<i class='icon fa fa-angle-left'></i>", "<i class='icon fa fa-angle-right'></i>"],

        afterInit: function() {
            fadeIn();
            fadeInDown();
            fadeInUp();
            fadeInLeft();
            fadeInRight();
        },

        afterMove: function() {
            fadeIn();
            fadeInDown();
            fadeInUp();
            fadeInLeft();
            fadeInRight();
        },

        afterUpdate: function() {
            fadeIn();
            fadeInDown();
            fadeInUp();
            fadeInLeft();
            fadeInRight();
        },

        startDragging: function() {
            dragging = true;
        },

        afterAction: function() {
            fadeInReset();
            fadeInDownReset();
            fadeInUpReset();
            fadeInLeftReset();
            fadeInRightReset();
            dragging = false;
        }

    });

if (jQuery(owlElementID).hasClass("owl-one-item")) {
    jQuery(owlElementID + ".owl-one-item").data('owlCarousel').destroy();
}

jQuery(owlElementID + ".owl-one-item").owlCarousel({
    singleItem: true,
    navigation: false,
    pagination: false
});




jQuery('.home-owl-carousel').each(function(){

    var owl = $(this);
    var  itemPerLine = owl.data('item');
    if(!itemPerLine){
        itemPerLine = 5;
    }
    owl.owlCarousel({
        items : itemPerLine,
       itemsDesktop : [1199,3],
        itemsTablet:[991,2],
        navigation : true,
        pagination : false,

        navigationText: ["", ""]
    });
});

jQuery('.homepage-owl-carousel').each(function(){

    var owl = $(this);
    var  itemPerLine = owl.data('item');
    if(!itemPerLine){
        itemPerLine = 4;
    }
    owl.owlCarousel({
        items : itemPerLine,
        itemsTablet:[991,2],
        itemsDesktop : [1199,3],
        navigation : true,
        pagination : false,

        navigationText: ["", ""]
    });
});

jQuery(".blog-slider").owlCarousel({
    items : 3,
    itemsDesktopSmall :[979,2],
    itemsDesktop : [1199,3],
    navigation : true,
    slideSpeed : 300,
    pagination: false,
    navigationText: ["", ""]
});

jQuery(".best-seller").owlCarousel({
    items : 3,
    navigation : true,
    itemsDesktopSmall :[979,2],
    itemsDesktop : [1199,2],
    slideSpeed : 300,
    pagination: false,
    paginationSpeed : 400,
    navigationText: ["", ""]
});

jQuery(".sidebar-carousel").owlCarousel({
    items : 1,
    itemsTablet:[978,1],
    itemsDesktopSmall :[979,2],
    itemsDesktop : [1199,1],
    navigation : true,
    slideSpeed : 300,
    pagination: false,
    paginationSpeed : 400,
    navigationText: ["", ""]
});

jQuery(".brand-slider").owlCarousel({
    items :6,
    navigation : true,
    slideSpeed : 300,
    pagination: false,
    paginationSpeed : 400,
    navigationText: ["", ""]
});    
jQuery("#advertisement").owlCarousel({
    items : 1,
	itemsTablet:[978,1],
    itemsDesktopSmall :[979,1],
    itemsDesktop : [1199,1],
    navigation : true,
    slideSpeed : 300,
    pagination: true,
    paginationSpeed : 400,
    navigationText: ["", ""]
});    



});

/*===================================================================================*/
/*  LAZY LOAD IMAGES USING ECHO
/*===================================================================================*/
jQuery(function(){
    echo.init({
        offset: 100,
        throttle: 250,
        unload: false
    });
});

/*===================================================================================*/
/*  RATING
/*===================================================================================*/

jQuery(function(){
    jQuery('.rating').rateit({max: 5, step: 1, value : 4, resetable : false , readonly : true});
});

/*===================================================================================*/
/* PRICE SLIDER
/*===================================================================================*/
jQuery(function () {

// Price Slider
if (jQuery('.price-slider').length > 0) {
    jQuery('.price-slider').slider({
        min: 100,
        max: 700,
        step: 10,
        value: [200, 500],
        handle: "square"

    });

}

});


/*===================================================================================*/
/* SINGLE PRODUCT GALLERY
/*===================================================================================*/
jQuery(function(){
    jQuery('#owl-single-product').owlCarousel({
        items:1,
        itemsTablet:[768,3],
        itemsDesktop : [1199,1],
        itemsTablet : [992,1],
        itemsDesktopSmall : [768,3]

    });

    jQuery('#owl-single-product-thumbnails').owlCarousel({
        items: 4,
        pagination: true,
        rewindNav: true,
        itemsTablet : [992,4],
        itemsDesktopSmall :[768,4],
        itemsDesktop : [992,1]
    });

    jQuery('#owl-single-product2-thumbnails').owlCarousel({
        items: 6,
        pagination: true,
        rewindNav: true,
        itemsTablet : [768, 4],
        itemsDesktop : [1199,3]
    });

    jQuery('.single-product-slider').owlCarousel({
        stopOnHover: true,
        rewindNav: true,
        singleItem: true,
        pagination: true
    });

  
});





/*===================================================================================*/
/*  WOW 
/*===================================================================================*/

jQuery(function () {
    new WOW().init();
});


/*===================================================================================*/
/*  TOOLTIP 
/*===================================================================================*/
jQuery("[data-toggle='tooltip']").tooltip(); 

// jQuery("#card-container").each(async function() {
//     var cards = await getAllProducts();

//     for (const index in cards) {
//         var card = cards[index];
//         jQuery("#card-container").append(card);
//     }
    
// });

})



// async function getAllProducts() {
//     var products = [];
//     var cards = [];
//   //  const errorMessage = "<p>We don't currently have any items in stock, but feel free to add your own product/s </p>";
    
//     await fetch(  "http://app.twig-me.com/rest/v17/lite/submissions?pagination=%7B%22limit%22%3A150%2C%22offset%22%3A0%7D&filter=%5B%7B%22operator%22%3A%22%3D%22%2C%22value%22%3A%2236%22%2C%22column%22%3A%22FormID%22%7D%5D",
//     {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": " application/json",
//           jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcHAudHdpZy1tZS5jb21cL3Jlc3QiLCJpYXQiOjE2NjAyODM4ODUsIm5iZiI6MTY2MDI4Mzg4NSwiZXhwIjoxNjYwODg4Njg1LCJ1c2VyaWQiOjEsIm9yZ3p2aWNlaWQiOjMwMDAyNzkwODQsImVtYWlsaWQiOiJmYXJtZ2F0ZTEzQGdtYWlsLmNvbSJ9.UiE1zz9MEKOCRoekKAzbzJGgNE7wFwD8Yc5D3taQ81g",
//           businessDomain: "farmgate1",
//           businessTagID: "98NCMBD2KBZ4R",
//         },
//       })
//     .then(response => response.json())
//     .then(res => {
//         products = res.data.elements}
//         )
//     .catch(_ => cards.push(errorMessage));

//     console.log(products)

//     if (products.length > 0 && cards.length < 1) {
//         for (const index in products) {

//         var productID = products[index].inputs.find(
//             (input) => input.label == "Product ID"
//             ).value

//         var productName = products[index].inputs.find(
//             (input) => input.label == "Product Name"
//             ).value
    
//         var productActualPrice = products[index].inputs.find(
//             (input) => input.label == "Product Actual MRP"
//           ).value
//         var productPrice = products[index].inputs.find(
//             (input) => input.label == "Our Price"
//           ).value

//           console.log(productName)
//           console.log("id",productID)
//           console.log("price",productActualPrice)
//           console.log("our p", productPrice) 

          
        

//             // var productName = product.name;
//             // var productImageURL = product.imageURL;
            
//             // var productDescription = product.description;

//             var card =`<div class="item item-carousel">
// <div class="products">
//   <div class="product">
//     <div class="product-image">
//       <div class="image">
//         <a href="detail.html">
//           <img
//           src="https://dictionary.cambridge.org/images/thumb/tomato_noun_001_17860.jpg?version=5.0.250
//             alt=""
//           />
//           <img
//           src="https://dictionary.cambridge.org/images/thumb/tomato_noun_001_17860.jpg?version=5.0.250
//             alt=""
//             class="hover-image"
//           />
//         </a>
//       </div>
    

//       <div class="tag new"><span>new</span></div>
//     </div>
  

//     <div class="product-info text-left">
//       <h3 class="name">
//         <a href="detail.html">${productName}</a>
//       </h3>
//       <div class="rating rateit-small"></div>
//       <div class="description"></div>
//       <div class="product-price">
//         <span class="price"> ${productPrice} </span>
//         <span class="price-before-discount">${productActualPrice}</span>
//       </div>
      
//     </div>
    
//     <div class="cart clearfix animate-effect">
//       <div class="action">
//         <ul class="list-unstyled">
//           <li class="add-cart-button btn-group">
//             <button
//               class="btn btn-primary icon"
//               data-toggle="dropdown"
//               type="button"
//             >
//               <i class="fa fa-shopping-cart"></i>
//             </button>
//             <button
//               class="btn btn-primary cart-btn"
//               type="button"
//             >
//               Add to cart
//             </button>
//           </li>
//           <li class="lnk wishlist">
//             <a
//               class="add-to-cart"
//               href="detail.html"
//               title="Wishlist"
//             >
//               <i class="icon fa fa-heart"></i>
//             </a>
//           </li>
//           <li class="lnk">
//             <a
//               class="add-to-cart"
//               href="detail.html"
//               title="Compare"
//             >
//               <i
//                 class="fa fa-signal"
//                 aria-hidden="true"
//               ></i>
//             </a>
//           </li>
//         </ul>
//       </div>
     
//     </div>
   
//   </div>
  
// </div>

// </div>
// `

//             cards.push(card);
//         }
//      } 
//      //else if (products.length < 1 && cards.length < 1) {
//     //     cards.push(errorMessage);
//     // }

//     return cards;
// }

// jQuery("#card-container").ready(async function(){
//     var cards = await getAllProducts();

//     for (const index in cards) {
//         var card = cards[index];
//         jQuery("#card-container").append(card);
//     }
// });

