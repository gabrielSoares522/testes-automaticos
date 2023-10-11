function converter(dataString){
    let dados = dataString.split("-")

    return dados[2]+"/"+dados[1]+"/"+dados[0]

}

function coletarIDPagamento(pagamentoLeadBody, pagamentoLeadStatus) {
    if(pagamentoLeadStatus=="200"){
        pagamentoLeadBody = JSON.parse(pagamentoLeadBody)
        return Object.keys(pagamentoLeadBody)[0]
    }
}
function run(documentoColetado,dominioTalkizy,talkIzyHashCode,IDLead,IDPagamento,IDConsulta) {   
    documentoColetado = JSON.parse(documentoColetado)
    
    let Link = encodeURIComponent(documentoColetado.filePath)
    let TipoArquivo = documentoColetado.encoded
    let NomeArquivo = documentoColetado.nameOriginal

    let Data = documentoColetado.date

    let TipoDocumento =documentoColetado.nameOriginal.split("-")[0]
    switch(TipoDocumento){
        case "RECEITA":
            TipoDocumento = "RECEITA"
            break
        case "ATESTADO":
            TipoDocumento = "ATESTADO"
            break
        case "EXAME":
            TipoDocumento = "EXAME"
            break
        case "ENCAMINHAMENTO":
            TipoDocumento = "ENCAMINHAMENTO"
            break
        case "RELATORIO":
            TipoDocumento = "RELATORIO"
            break
        default:
            TipoDocumento = "OUTRO"
            break
    }
    return `${dominioTalkizy}/Webhook/AddDocumentosLead.aspx?IDConsulta=${IDConsulta}&IDLead=${IDLead}&IDPagamento=${IDPagamento}&TipoDocumento=${TipoDocumento}&Data=${Data}&NomeArquivo=${NomeArquivo}&TipoArquivo=${TipoArquivo}&Link=${Link}&HashCode=${talkIzyHashCode}`
}

test("montando url",()=>{
    expect(run(JSON.stringify({
        "date": "2023-04-15T18:28:52.485Z",
        "encoded": "application/pdf",
        "filePath": "https://media.hom.doutoraovivo.com.br/company/001a2441-cb0d-4567-83be-150a2b52fd99/appointment/0a5337f3-3cdd-4511-983d-be65c3dde3ff/3714a39d-0e5b-48f0-97fa-5d2d4f2e2972.pdf",
        "nameOriginal": "Tutoriais para Gestores.pdf",
        "participant": "2"
    }),"http://medsimples.talkizy.com.br","VJo/UVdAzoJU8V1bn27u3ohr+IbWhTNY3nTwhp98BME=",2,0,0)).toBe("http://medsimples.talkizy.com.br/Webhook/AddDocumentosLead.aspx?IDConsulta=0a5337f3-3cdd-4511-983d-be65c3dde3ff&IDLead=2&IDPagamento=0&TipoDocumento=OUTRO&Data=2023-04-15T18:28:52.485Z&NomeArquivo=Tutoriais para Gestores.pdf&TipoArquivo=application/pdf&Link=https://media.hom.doutoraovivo.com.br/company/001a2441-cb0d-4567-83be-150a2b52fd99/appointment/0a5337f3-3cdd-4511-983d-be65c3dde3ff/3714a39d-0e5b-48f0-97fa-5d2d4f2e2972.pdf&HashCode=VJo/UVdAzoJU8V1bn27u3ohr+IbWhTNY3nTwhp98BME=")
})
test("convertendo dados",()=>{
    expect(converter("1999-10-11")).toBe("11/10/1999")
})
test("coletando id pagamento",()=>{
    expect(coletarIDPagamento('{"0":"Pagamento registrado com sucesso!"}',"200")).toBe("0")
})