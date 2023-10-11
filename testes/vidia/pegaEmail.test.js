function run(corpo, status,atendente,bypass) {
    if(status == "200" && atendente == "undefined")
    {
        corpo = JSON.parse(corpo)
        let agentIdentity = corpo.resource.items[0].agentIdentity

        let email = agentIdentity.split("@")[0]

        email = email.replace("%40","@")
        return email
    }
}

test("ssss",()=>{
    expect(run(JSON.stringify(
        {
            "type": "application/vnd.lime.collection+json",
            "resource": {
                "total": 2,
                "itemType": "application/vnd.iris.ticket+json",
                "items": [
                    {
                        "id": "bf845e9d-27fc-43b7-84ba-0185f4624c2b",
                        "sequentialId": 93,
                        "ownerIdentity": "principal370@msging.net",
                        "customerIdentity": "bbb42d31-c993-4681-98e4-569d8cb62c0a@tunnel.msging.net",
                        "customerDomain": "tunnel.msging.net",
                        "agentIdentity": "comunicacao%40redehsvp.com.br@blip.ai",
                        "provider": "Lime",
                        "status": "ClosedAttendant",
                        "storageDate": "2023-01-27T17:59:20.880Z",
                        "openDate": "2023-01-27T17:59:21.420Z",
                        "closeDate": "2023-01-27T17:59:54.250Z",
                        "statusDate": "2023-01-27T17:59:54.250Z",
                        "externalId": "bf845e9d-27fc-43b7-84ba-0185f4624c2b",
                        "rating": 0,
                        "team": "Belo oriente - Agendamento",
                        "unreadMessages": 0,
                        "closed": true,
                        "closedBy": "comunicacao%40redehsvp.com.br@blip.ai",
                        "tags": [
                            "Solicitação"
                        ],
                        "firstResponseDate": "2023-01-27T17:59:33.450Z",
                        "priority": 0,
                        "isAutomaticDistribution": true,
                        "distributionType": "Redis"
                    },
                    {
                        "id": "cda1ea77-7798-4657-8c49-0185efa470eb",
                        "sequentialId": 89,
                        "ownerIdentity": "principal370@msging.net",
                        "customerIdentity": "bbb42d31-c993-4681-98e4-569d8cb62c0a@tunnel.msging.net",
                        "customerDomain": "tunnel.msging.net",
                        "agentIdentity": "comunicacao%40redehsvp.com.br@blip.ai",
                        "provider": "Lime",
                        "status": "ClosedAttendant",
                        "storageDate": "2023-01-26T19:53:29.580Z",
                        "openDate": "2023-01-26T19:53:30.280Z",
                        "closeDate": "2023-01-26T19:55:40.470Z",
                        "statusDate": "2023-01-26T19:55:40.470Z",
                        "externalId": "cda1ea77-7798-4657-8c49-0185efa470eb",
                        "rating": 0,
                        "team": "DIRECT_TRANSFER",
                        "unreadMessages": 0,
                        "closed": true,
                        "closedBy": "comunicacao%40redehsvp.com.br@blip.ai",
                        "tags": [
                            "Solicitação"
                        ],
                        "priority": 0,
                        "isAutomaticDistribution": true,
                        "distributionType": "Redis",
                        "CampaignId": "54ff29ed-de46-41fb-a710-8f17336576df"
                    }
                ]
            },
            "method": "get",
            "status": "success",
            "id": "123sads344553",
            "from": "postmaster@desk.msging.net/!iris-hosted-1",
            "to": "principal370@msging.net/!iris-hosted-1-yrnldk03",
            "metadata": {
                "#command.uri": "lime://principal370@msging.net/tickets?$filter=(status%20eq%20'ClosedAttendant')%20and%20(CustomerIdentity%20eq%20'bbb42d31-c993-4681-98e4-569d8cb62c0a@tunnel.msging.net')&$skip=0&$take=100",
                "uber-trace-id": "286638964f646ed3%3Aae8c2c32b04c0f20%3A286638964f646ed3%3A1"
            }
        }
    ),"200","undefined","false")).toBe("comunicacao@redehsvp.com.br")
})