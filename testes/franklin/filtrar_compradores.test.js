function run(compradoresJoinville,compradoresMonteAzul,compradoresAraquari,filial) {
    if(filial == "Joinville" && compradoresJoinville !="sem compradores"){
        return compradoresJoinville.split(",")
    }

    if(filial == "Monte Azul Paulista" && compradoresMonteAzul !="sem compradores"){
        return compradoresMonteAzul.split(",")
    }

    if(filial == "Araquari" && compradoresAraquari !="sem compradores"){
        return compradoresAraquari.split(",")
    }
    
    return "sem compradores"
}

test("retorna lista de compradores equivalente",()=>{
    const compradoresJoinville = "Bruno Pereira,Evandro Liesenberg,Lenise Possamai,Maira Hernandes,Marcia Brassica,Katia Teodoro,Michel Luthke"
    const compradoresMonteAzul = "Maira Hernandes,Marcia Brassica,Paulo Pereira"
    const compradoresAraquari = "sem compradores"

    expect(run(compradoresJoinville,compradoresMonteAzul,compradoresAraquari,"Joinville"))
    .toStrictEqual(["Bruno Pereira","Evandro Liesenberg","Lenise Possamai","Maira Hernandes","Marcia Brassica","Katia Teodoro","Michel Luthke"])
    
    expect(run(compradoresJoinville,compradoresMonteAzul,compradoresAraquari,"Monte Azul Paulista"))
    .toStrictEqual(["Maira Hernandes","Marcia Brassica","Paulo Pereira"])
    
    expect(run(compradoresJoinville,compradoresMonteAzul,compradoresAraquari,"Araquari"))
    .toStrictEqual("sem compradores")
})