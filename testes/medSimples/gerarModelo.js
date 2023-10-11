
function run(){
    let codigosProduto = ["0uk9b53x7t","9fwgpth363"]

    let codigosCatalogo = ["6510150329006804","6064670740281982","624337315789651"]
    let requisicao = [
     ]
    codigosCatalogo.forEach((codigoCatalogo)=>{
        codigosProduto.forEach((codigoProduto)=>{
            console.log(JSON.stringify(modeloMensagem(codigoCatalogo,codigoProduto,0)))
        })
    })
}
function modeloMensagem(codigoCatalogo,codigoProduto,index=0){
    if(index = 0){
        return {
            "type":"interactive",
            "interactive":{
               "type":"product",
               "body":{
                  "text":"Templates"
               },
               "footer":{
                  "text":"Nossas melhores soluções prontas para implantação e uso."
               },
               "action":{
                  "catalog_id": codigoCatalogo,
                  "product_retailer_id": codigoProduto
               }
            }
         }
    }
    return {
        "type":"interactive",
        "interactive":{
           "type":"product_list",
           "header":{
              "type":"text",
              "text":"cabeçalho"
           },
           "body":{
              "text":"Corpo"
           },
           "footer":{
              "text":"Nossas melhores soluções prontas para implantação e uso."
           },
           "action":{
              "catalog_id": codigoCatalogo,
              "sections":[
                 {
                    "title":"Produtos",
                    "product_items":[
                       {
                          "product_retailer_id": codigoProduto
                       }
                    ]
                 }
              ]
           }
        }
     }
}