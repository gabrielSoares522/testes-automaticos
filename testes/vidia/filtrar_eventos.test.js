function run(resposta){
    resposta = JSON.parse(resposta)

    let items = resposta.resource.items.filter(item => item.event == "failed");

    return items
}

function verificaSeErroOcorreuAgora(eventsFailed,){
    eventsFailed = JSON.parse(eventsFailed)

    let now = Date().now

    eventsFailed.forEach(element => {
        
    });
}

test("retornar apenas eventos com failed",()=>{
    let resposta = JSON.stringify({
    "type": "application/vnd.lime.collection+json",
    "resource": {
        "total": 100,
        "itemType": "application/vnd.lime.notification+json",
        "items": [
            {
                "event": "dispatched",
                "id": "fwd:fwd:85565308-4c24-428f-83a0-9d8683d48dec",
                "from": "5394d36a-8697-4295-84f6-67792759a982@tunnel.msging.net",
                "to": "vidiabot1@msging.net",
                "metadata": {
                    "#envelope.timestamp": "1670246109389",
                    "#message.uniqueId": "2440d23b-8bbe-4283-a09d-ff04a636e4d5",
                    "#message.to": "vidiaroteador@msging.net",
                    "#tunnel.owner": "postmaster@msging.net",
                    "#tunnel.originator": "5511948307393@wa.gw.msging.net",
                    "#tunnel.originalFrom": "postmaster@msging.net/#iris-hosted-2",
                    "#tunnel.originalTo": "vidiabot1%40msging.net@tunnel.msging.net/5511948307393%40wa.gw.msging.net",
                    "#envelope.storageDate": "2022-12-05T13:15:09Z"
                }
            },
            {
                "event": "accepted",
                "id": "7f0ee279-0fa9-4993-afde-19e037440e63",
                "from": "ae5f2970-4008-42da-82e7-f89ff5a60faa@tunnel.msging.net",
                "to": "vidiabot1@msging.net",
                "metadata": {
                    "#envelope.timestamp": "1670242915525",
                    "#message.uniqueId": "19969a4b-ad21-45d7-9a6b-fc775105371e",
                    "#message.to": "vidiaroteador@msging.net",
                    "#tunnel.owner": "business.master.hosting@msging.net",
                    "#tunnel.originator": "5513998070619@wa.gw.msging.net",
                    "#tunnel.originalFrom": "business.master.hosting@msging.net/#msging-application-router-hosting-business-s5kww",
                    "#tunnel.originalTo": "vidiabot1%40msging.net@tunnel.msging.net/5513998070619%40wa.gw.msging.net",
                    "#envelope.storageDate": "2022-12-05T12:21:55Z"
                }
            },
            {
                "event": "accepted",
                "id": "7f0ee279-0fa9-4993-afde-19e037440e63",
                "from": "postmaster@msging.net/#msging-server-xp6wt",
                "to": "vidiabot1@msging.net/msging-application-builder-hosting-business-tgw77",
                "metadata": {
                    "#envelope.timestamp": "1670242915489",
                    "#message.uniqueId": "19969a4b-ad21-45d7-9a6b-fc775105371e",
                    "#message.to": "8966c49b-33e0-4057-a0f6-a26a7113653b@tunnel.msging.net",
                    "#envelope.storageDate": "2022-12-05T12:21:55Z"
                }
            },
            {
                "event": "received",
                "id": "ABGHVROZgHBhnwIQ_kVpQv2nBoK7qVqtLJlTrA",
                "from": "vidiabot1@msging.net/msging-application-builder-hosting-business-tgw77",
                "to": "8966c49b-33e0-4057-a0f6-a26a7113653b@tunnel.msging.net",
                "metadata": {
                    "#message.to": "vidiabot1@msging.net",
                    "#message.uniqueId": "88e64299-c415-4c28-9f16-530cd40d3960",
                    "#tunnel.owner": "vidiaroteador@msging.net",
                    "#tunnel.originator": "5513998070619@wa.gw.msging.net",
                    "#tunnel.originalFrom": "vidiabot1@msging.net/msging-application-builder-hosting-business-tgw77",
                    "#tunnel.originalTo": "8966c49b-33e0-4057-a0f6-a26a7113653b@tunnel.msging.net",
                    "#envelope.storageDate": "2022-12-05T12:21:54Z"
                }
            },
            {
                "event": "failed",
                "reason": {
                    "code": 86,
                    "description": "The gateway switch operation timed out"
                },
                "id": "6fd6da14-e917-4ed7-bd8d-27b53a488a3a",
                "from": "8966c49b-33e0-4057-a0f6-a26a7113653b@tunnel.msging.net",
                "to": "vidiabot1@msging.net",
                "metadata": {
                    "#envelope.timestamp": "1670242724418",
                    "#message.uniqueId": "14ac74ac-848c-4749-a280-cbecf4ef5cab",
                    "#message.to": "5513998070619@wa.gw.msging.net",
                    "#tunnel.owner": "vidiaroteador@msging.net",
                    "#tunnel.originator": "5513998070619@wa.gw.msging.net",
                    "#tunnel.originalFrom": "vidiaroteador@msging.net/msging-application-router-hosting-business-v6xjw",
                    "#tunnel.originalTo": "vidiabot1%40msging.net@tunnel.msging.net/5513998070619%40wa.gw.msging.net",
                    "#envelope.storageDate": "2022-12-05T12:18:44Z"
                }
            },
            {
                "event": "dispatched",
                "id": "6fd6da14-e917-4ed7-bd8d-27b53a488a3a",
                "from": "aad8cbbc-a374-4226-adc1-81cba8e43e58@tunnel.msging.net",
                "to": "vidiabot1@msging.net",
                "metadata": {
                    "#envelope.timestamp": "1670242664378",
                    "#message.uniqueId": "ed9b7120-452b-4627-b9fc-3dedefd14828",
                    "#message.to": "vidiaroteador@msging.net",
                    "#tunnel.owner": "postmaster@msging.net",
                    "#tunnel.originator": "5513998070619@wa.gw.msging.net",
                    "#tunnel.originalFrom": "postmaster@msging.net/#msging-server-w8k9q",
                    "#tunnel.originalTo": "vidiabot1%40msging.net@tunnel.msging.net/5513998070619%40wa.gw.msging.net",
                    "#envelope.storageDate": "2022-12-05T12:17:44Z"
                }
            },
            {
                "event": "dispatched",
                "id": "9e2b95bc-c772-4b52-84c3-c1e0479c8d46",
                "from": "ae5f2970-4008-42da-82e7-f89ff5a60faa@tunnel.msging.net",
                "to": "vidiabot1@msging.net",
                "metadata": {
                    "#envelope.timestamp": "1670242450147",
                    "#message.uniqueId": "10c6da34-77b1-4e59-abab-c6bac9cf4c0c",
                    "#message.to": "vidiaroteador@msging.net",
                    "#tunnel.owner": "business.master.hosting@msging.net",
                    "#tunnel.originator": "5513998070619@wa.gw.msging.net",
                    "#tunnel.originalFrom": "business.master.hosting@msging.net/#msging-application-router-hosting-business-v6xjw",
                    "#tunnel.originalTo": "vidiabot1%40msging.net@tunnel.msging.net/5513998070619%40wa.gw.msging.net",
                    "#envelope.storageDate": "2022-12-05T12:14:10Z"
                }
            },
            {
                "event": "dispatched",
                "id": "9e2b95bc-c772-4b52-84c3-c1e0479c8d46",
                "from": "aad8cbbc-a374-4226-adc1-81cba8e43e58@tunnel.msging.net",
                "to": "vidiabot1@msging.net",
                "metadata": {
                    "#envelope.timestamp": "1670242450147",
                    "#message.uniqueId": "10c6da34-77b1-4e59-abab-c6bac9cf4c0c",
                    "#message.to": "vidiaroteador@msging.net",
                    "#tunnel.owner": "postmaster@msging.net",
                    "#tunnel.originator": "5513998070619@wa.gw.msging.net",
                    "#tunnel.originalFrom": "postmaster@msging.net/#msging-server-w8k9q",
                    "#tunnel.originalTo": "vidiabot1%40msging.net@tunnel.msging.net/5513998070619%40wa.gw.msging.net",
                    "#envelope.storageDate": "2022-12-05T12:14:10Z"
                }
            }
        ]
    },
    "method": "get",
    "status": "success",
    "id": "3212easafdsde2123",
    "from": "postmaster@msging.net/#iris-hosted-3",
    "to": "vidiabot1@msging.net/!iris-hosted-3-dr4wmae8",
    "metadata": {
        "#command.uri": "lime://vidiabot1@msging.net/notifications",
        "uber-trace-id": "f7235a7eb3004acf%3Ae6cabc6253d7dc16%3Af7235a7eb3004acf%3A1"
    }
})

    expect(run(resposta)).toStrictEqual([{
        "event": "failed",
        "reason": {
            "code": 86,
            "description": "The gateway switch operation timed out"
        },
        "id": "6fd6da14-e917-4ed7-bd8d-27b53a488a3a",
        "from": "8966c49b-33e0-4057-a0f6-a26a7113653b@tunnel.msging.net",
        "to": "vidiabot1@msging.net",
        "metadata": {
            "#envelope.timestamp": "1670242724418",
            "#message.uniqueId": "14ac74ac-848c-4749-a280-cbecf4ef5cab",
            "#message.to": "5513998070619@wa.gw.msging.net",
            "#tunnel.owner": "vidiaroteador@msging.net",
            "#tunnel.originator": "5513998070619@wa.gw.msging.net",
            "#tunnel.originalFrom": "vidiaroteador@msging.net/msging-application-router-hosting-business-v6xjw",
            "#tunnel.originalTo": "vidiabot1%40msging.net@tunnel.msging.net/5513998070619%40wa.gw.msging.net",
            "#envelope.storageDate": "2022-12-05T12:18:44Z"
        }
    }])
})