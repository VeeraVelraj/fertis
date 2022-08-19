fetch(
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
  .then((res) => res.json())
  .then((res) => {
    console.log(res.data.elements);
    appendData(res.data.elements);
    productCategory(res.data.elements);
    productCategorySide(res.data.elements);
    productName(res.data.elements);
  })
  .catch((err) => console.log(err));

  

function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = "Product ID: " + data[i].inputs[0].value;

    mainContainer.appendChild(div);
  }
}


function productData(data) {
  var mainContainer = document.getElementById("product");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    //   data[i].inputs.find((input)=>input.label=='Product Name');
    var productNameObject = data[i].inputs.find(
      (input) => input.label == "Product Name"
    );
    div.innerHTML = "Product Name: " + productNameObject.value;
    mainContainer.appendChild(div);
  }
}

// function productCategory(data) {
//   var mainContainer = document.getElementById("product");
//   for (var i = 0; i < data.length; i++) {
//     var div = document.createElement("div");
//     //   data[i].inputs.find((input)=>input.label=='Product Name');
//     var productNameObject = data[i].inputs.find(
//       (input) => input.label == "Product Category"
//     );
//     div.innerHTML = "" + productNameObject.value;
//     mainContainer.appendChild(div);
//   }
// }

// function productCategorySide(data) {
//   var mainContainer = document.getElementById("productCategory");
//   for (var i = 0; i < data.length; i++) {
//     var div = document.createElement("div");
//     //   data[i].inputs.find((input)=>input.label=='Product Name');
//     var productNameObject = data[i].inputs.find(
//       (input) => input.label == "Product Category"
//     );
//     div.innerHTML = "" + productNameObject.value;
//     mainContainer.appendChild(div);
//   }
// }

function productName(data) {
  var mainContainer = document.getElementById("productName");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    //   data[i].inputs.find((input)=>input.label=='Product Name');
    var productNameObject = data[i].inputs.find(
      (input) => input.label == "Product Name"
    );
    div.innerHTML = "Product Name: " + productNameObject.value;
    mainContainer.appendChild(div);
  }
}
// function productImage(data) {
//   var mainContainer = document.getElementById("productImage");
//   for (var i = 0; i < data.length; i++) {
//     var div = document.createElement("div");
   

//     //   data[i].inputs.find((input)=>input.label=='Product Name');
//     var productNameObject = data[i].inputs.find(
//       (input) => input.label == "Product Photo-1"
//     );
//     var image = document.createElement("img");
//     image.src = "" + productNameObject.value;
//     mainContainer.appendChild(image);
//   }
// }

// var card = '<div class="productImage"> <div> <img src={Product Photo-1}></div></div>';
if (products.length > 0 && cards.length < 1) {
  for (const index in products) {

      var productID = products[index].inputs.find(
          (input) => input.label == "Product ID"
      ).value

      var productName = products[index].inputs.find(
          (input) => input.label == "Product Name"
      ).value

      var productActualPrice = products[index].inputs.find(
          (input) => input.label == "Product Actual MRP"
      ).value
      var productPrice = products[index].inputs.find(
          (input) => input.label == "Our Price"
      ).value

      console.log(productName)
      console.log("id", productID)
      console.log("price", productActualPrice)
      console.log("our p", productPrice)


      }

    }
