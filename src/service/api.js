import axios from 'axios';

const restApiEndpoint = "http://localhost:8000"

export const getStock = async () => {
    return await axios.get(restApiEndpoint + `/getStock`)
        .then(response => {
            if (response.status === 200) {
                return response.data;
            } else {
                throw Error("ERROR");
            }
        })

}

export const addStock = async (stock) => {
    return await axios.post(restApiEndpoint + `/addStock`, { stock: stock })
        .then(response => {
            if (response.status === 200) {
                return response.data;
            } else {
                throw Error("ERROR");
            }
        })

}

export const buy = async (topic) => {
    return await axios.post(restApiEndpoint + `/buy`, { topic: topic })
        .then(response => {
            if (response.status === 200) {
                return response.data;
            } else {
                throw Error("ERROR");
            }
        })

}
