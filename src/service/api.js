import axios from 'axios';

const restApiEndpoint = "http://localhost:8000"

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
