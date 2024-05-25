const baseURL = "https://dummyjson.com";
// Function to test GET request
const testGet = async ()=>{
    try {
        const response = await axios.get(`${baseURL}/products/1`);
        console.log("GET response:", response.data);
    } catch (error) {
        console.error("Error with GET request:", error);
    }
};
// Function to test POST request
const testPost = async ()=>{
    try {
        const response = await axios.post(`${baseURL}/products/add`, {
            title: "New Product",
            description: "This is a new product."
        });
        console.log("POST response:", response.data);
    } catch (error) {
        console.error("Error with POST request:", error);
    }
};
// Function to test PUT/PATCH request
const testPut = async ()=>{
    try {
        const response = await axios.put(`${baseURL}/products/1`, {
            title: "Updated Product",
            description: "This product has been updated."
        });
        console.log("PUT response:", response.data);
    } catch (error) {
        console.error("Error with PUT request:", error);
    }
};
// Function to test DELETE request
const testDelete = async ()=>{
    try {
        const response = await axios.delete(`${baseURL}/products/1`);
        console.log("DELETE response:", response.data);
    } catch (error) {
        console.error("Error with DELETE request:", error);
    }
};
// Execute the functions
testGet();
testPost();
testPut();
testDelete();
const testAuthAndGetData = async ()=>{
    try {
        // Step 1: Get the token
        const authResponse = await axios.post(`${baseURL}/auth/login`, {
            username: "kminchelle",
            password: "0lelplR"
        });
        const token = authResponse.data.token;
        console.log("Auth token:", token);
        // Step 2: Use the token to access another API
        const authConfig = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const secureResponse = await axios.get(`${baseURL}/auth/users`, authConfig);
        console.log("Secure GET response:", secureResponse.data);
    } catch (error) {
        console.error("Error with auth or secure GET request:", error);
    }
};
// Execute the auth and secure GET request function
testAuthAndGetData();

//# sourceMappingURL=index.c36f364e.js.map
