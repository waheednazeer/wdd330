const baseURL = "http://server-nodejs.cit.byui.edu:3000/";

async function convertToJson(res) {
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw { name: "servicesError", message: data}
    }
  }
export default class ExternalServices {
    constructor() {
      // this.category = category;
      // this.path = `../json/${this.category}.json`;
    }
    async getData(category) {
      const response = await fetch(`${baseURL}products/search/${category}`);
      const data = await convertToJson(response);
      console.log(data.Result);
      return data.Result;
    }
    async findProductById(id) {
      const response = await fetch(`${baseURL}product/${id}`);
      const data = await convertToJson(response);
      return data.Result;
    }

  }