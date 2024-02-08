import wretch from 'wretch';

const generateProducts = async () => {
  try {
    const response = await wretch("https://api-3wa-ecomm-524fde41edfa.herokuapp.com/api/product").get().json();
    return response; 
  } catch (error) {
    console.error("Erreur lors de la récupération des produits:", error);
    return []; 
  }
};

export default generateProducts;