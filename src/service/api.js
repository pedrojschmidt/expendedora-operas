import axios from 'axios';

const restApiEndpoint = "http://localhost:8000"

export const getStock = async (type) => {
    return await axios.post(restApiEndpoint + `/getStock`, { type: type })
        .then(response => {
            if (response.status === 200) {
                return response.data;
            } else {
                throw Error("ERROR");
            }
        })

}

export const addStock = async (stock, type) => {
    return await axios.post(restApiEndpoint + `/addStock`, { stock: stock, type: type })
        .then(response => {
            if (response.status === 200) {
                return response.data;
            } else {
                throw Error("ERROR");
            }
        })

}

export const buy = async (type, topic) => {
    return await axios.post(restApiEndpoint + `/buy`, { type: type, topic: topic })
        .then(response => {
            if (response.status === 200) {
                return response.data;
            } else {
                throw Error("ERROR");
            }
        })

}
