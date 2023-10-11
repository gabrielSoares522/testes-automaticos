function run(status,corpo) {
    let resultado = false
	try{
	if(status == "422"){
		corpo = JSON.parse(corpo)
        corpo.detail.forEach((detail)=>{
            if(detail.message == "A person with same Email already exists"){
                resultado = true
                
            }
        })
	}
	} catch (ex) {

	}
	return resultado
}

test("emailJaUtilizado",()=>{
    expect(run("422",JSON.stringify({
        "code":422,
        "message": "Person invalid",
        "trace": "9c86b41a03ce2d748f10e53210324e17a607362f",
        "i18n": {
            "phrase": "entity.validation.exception",
            "mustache": {
                "entity": "Person"
            }
        },
        "detail": [
            {
                "message":"A person with same Email already exists",
                "i18n": {
                    "phrase": "entity.unique.attribute.already.exists",
                    "mustache": { "field": "email" }
                }
            }
        ]
    }))).toBe(true)
})