
const axios = require('axios')
const { v4: uuidv4 } = require('uuid')
const ENDPOINT_BOT = "https://biomarin.http.msging.net/commands"
const TOKEN = "Key cHJpbmNpcGFsYmlvbWFyaW46dXYybEFMU0d5RUtZc0tJNUx6bWI="

const AREAS_ABREVIACAO = [
  "Lipofuscinose Ceroide",
  "Mucopolissacaridose",
  "Fenilcetonúria",
  "Hemofilia",
  "Acondroplasia",
  "Outros assuntos"
]

const AREAS = [
"Lipofuscinose Ceroide Neuronal tipo 2 (CLN2)",
"Mucopolissacaridose IV A ou VI (MPS)",
"Fenilcetonúria (PKU)",
"Hemofilia (HEM)",
"Acondroplasia (ACH)",
"Outros assuntos"
]

const ESTADOS = [
"Acre",
"Alagoas",
"Amapá",
"Amazonas",
"Bahia",
"Ceará",
"Espírito Santo",
"Goiás",
"Maranhão",
"Mato Grosso",
"Mato Grosso do Sul",
"Minas Gerais",
"Pará",
"Paraíba",
"Paraná",
"Pernambuco",
"Piauí",
"Rio de Janeiro",
"Rio Grande do Norte",
"Rio Grande do Sul",
"Rondônia",
"Roraima",
"Santa Catarina",
"São Paulo",
"Sergipe",
"Tocantins",
"Distrito Federal"
]

const ESPECIALISTAS = [
  "Especialistas em CLN2 (MSL)",
  "Especialistas em MPS (MSL)",
  "Especialistas em ACH",
  "Especialistas em MPS"
]

function criarFila(estadoIndice,areaIndice){
  const TEAM = ESTADOS[estadoIndice]+" - "+AREAS_ABREVIACAO[areaIndice]
  let valorRegra=[]

  if(areaIndice == 5) valorRegra = [AREAS[areaIndice]]
  else valorRegra = [AREAS[areaIndice],AREAS_ABREVIACAO[areaIndice]]
  
  axios.post(ENDPOINT_BOT, {
      "id": uuidv4(),
      "to": "postmaster@desk.msging.net",
      "method": "set",
      "uri": "/attendance-queues",
      "type": "application/vnd.iris.desk.attendancequeue+json",
      "resource": {
          "ownerIdentity": "demobot@msging.net",
          "name": TEAM,
          "isActive": true,
          "Priority": 0
      }
    }, {
      headers: {
        'Authorization': TOKEN,
        'content-type': 'text/json'
      }
  }).then(function (responseQueue) {
      console.log(TEAM+" "+responseQueue.status)

      axios.post(ENDPOINT_BOT,{
        "id": uuidv4(),
        "to": "postmaster@desk.msging.net",
        "method": "set",
        "uri": "/rules/",
        "type": "application/vnd.iris.desk.rule+json",
        "resource": {
            "id": uuidv4(),
            "ownerIdentity": "principalbiomarin@msging.net",
            "title": "filtro "+TEAM,
            "team": TEAM,
            "relation": "Equals",
            "isActive": true,
            "conditions":[
                {
                    "property":"Contact.Extras.estado",
                    "relation":"Equals",
                    "values": [ESTADOS[estadoIndice]]
                },
                {
                    "property":"Contact.Extras.área terapêutica",
                    "relation":"Equals",
                    "values": valorRegra
                }
            ],
            "operator":"And",
            "priority":0
        }
    },{
        headers: {
          'Authorization': TOKEN,
          'content-type': 'text/json'
        }
      }).then(function (response) {
        console.log(TEAM+" Regra "+response.status)
      })
  })
}

function listarRegras(){
  axios.post(ENDPOINT_BOT, {
    "id": uuidv4(),
    "to": "postmaster@desk.msging.net",
    "method": "get",
    "uri": "/rules"
  }, {
    headers: {
      'Authorization': TOKEN,
      'content-type': 'text/json'
    }
}).then(function (response) {
  response.data.resource.items.forEach(rule => {
    deletarRegra(rule.id)
  });
})
}

function deletarRegra(ruleId){
  axios.post(ENDPOINT_BOT, {
    "id": uuidv4(),
    "to": "postmaster@desk.msging.net",
    "method": "delete",
    "uri": "/rules/"+ruleId
  }, {
    headers: {
      'Authorization': TOKEN,
      'content-type': 'text/json'
    }
}).then(function (response) {
  console.log(response.data.status)
})
}

function criarFilasEspescialistas(){
  for(let especialistaIndice = 0;especialistaIndice< ESPECIALISTAS.length;especialistaIndice++){
      const TEAM = ESPECIALISTAS[especialistaIndice]
      let valorRegra=[ESPECIALISTAS[especialistaIndice]]
      axios.post(ENDPOINT_BOT, {
        "id": uuidv4(),
        "to": "postmaster@desk.msging.net",
        "method": "set",
        "uri": "/attendance-queues",
        "type": "application/vnd.iris.desk.attendancequeue+json",
        "resource": {
            "ownerIdentity": "demobot@msging.net",
            "name": TEAM,
            "isActive": true,
            "Priority": 1
        }
      }, {
        headers: {
          'Authorization': TOKEN,
          'content-type': 'text/json'
        }
      }).then(function (responseQueue) {
        console.log(TEAM+" "+responseQueue.status)
  
        axios.post(ENDPOINT_BOT,{
          "id": uuidv4(),
          "to": "postmaster@desk.msging.net",
          "method": "set",
          "uri": "/rules/",
          "type": "application/vnd.iris.desk.rule+json",
          "resource": {
              "id": uuidv4(),
              "ownerIdentity": "principalbiomarin@msging.net",
              "title": "filtro "+TEAM,
              "team": TEAM,
              "relation": "Equals",
              "isActive": true,
              "conditions":[
                  {
                      "property":"Contact.Extras.especialista",
                      "relation":"Equals",
                      "values": valorRegra
                  }
              ],
              "operator":"And",
              "priority":2
          }
      },{
          headers: {
            'Authorization': TOKEN,
            'content-type': 'text/json'
          }
        }).then(function (response) {
          console.log(TEAM+" regra "+response.status)
        })
      })
    }
}

function criarTodasAsFilas(){
  for(let estadoIndice = 0;estadoIndice< ESTADOS.length;estadoIndice++){
    for(let areaIndice = 0;areaIndice< AREAS.length;areaIndice++){
      const TEAM = ESTADOS[estadoIndice]+" - "+AREAS_ABREVIACAO[areaIndice]
      let valorRegra=[]
      if(areaIndice == 5){
        valorRegra = [AREAS[areaIndice]]
  
      } else{
        valorRegra = [AREAS[areaIndice],AREAS_ABREVIACAO[areaIndice]]
      }
      axios.post(ENDPOINT_BOT, {
        "id": uuidv4(),
        "to": "postmaster@desk.msging.net",
        "method": "set",
        "uri": "/attendance-queues",
        "type": "application/vnd.iris.desk.attendancequeue+json",
        "resource": {
            "ownerIdentity": "demobot@msging.net",
            "name": TEAM,
            "isActive": true,
            "Priority": 0
        }
      }, {
        headers: {
          'Authorization': TOKEN,
          'content-type': 'text/json'
        }
      }).then(function (responseQueue) {
        console.log(TEAM+" "+responseQueue.status)
  
        axios.post(ENDPOINT_BOT,{
          "id": uuidv4(),
          "to": "postmaster@desk.msging.net",
          "method": "set",
          "uri": "/rules/",
          "type": "application/vnd.iris.desk.rule+json",
          "resource": {
              "id": uuidv4(),
              "ownerIdentity": "principalbiomarin@msging.net",
              "title": "filtro "+TEAM,
              "team": TEAM,
              "relation": "Equals",
              "isActive": true,
              "conditions":[
                  {
                      "property":"Contact.Extras.estado",
                      "relation":"Equals",
                      "values": [ESTADOS[estadoIndice]]
                  },
                  {
                      "property":"Contact.Extras.área terapêutica",
                      "relation":"Equals",
                      "values": valorRegra
                  },
                  {
                      "property":"Contact.Extras.especialista",
                      "relation":"Equals",
                      "values": ["não definido"]
                  }
              ],
              "operator":"And",
              "priority":0
          }
      },{
          headers: {
            'Authorization': TOKEN,
            'content-type': 'text/json'
          }
        }).then(function (response) {
          console.log(TEAM+" Regra "+response.status)
        })
      })
    }
  }
}
criarTodasAsFilas()
criarFilasEspescialistas()
