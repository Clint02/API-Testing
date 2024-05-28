const baseURL = 'https://dummyjson.com'

// Function HTTP Method Get -> Read All Data
const getAllData = async () => {
  try {
    const response = await axios.get(`${baseURL}/products`)
    console.log('GET All response:', response.data)
  } catch (error) {
    console.error('Error with GET All request:', error)
  }
}

// Function HTTP Method GET Data by ID -> Read Specific Data
const getDatabyID = async () => {
  try {
    const response = await axios.get(`${baseURL}/products/5`)
    console.log('GET Specific response:', response.data)
  } catch (error) {
    console.error('Error with GET Specific request:', error)
  }
}

// Function HTTP Method POST Data -> Create New Data
const postData = async () => {
  try {
    const response = await axios.post(`${baseURL}/products/add`, {
      title: 'Website Testing',
      description: 'This is a new product.',
    })
    console.log('POST response:', response.data)
  } catch (error) {
    console.error('Error with POST request:', error)
  }
}

// Function HTTP Method PUT/PATCH Data -> Update Data
const putData = async () => {
  try {
    const response = await axios.put(`${baseURL}/products/5`, {
      title: 'Updated Product',
      description: 'This product has been updated.',
    })
    console.log('PUT response:', response.data)
  } catch (error) {
    console.error('Error with PUT request:', error)
  }
}

// Function HTTP Method DELETE Data -> Delete/Remove Data
const deleteData = async () => {
  try {
    const response = await axios.delete(`${baseURL}/products/1`)
    console.log('DELETE response:', response.data)
  } catch (error) {
    console.error('Error with DELETE request:', error)
  }
}

// Consume API with Token
const getRestrictedData = async () => {
  try {
    // Step 1: Get the token
    const authResponse = await axios.post(`${baseURL}/auth/login`, {
      username: 'alexanderj',
      password: 'alexanderjpass',
    })
    const token = authResponse.data.token
    console.log('Auth token:', token)

    // Step 2: Use the token to access restricted API
    const authConfig = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const secureResponse = await axios.get(`${baseURL}/auth/users`, authConfig)
    console.log('GET Restricted response:', secureResponse.data)
  } catch (error) {
    console.error('Error with GET Restricted request:', error)
  }
}

// Execute the functions
getAllData()
getDatabyID()
postData()
putData()
deleteData()
getRestrictedData()
