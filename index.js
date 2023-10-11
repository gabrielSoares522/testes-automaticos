let documentos = [
    "09.597.080_0001-89",
    "095.195.717-10",
    "055.034.627-93",
    "622.484.803-34",
    "705.076.193-15",
    "009.360.033-08",
    "004.250.213-60",
    "001.863.505-97",
    "000.428.333-37",
    "241.818.113-87",
    "228.935.803-78",
    "001.723.543-07",
    "416.041.803-15",
    "005.472.563-10",
    "00.802.246_0001-87",
    "05.205.298_0001-90",
    "912.356.933-68",
    "201.748.373-72",
    "309.437.443-34",
    "865.680.193-72",
    "17.759.141_0002-76",
    "038.738.274-76",
    "004.529.643-00",
    "436.443.334-91",
    "388.947.503-53",
    "013.598.503-09",
    "10.361.635_0001-78",
    "219.006.043-53",
    "154.282.813-91",
    "419.221.663-91",
    "987.273.113-68",
    "191.826.273-04",
    "631.066.473-53",
    "381.660.033-68",
    "07.376.187_0001-71",
    "209.599.073-00",
    "002.701.087-26",
    "434.579.083-20",
    "01.755.087_0001-70",
    "05.680.190_0001-59",
    "08.778.034_0001-13",
    "277.308.081-53",
    "001.431.123-25",
    "462.354.503-20",
    "465.946.393-15",
    "109.957.063-87",
    "052.332.627-03",
    "423.959.253-49",
    "002.054.343-39",
    "036.618.903-44",
    "07.207.034_0001-09",
    "00.933.227_0001-90",
    "003.906.323-25",
    "191.390.633-72",
    "246.441.023-34",
    "788.6 . -",
    "002.999.443-87",
    "358.494.873-87",
    "005.170.313-02",
    "363.009.423-68",
    "17.033.057_0001-90",
    "015.578.543-51",
    "781.998.913-00",
    "035.938.524-97",
    "390.477.503-06",
    "907.906.263-49",
    "887.160.740-68",
    "589.848.603-87",
    "440.876.163-04",
    "666.227.863-72",
    "049.291.723-06",
    "091.219.783-87",
    "978.076.563-87",
    "048.968.203-04",
    "295.687.063-72",
    "310.042.883-87",
    "163.329.113-87",
    "10.467.277_0001-82",
    "069.443.937-19",
    "875.104.993-72"
  ]
 

const get = async (url) => {
    const response = await axios.get(url)
    //.then(function (response) {
        // manipula o sucesso da requisição
        if(response.status == 200){
            //console.log(url)
            console.log(response.status);
        }
    /*})
    .catch(function (error) {
        // manipula erros da requisição
        console.error("error "+url);
    })
    .finally(function () {
        // sempre será executado
    });*/
}
const axios = require('axios');
//let documento = "727.488.423-91"
async function listandoAsync () {

    for(let documento of documentos){
        documento = documento.replace(/[^0-9]/g,'')
        console.log("cpf: "+documento)
        let url = `http://localhost:61940/api/InformakonV4/Cliente/ApenasEmpreendimentos/${documento}?incluirSemContrato=false`
        url +=`&apenas=JAC%2CSLU`
        //console.log(url)

        await get(url)

    }
}
listandoAsync()