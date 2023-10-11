function run(statusDocumentos, corpoDocumentos,talkIzyHashCode,link,dominioTalkIzy,idLead) {
    if(statusDocumentos == "200"){
        let endpointTalkIzy = "/Webhook/AddConsultaLead.aspx"
        corpoDocumentos = JSON.parse(corpoDocumentos)
        /*
        {
    "id": "0a5337f3-3cdd-4511-983d-be65c3dde3ff",
    "title": "Atendimento de pronto atendimento de Canabidiol, paciente gabriel soares e profissional gabriel em 15/3/2023 18:26.",
    "status_appointment": "REA",
    "start_date_time": "2023-04-15T18:26:58.336Z",
    "end_date_time": "2023-04-15T18:56:58.336Z",
    "notes": "notas",
    "reason": "queixa teste",
    "orientation": "orientações",
    "appointment_specialty": "Canabidiol",
    "resume_session": {
        "total_appointment_time": 2425
    }
    


}
        */
        let inicio = corpoDocumentos.start_date_time
        let fim = corpoDocumentos.end_date_time
        let tempo = (corpoDocumentos.resume_session!=undefined)?corpoDocumentos.resume_session.total_appointment_time:0
        link = encodeURI(link)
        return `${dominioTalkIzy}${endpointTalkIzy}?IDLead=${idLead}&IDConsulta=${corpoDocumentos.id}&Titulo=${corpoDocumentos.title}&Especialidade=${corpoDocumentos.appointment_specialty}&Link=${link}&Inicio=${inicio}&Fim=${fim}&Status=${corpoDocumentos.status_appointment}&Nota=${corpoDocumentos.notes}&Orientacoes=${corpoDocumentos.orientation}&Tempo_Consulta=${tempo}&HashCode=${talkIzyHashCode}`      
    }
}

test("aasdsadw",()=>{
    expect(run("200",
    JSON.stringify({
        "id": "fd5337e6-b8ef-4f42-abe0-983cccbc3018",
        "title": "Atendimento de pronto atendimento de Atendimento, paciente Sergio chilvarguer e profissional gabriel em 23/3/2023 18:58.",
        "status_appointment": "SUM",
        "start_date_time": "2023-04-23T18:58:52.509Z",
        "end_date_time": "2023-04-23T19:28:52.509Z",
        "appointment_specialty": "Atendimento",
        "participants": [
            {
                "id": "5",
                "role": "PAT"
            },
            {
                "id": "586125c8-db6c-4e2b-8362-05a1e9e7799b",
                "role": "MMD"
            }
        ],
        "files": [
            {
                "date": "2023-04-23T19:05:08.991Z",
                "encoded": "application/pdf",
                "filePath": "https://media.hom.doutoraovivo.com.br/company/001a2441-cb0d-4567-83be-150a2b52fd99/appointment/fd5337e6-b8ef-4f42-abe0-983cccbc3018/a94c8b19-9874-4125-8a9a-e9db0a6937b1.pdf",
                "nameOriginal": "ATESTADO-19101649.pdf",
                "participant": "586125c8-db6c-4e2b-8362-05a1e9e7799b"
            },
            {
                "date": "2023-04-23T19:05:11.973Z",
                "encoded": "application/pdf",
                "filePath": "https://media.hom.doutoraovivo.com.br/company/001a2441-cb0d-4567-83be-150a2b52fd99/appointment/fd5337e6-b8ef-4f42-abe0-983cccbc3018/5c66daa6-61f1-4e58-a947-c9c8748deb84.pdf",
                "nameOriginal": "EXAME-19101649.pdf",
                "participant": "586125c8-db6c-4e2b-8362-05a1e9e7799b"
            }
        ],
        "messages": [
            {
                "date": "2023-04-23T19:00:46.994Z",
                "message": "ola",
                "participant": "586125c8-db6c-4e2b-8362-05a1e9e7799b"
            },
            {
                "date": "2023-04-23T19:01:01.904Z",
                "message": "Olá dr",
                "participant": "5"
            }
        ],
        "cid10": {
            "category": "N",
            "code": "A058",
            "subcategory": "S",
            "value": "A05.8 Outr intox alimentares bacter espec"
        },
        "upshot": {
            "code": "1",
            "value": "Alta Consulta"
        },
        "prescription_data": [
            {
                "medicines": []
            }
        ]
    }),
    "VJo/UVdAzoJU8V1bn27u3ohr+IbWhTNY3nTwhp98BME=",
    "https://medsimples.hom.dav.med.br/pso/675e1006-50f5-4859-879b-8ed24aa21a2a/emergency?start=PERSON_WAITING_ROOM&header=off&group=Atendimento",
    "http://medsimples.talkizy.com.br",
    "5")).toBe("a")
})