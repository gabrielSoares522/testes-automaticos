function run(input, documento) {
	input = input.trim()

	if(documento == "CPF"){
		return cpfValido(input)
	} else{
		return cnpjValido(input)
	}
}

function cnpjValido(cnpj) {
 
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;
    
}

function cpfValido(cpf) {
    var Soma = 0
    var Resto
  
    var strCPF = String(cpf).replace(/[^\d]/g, '')
    
    if (strCPF.length !== 11)
       return false
    
    if ([
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
      ].indexOf(strCPF) !== -1)
      return false
  
    for (i=1; i<=9; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(9, 10)) )
      return false
  
    Soma = 0
  
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i)
  
    Resto = (Soma * 10) % 11
  
    if ((Resto == 10) || (Resto == 11)) 
      Resto = 0
  
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
      return false
  
    return true
}
function documentoFormatando(input,documentoValido, documento) {
	input = input.trim()

	if(documento == "CPF"){
		return cpfFormatado(input,documentoValido)
	} else{
		return cnpjFormatado(input,documentoValido)
	}
}

function cnpjFormatado(cnpj,valido){
	cnpj = cnpj.trim()
    cnpj = cnpj.replace(/[^\d]+/g,'')
    if(valido == true || valido == "true"){
        cnpj= cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "$1.$2.$3/$4-$5")
    }
    return cnpj

}
function cpfFormatado(cpf,valido){
	cpf = cpf.trim()
    cpf = cpf.replace(/[^\d]+/g,'')
    if(valido == true || valido == "true"){
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
    }
}

const cpfsValidos = ["014.474.010-93","578.576.440-72","049.943.970-82","238.167.180-35","01447401093","57857644072","04994397082","23816718035"]
const cnpjsValidos = ["92.474.200/0001-02","65.145.852/0001-12","05.761.287/0001-96","31.176.058/0001-14","92474200000102","65145852000112","05761287000196","31176058000114"]

const cpfsInvalidos = ["014.472.010-93","578.51.440-72","049.943.970-","238.167.180-321","01447402193","12857644072","04934397082","23813418035"]
const cnpjsInvalidos = ["92.74.200/0001-02","65.1115.85210001-12","0517611287/0001-96","31.176.028/0001-14","92421300000102","651458000112","05761282131200196","311760112000114"]

describe("retorna verdadeiro se o ", ()=>{
    describe("CPF", ()=>{
        cpfsValidos.forEach(cpf => {
            test(cpf + " é válido", ()=>{
                expect(cpfValido(cpf)).toBe(true)
            })
        })
    })
    describe("CNPJ", ()=>{
        cnpjsValidos.forEach(cnpj => {
            test(cnpj+" é válido", ()=>{
                expect(cnpjValido(cnpj)).toBe(true)
            })
        })
    })

})

describe("retorna false se o ", ()=>{
    describe("CPF", ()=>{
        cpfsInvalidos.forEach(cpf => {
            test(cpf + " é inválido", ()=>{
                expect(cpfValido(cpf)).toBe(false)
            })
        })
    })
    describe("CNPJ", ()=>{
        cnpjsInvalidos.forEach(cnpj => {
            test(cnpj+" é inválido", ()=>{
                expect(cnpjValido(cnpj)).toBe(false)
            })
        })
    })

})

describe("retorna o CPF formatado", ()=>{
    test("01447401093 é formatado para 014.474.010-93", ()=>{
        expect(cpfFormatado("01447401093",true)).toBe("014.474.010-93")
    })

    test("578.576.440-72 é formatado para 578.576.440-72", ()=>{
        expect(cpfFormatado("578.576.440-72",true)).toBe("578.576.440-72")
    })

    test("104.859.736-93 é formatado para 104.859.736-93", ()=>{
        expect(documentoFormatando("104.859.736-93","true","CPF")).toBe("104.859.736-93")
    })
});

describe("retorna o CNPJ formatado", ()=>{
    test("92474200000102 é formatado para 92.474.200/0001-02", ()=>{
        expect(cnpjFormatado("92474200000102",true)).toBe("92.474.200/0001-02")
    })

    test("65.145.852/0001-12 é formatado para 65.145.852/0001-12", ()=>{
        expect(cnpjFormatado("65.145.852/0001-12",true)).toBe("65.145.852/0001-12")
    })
})