function run(tipoAgendamento) {
    tipoAgendamento = tipoAgendamento.toLowerCase()
    switch(tipoAgendamento)
    {
        case "raio x":
            return "agendamento recepção"
            break
        case "oftalmologico":
            return "agendamento oftalmologico"
            break
        case "doação de sangue":
        case "dúvidas":            
        case "procedimentos cirurgicos":
            return "agendamento"
            break
        default:
            return "não definido"
            break
    }    
}

test("definindo fila",()=>{
    
})