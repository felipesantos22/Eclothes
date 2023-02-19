const chothesApi = async () => {
    const data = await fetch('https://dummyjson.com/products');
    const response = data.json();
    console.log(response);
    return response;
}

export default chothesApi;