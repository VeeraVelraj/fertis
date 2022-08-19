async function getAllProducts() {
  var products = [];
  var cards = [];
  const errorMessage =
    "<p>We don't currently have any items in stock, but feel free to add your own product/s </p>";

  await fetch(
    "http://app.twig-me.com/rest/v17/lite/submissions?pagination=%7B%22limit%22%3A150%2C%22offset%22%3A0%7D&filter=%5B%7B%22operator%22%3A%22%3D%22%2C%22value%22%3A%2236%22%2C%22column%22%3A%22FormID%22%7D%5D",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": " application/json",
        jwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcHAudHdpZy1tZS5jb21cL3Jlc3QiLCJpYXQiOjE2NjAyODM4ODUsIm5iZiI6MTY2MDI4Mzg4NSwiZXhwIjoxNjYwODg4Njg1LCJ1c2VyaWQiOjEsIm9yZ3p2aWNlaWQiOjMwMDAyNzkwODQsImVtYWlsaWQiOiJmYXJtZ2F0ZTEzQGdtYWlsLmNvbSJ9.UiE1zz9MEKOCRoekKAzbzJGgNE7wFwD8Yc5D3taQ81g",
        businessDomain: "farmgate1",
        businessTagID: "98NCMBD2KBZ4R",
      },
    }
  )
    .then((response) => response.json())
    .then((res) => {
      products = res.data.elements;
    })
    .catch((_) => cards.push(errorMessage));

  if (products.length > 0 && cards.length < 1) {
    for (const index in products) {
      var productID = products[index].inputs.find(
        (input) => input.label == "Product ID"
      ).value;

      var productName = products[index].inputs.find(
        (input) => input.label == "Product Name"
      ).value;

      var productActualPrice = products[index].inputs.find(
        (input) => input.label == "Product Actual MRP"
      ).value;
      var productPrice = products[index].inputs.find(
        (input) => input.label == "Our Price"
      ).value;

      var productImage = products[index].inputs.find(
        (input) => input.label == "Product Photo1"
      ).value;

      console.log(productName);
      console.log("id", productID);
      console.log("price", productActualPrice);
      console.log("our p", productPrice);

      var card = `
      
      <div class="item item-carousel">
      <div class="products">
        <div class="product" style="width:200px; flex-wrap:wrap">
          <div class="product-image">
            <div class="image">
              <a href="detail.html">
                <img src="${productImage}" alt="" />
                <img src="${productImage}" alt="" class="hover-image" />
              </a>
            </div>
            <div class="tag new"><span>new</span></div>
          </div>
          <div class="product-info text-left">
            <h3 class="name"><a href="detail.html">${productName}</a></h3>
            <div class="rating rateit-small"></div>
            <div class="description"></div>
            <div class="product-price">
              <span class="price"> Rs ${productPrice} </span>
              <span class="price-before-discount">Rs ${productActualPrice}</span>
            </div>
          </div>
          <div class="cart clearfix animate-effect">
            <div class="action">
              <ul class="list-unstyled">
                <li class="add-cart-button btn-group">
                  <button
                    data-toggle="tooltip"
                    class="btn btn-primary icon"
                    type="button"
                    title="Add Cart"
                  >
                    <i class="fa fa-shopping-cart"></i>
                  </button>
                  <button class="btn btn-primary cart-btn" type="button">
                    Add to cart
                  </button>
                </li>
                <li class="lnk wishlist">
                  <a
                    data-toggle="tooltip"
                    class="add-to-cart"
                    href="detail.html"
                    title="Wishlist"
                  >
                    <i class="icon fa fa-heart"></i>
                  </a>
                </li>
                <li class="lnk">
                  <a
                    data-toggle="tooltip"
                    class="add-to-cart"
                    href="detail.html"
                    title="Compare"
                  >
                    <i class="fa fa-signal" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

      cards.push(card);
    }
  } else if (products.length < 1 && cards.length < 1) {
    cards.push(errorMessage);
  }

  return cards;
}
//getAllProducts();

$("#card-container").ready(async function () {
  var cards = await getAllProducts();

  for (const index in cards) {
    var card = cards[index];
    $("#card-container").append(card);
  }
});
