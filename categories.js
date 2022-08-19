fetch(
  "http://app.twig-me.com/rest/v17/lite/submissions?pagination=%7B%22limit%22%3A150%2C%22offset%22%3A0%7D&filter=%5B%7B%22operator%22%3A%22%3D%22%2C%22value%22%3A%2259%22%2C%22column%22%3A%22FormID%22%7D%5D",
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

    productCategory(res.data.elements);
    productSideCategory(res.data.elements);
  })
  .catch((err) => console.log(err));

function productSideCategory(data) {
  var mainContainer = document.getElementById("productSideCategory");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    //   data[i].inputs.find((input)=>input.label=='Product Name');
    var productNameObject = data[i].inputs.find(
      (input) => input.label == "Category Name"
    );
    div.innerHTML = "" + productNameObject.value;
    mainContainer.appendChild(div);
  }
}


function productCategory(data) {
  var mainContainer = document.getElementById("productCategory");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    //   data[i].inputs.find((input)=>input.label=='Product Name');
    var productNameObject = data[i].inputs.find(
      (input) => input.label == "Category Name"
    );
    div.innerHTML = "" + productNameObject.value;
    mainContainer.appendChild(div);
  }
}