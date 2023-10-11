function run(metadata, plataformaOrigem) {
    if(plataformaOrigem== null || plataformaOrigem == undefined){
        metadata = JSON.parse(metadata)
        if(metadata && metadata.headline){
            let link = metadata.source_url.toLowerCase()

            link = link.replace("https://","")
            link = link.replace("www.","")

            if(link.search("facebook") == 0 || link.search("fb") == 0)
            {
                return "Facebook"
            }else{
                if(link.search("instagram") == 0 || link.search("instagr") == 0)
                {
                    return "Instagram"
                }
            }
        }
        
        return "não definido"
    }else{
        return "já informado"
    }

}
test("retorna a plataforma",()=>{
    let metadata = {
        "headline":"Fale conosco",
        "body":null,
        "source_type":"post",
        "source_id":"557597929742482",
        "source_url":"https://fb.me/3iaNH8udU"
    }

    let linkFace = ["https://fb.me/3iaNH8udU","https://www.fb.me/3iaNH8udU","fb.me/3iaNH8udU","https://facebook.com/3iaNH8udU"]
    linkFace.forEach(element => {
        metadata.source_url = element
        expect(run(JSON.stringify(metadata),null)).toBe("Facebook")
    });
    
    let linkInsta = ["https://instagr.com/3iaNH8udU","https://www.instagr.com/3iaNH8udU","instagr.com/3iaNH8udU","https://instagram.com/3iaNH8udU"]
    
    linkInsta.forEach(element => {
        metadata.source_url = element
        expect(run(JSON.stringify(metadata),null)).toBe("Instagram")
    });
    let linkIncorreto = ["https://asfqw.com/3iaNH8udU","https://www.instdfsfdffagr.com/3iaNH8udU","inaastasdsgr.com/3iaNH8udU","https://asddddd.com/3iaNH8udU"]
    
    linkIncorreto.forEach(element => {
        metadata.source_url = element
        expect(run(JSON.stringify(metadata),null)).toBe("não definido")
    });
})