import axios from "axios";

export const fetchDogImg = async () => {
    const res = await axios.get('https://api.thedogapi.com/v1/images/search?has_breeds=true&order=RANDOM&limit=10');
    // console.log('DOge:',res.data)
    return res.data;
};

export const fetchCatImg = async () => {
    const res = await axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=true&limit=10');
    // console.log('KotEReQ:',res.data)
    return res.data;
};
export const fetchCatBreed = async () => {
    const res = await axios.get('https://api.thecatapi.com/v1/breeds?limit=10&page=0');
    // console.log('KotEReQ:',res.data)
    return res.data;
};

export const getCatImgbyId = async () => {
    const res = await axios.get(`https://api.thecatapi.com/v1/images/0XYvRd7oD`)
    // console.log("URL_BY_ID:",JSON.stringify(res.data.url))
    return (res.data)
}
export const getCatbyId = async (breed: { breed: any }) => {
    console.log('GetCatBreed:', breed)

    const res = await axios.get(`https://api.thecatapi.com/v1/images/${breed}`)
    console.log("URL_BY_ID_CAts:",res.data)
    return (res.data)
}
export const getDogbyId = async (breed: { breed: any }) => {
    console.log('GetDogBreed:', breed)

    const res = await axios.get(`https://api.thedogapi.com/v1/images/${breed}`)
    console.log("URL_BY_ID_DOgs:",res.data)
    return (res.data)
}

export const getCatbyIdx = async (url: { url: any }) => {
    console.log('GetCatBreedURL:', url)

    const res = await axios.get(`${url}`)
    console.log("URL_BY_ID_CAts:",res.data)
    return (res.data)
}