const axios = require('axios');
let data = JSON.stringify({
  "title": "Consulta API V2",
  "start_date_time": "2023-04-24T20:23:41.000Z",
  "end_date_time": "2023-04-24T20:53:41.000Z",
  "participants": [
    {
      "id": "e77f5f5e-9eed-46e6-b19f-e52910b0d0b0",
      "role": "MMD"
    },
    {
      "id": "6535f75d-4af4-4d9c-9c5a-0e5956d7d696",
      "role": "PAT"
    }
  ]
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.v2.hom.doutoraovivo.com.br/appointment/',
  headers: { 
    'x-api-key': 'C23REelAOVa9dJmBgdqu82XiwUb5dJqZ7na7KTl9', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});