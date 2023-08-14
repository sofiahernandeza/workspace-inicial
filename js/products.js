//dirección para obtener el listado en formato json:
const LIST_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";

fetch(LIST_URL)
  .then(response => {
    // Verificar si la respuesta es exitosa (código de estado 200)
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    // Parsear la respuesta como JSON y devolver los datos
    return response.json();
  })
  .then(data => {
    // Aquí puedes trabajar con los datos obtenidos en formato JSON
    const productsList = document.getElementById('container');
        data.products.forEach(product => {
            const li = document.createElement('li');
            li.className = "product-item";
            li.innerHTML = 
               `<h5>${product.name}</h5>
                <p>${product.description}</p>
                <p>Price: ${product.cost} ${product.currency}</p>
                <p>Sold: ${product.soldCount}</p>
                <img src="${product.image}" alt="${product.name}"> `
            ;
            productsList.appendChild(li);
            console.log(data);
  })
  .catch(error => {
    // En caso de error, manejar la excepción
    console.error('Error al obtener los datos:', error);
  });

})