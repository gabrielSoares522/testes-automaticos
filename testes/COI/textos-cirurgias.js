<iframe width="469" height="480" src="https://www.youtube.com/embed/hNp_DHN8O8E" title="Como é feito um exame oftalmológico - Minuto COE (por MZ Multimídia)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

function run(input){
    let casoPossuaPlano = "\n\nCaso você possua plano de saúde que a nossa clínica seja conveniada, você poderá realizar a consulta, exames e a cirurgia pelo seu convênio, incluindo anestesia, instrumentação e consultas pós-operatórias."
    let facilitamos = "\n\nFacilitamos o pagamento da cirurgia em até {parcelas}x sem juros no cartão de crédito."
    let texto = ""
    switch(input){
        case "1":
            texto+= "A cirurgia de catarata particular está a partir do valor de R$ 3.500,00 cada olho, incluindo a lente importada, anestesia, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente."
            texto+= facilitamos.replace("{parcelas}","21")
            texto+= casoPossuaPlano
            break
        case "2":
            texto+= "A cirurgia refrativa a laser (miopia, hipermetropia e astigmatismo) está a partir do valor de R$ 6.000,00 ambos os olhos, incluindo honorários médicos, anestesia, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente."
            texto+= "\n\nCabe ressaltar que a cirurgia só é coberta pelo plano de saúde caso você preencha alguns critérios específicos avaliados em consulta oftalmológica. Portanto, é válido mencionar que o fato de você possuir o convênio médico não é garantia de ter a cirurgia coberta pelo mesmo, sendo necessário o preenchimento de tais critérios."
            break
        case "3":
            texto+= "A cirurgia de crosslinking particular está a partir do valor de R$4.500,00 cada olho, incluindo honorários médicos, anestesia local, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente."
            texto+= facilitamos.replace("{parcelas}","21")
            texto+= casoPossuaPlano
            break
        case "4":
            texto+= "A cirurgia de Retina particular está a partir do valor de R$ 11.800,00 cada olho, incluindo anestesia, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente."
            texto+= facilitamos.replace("{parcelas}","21")
            texto+= casoPossuaPlano
            break
        case "5":
            texto+= "A cirurgia de Injeção Intra-Vítrea particular está a partir do valor de R$ 1.800,00 cada olho, incluindo anestesia, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente."
            texto+= facilitamos.replace("{parcelas}","18")
            texto+= casoPossuaPlano
            break
        case "6":
            texto+= "A cirurgia de Glaucoma particular está a partir do valor de R$ 5.500,00 cada olho, incluindo anestesia, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente."
            texto+= facilitamos.replace("{parcelas}","21")
            texto+= casoPossuaPlano
            break
        case "7":
            texto+= "A cirurgia de Pterígio está a partir do valor de R$2.200,00 cada olho, incluindo honorários médicos, anestesia local, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente."
            texto+= facilitamos.replace("{parcelas}","21")
            texto+= casoPossuaPlano
            break
        case "8":
            texto+= "A cirurgia de Calázio particular está a partir do valor de R$ 2.400,00 cada olho, incluindo anestesia, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente."
            texto+= facilitamos.replace("{parcelas}","21")
            texto+= casoPossuaPlano
            break
        case "9":
            texto+= "A cirurgia de Estrabismo particular está a partir do valor de R$ 7.500,00, incluindo anestesia, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente."
            texto+= facilitamos.replace("{parcelas}","21")
            texto+= casoPossuaPlano
            break
        case "10":
            texto+= "A cirurgia de Blefaroplastia particular está a partir do valor de R$ 6.600,00, incluindo anestesia, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente."
            texto+= facilitamos.replace("{parcelas}","21")
            texto+= "\n\nObs: Possuímos centro cirúrgico próprio em Campo Grande, de alta tecnologia e muito bem equipado"
            break
    }
    texto+="\n\nAgende sua consulta no botão abaixo."

    return texto
}
let resultadosExperados = ["A cirurgia de catarata particular está a partir do valor de R$ 3.500,00 cada olho, incluindo a lente importada, anestesia, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente.\
\n\nFacilitamos o pagamento da cirurgia em até 21x sem juros no cartão de crédito.\
\n\nCaso você possua plano de saúde que a nossa clínica seja conveniada, você poderá realizar a consulta, exames e a cirurgia pelo seu convênio, incluindo anestesia, instrumentação e consultas pós-operatórias.\
\n\nAgende sua consulta no botão abaixo.",
"A cirurgia refrativa a laser (miopia, hipermetropia e astigmatismo) está a partir do valor de R$ 6.000,00 ambos os olhos, incluindo honorários médicos, anestesia, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente.\
\n\nCabe ressaltar que a cirurgia só é coberta pelo plano de saúde caso você preencha alguns critérios específicos avaliados em consulta oftalmológica. Portanto, é válido mencionar que o fato de você possuir o convênio médico não é garantia de ter a cirurgia coberta pelo mesmo, sendo necessário o preenchimento de tais critérios.\
\n\nAgende sua consulta no botão abaixo.",
"A cirurgia de crosslinking particular está a partir do valor de R$4.500,00 cada olho, incluindo honorários médicos, anestesia local, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente.\
\n\nFacilitamos o pagamento da cirurgia em até 21x sem juros no cartão de crédito.\
\n\nCaso você possua plano de saúde que a nossa clínica seja conveniada, você poderá realizar a consulta, exames e a cirurgia pelo seu convênio, incluindo anestesia, instrumentação e consultas pós-operatórias.\
\n\nAgende sua consulta no botão abaixo.",
"A cirurgia de Retina particular está a partir do valor de R$ 11.800,00 cada olho, incluindo anestesia, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente.\
\n\nFacilitamos o pagamento da cirurgia em até 21x sem juros no cartão de crédito.\
\n\nCaso você possua plano de saúde que a nossa clínica seja conveniada, você poderá realizar a consulta, exames e a cirurgia pelo seu convênio, incluindo anestesia, instrumentação e consultas pós-operatórias.\
\n\nAgende sua consulta no botão abaixo.",
"A cirurgia de Injeção Intra-Vítrea particular está a partir do valor de R$ 1.800,00 cada olho, incluindo anestesia, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente.\
\n\nFacilitamos o pagamento da cirurgia em até 18x sem juros no cartão de crédito.\
\n\nCaso você possua plano de saúde que a nossa clínica seja conveniada, você poderá realizar a consulta, exames e a cirurgia pelo seu convênio, incluindo anestesia, instrumentação e consultas pós-operatórias.\
\n\nAgende sua consulta no botão abaixo.",
"A cirurgia de Glaucoma particular está a partir do valor de R$ 5.500,00 cada olho, incluindo anestesia, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente.\
\n\nFacilitamos o pagamento da cirurgia em até 21x sem juros no cartão de crédito.\
\n\nCaso você possua plano de saúde que a nossa clínica seja conveniada, você poderá realizar a consulta, exames e a cirurgia pelo seu convênio, incluindo anestesia, instrumentação e consultas pós-operatórias.\
\n\nAgende sua consulta no botão abaixo.",
"A cirurgia de Pterígio está a partir do valor de R$2.200,00 cada olho, incluindo honorários médicos, anestesia local, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente.\
\n\nFacilitamos o pagamento da cirurgia em até 21x sem juros no cartão de crédito.\
\n\nCaso você possua plano de saúde que a nossa clínica seja conveniada, você poderá realizar a consulta, exames e a cirurgia pelo seu convênio, incluindo anestesia, instrumentação e consultas pós-operatórias.\
\n\nAgende sua consulta no botão abaixo.",
"A cirurgia de Calázio particular está a partir do valor de R$ 2.400,00 cada olho, incluindo anestesia, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente.\
\n\nFacilitamos o pagamento da cirurgia em até 21x sem juros no cartão de crédito.\
\n\nCaso você possua plano de saúde que a nossa clínica seja conveniada, você poderá realizar a consulta, exames e a cirurgia pelo seu convênio, incluindo anestesia, instrumentação e consultas pós-operatórias.\
\n\nAgende sua consulta no botão abaixo.",
"A cirurgia de Estrabismo particular está a partir do valor de R$ 7.500,00, incluindo anestesia, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente.\
\n\nFacilitamos o pagamento da cirurgia em até 21x sem juros no cartão de crédito.\
\n\nCaso você possua plano de saúde que a nossa clínica seja conveniada, você poderá realizar a consulta, exames e a cirurgia pelo seu convênio, incluindo anestesia, instrumentação e consultas pós-operatórias.\
\n\nAgende sua consulta no botão abaixo.",
"A cirurgia de Blefaroplastia particular está a partir do valor de R$ 6.600,00, incluindo anestesia, centro cirúrgico e todas as consultas pós-operatórias até a alta do paciente.\
\n\nFacilitamos o pagamento da cirurgia em até 21x sem juros no cartão de crédito.\
\n\nObs: Possuímos centro cirúrgico próprio em Campo Grande, de alta tecnologia e muito bem equipado\
\n\nAgende sua consulta no botão abaixo."]

test("gerando textos das cirurgias",()=>{
    for(let index =1;index<=10;index++){
        expect(index.toString()+"\n"+run(index.toString())).toBe(index.toString()+"\n"+resultadosExperados[index-1])
    }
})