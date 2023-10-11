
function run(threadMensagens,listaTemplates){
    listaTemplates = listaTemplates.split(",")
    let retorno = "fluxo normal"
    threadMensagens = JSON.parse(threadMensagens)
    if(threadMensagens.status == "success"){
        if(threadMensagens.resource.total > 0){
            let mensagem = threadMensagens.resource.items[1]
            for(let indice = 0; indice < listaTemplates.length; indice++){
                
                if(mensagem.type == "application/json") {
                    if(mensagem.content.type == "template"){
                        if (mensagem.content.template.name == listaTemplates[indice]) {

                            retorno =  "falar com atendente"
                            break
                        }
                    }
                }
            }
        }
    }
    return retorno
}
let listaTemplates = "boas_vindas_20230215_7678b5"
let retornoServidor = {
    "type": "application/vnd.lime.collection+json",
    "resource": {
        "total": 18,
        "itemType": "application/vnd.iris.thread-message+json",
        "items": [
            {
                "id": "wamid.HBgNNTUxMzk5ODA3MDYxORUCABIYFDNFQjAzQzNBMDNDMzBGOTA1NUE3AA==",
                "direction": "received",
                "type": "text/plain",
                "content": "#atendimento",
                "date": "2023-02-27T11:59:42.324Z",
                "status": "dispatched",
                "metadata": {
                    "#wa.timestamp": "1677499180",
                    "uber-trace-id": "66cf002b96540ee4%3A66cf002b96540ee4%3A0%3A1",
                    "$internalId": "c5c146aa-206f-4ab1-8be4-a6945924e509",
                    "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-4wctz",
                    "#uniqueId": "c5c146aa-206f-4ab1-8be4-a6945924e509",
                    "date_created": "1677499182297",
                    "#date_processed": "1677499182297",
                    "$elapsedTimeToStorage": "00:00:00.0335338"
                }
            },
            {
                "id": "9fcbff12-cb3b-484c-9389-c2d290a4618f",
                "direction": "sent",
                "type": "application/json",
                "content": {
                    "type": "template",
                    "template": {
                        "namespace": "471c548d_fafa_4c46_9781_49096bf1434f",
                        "name": "boas_vindas_20230215_7678b5",
                        "language": {
                            "code": "pt_BR",
                            "policy": "deterministic"
                        },
                        "components": [
                            {
                                "type": "body",
                                "parameters": [
                                    {
                                        "type": "text",
                                        "text": "Gabriel teste 333"
                                    }
                                ]
                            }
                        ]
                    }
                },
                "date": "2023-02-27T11:59:28.247Z",
                "status": "consumed",
                "metadata": {
                    "$internalId": "84d3933f-438c-4c7f-ad83-012af746cb48",
                    "$originatorSessionRemoteNode": "vidiaroteador@msging.net/!msging-server-fbjpf-2925ju3f",
                    "#uniqueId": "84d3933f-438c-4c7f-ad83-012af746cb48",
                    "#messageKind": "Response",
                    "date_created": "1677499168209",
                    "#date_processed": "1677499168209",
                    "uber-trace-id": "e51fd507ce04791e%3Ae51fd507ce04791e%3A0%3A1",
                    "$elapsedTimeToStorage": "00:00:00.0518362"
                }
            },
            {
                "id": "d506dbe7-f6d5-45f8-8a21-e28c42200685",
                "direction": "sent",
                "type": "text/plain",
                "content": "aguarde que alguem entrara em contato\nurl: \nhubspotClientId: \nextras.additionalProp1: \nextras.1: \nadditionalProp1: \n1: \ntunnel.originator: 5513998070619@wa.gw.msging.net\ntunnel.destination: vidiabot1@msging.net\ntunnel.owner: vidiaroteador@msging.net",
                "date": "2023-02-27T11:45:53.809Z",
                "status": "consumed",
                "metadata": {
                    "#stateName": "aviso direcionando atendimento",
                    "#stateId": "9f233be0-e345-47fc-bb0c-85dd57a309c1",
                    "#messageId": "wamid.HBgNNTUxMzk5ODA3MDYxORUCABIYFDNFQjBCNURCMUY3MkQxMTg3NTQyAA==",
                    "#previousStateId": "65d6c01d-507f-4516-a8f2-8303a44890ef",
                    "#previousStateName": "Fora da área do cobertura",
                    "uber-trace-id": "a1dab92df5c3ed47%3A680579f9128c3006%3A7bca2ab90d50edb6%3A1",
                    "#uniqueId": "db503cf0-8bf8-40b6-b87a-8170ac6a6ee4",
                    "date_created": "1677498353724",
                    "#date_processed": "1677498353769",
                    "#tunnel.owner": "vidiaroteador@msging.net",
                    "#tunnel.originator": "5513998070619@wa.gw.msging.net",
                    "#tunnel.originalFrom": "vidiabot1@msging.net/msging-application-builder-hosting-business-zmsrr",
                    "#tunnel.originalTo": "8966c49b-33e0-4057-a0f6-a26a7113653b@tunnel.msging.net",
                    "$originator": "vidiaroteador@msging.net",
                    "$claims": "Node=vidiaroteador@msging.net/msging-application-router-hosting-business-dwlnw;Identity=vidiaroteador@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
                    "$internalId": "db503cf0-8bf8-40b6-b87a-8170ac6a6ee4",
                    "$originatorSessionRemoteNode": "business.master.hosting@msging.net/#msging-application-router-hosting-business-dwlnw",
                    "#messageKind": "Response",
                    "$elapsedTimeToStorage": "00:00:00.0455311"
                }
            },
            {
                "id": "wamid.HBgNNTUxMzk5ODA3MDYxORUCABIYFDNFQjBCNURCMUY3MkQxMTg3NTQyAA==",
                "direction": "received",
                "type": "text/plain",
                "content": "#atendimento",
                "date": "2023-02-27T11:45:52.422Z",
                "status": "dispatched",
                "metadata": {
                    "#wa.timestamp": "1677498350",
                    "uber-trace-id": "a1dab92df5c3ed47%3Aa1dab92df5c3ed47%3A0%3A1",
                    "$internalId": "c4a02589-ebe2-4aa5-914e-6ecc5307886b",
                    "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-bcx9m",
                    "#uniqueId": "c4a02589-ebe2-4aa5-914e-6ecc5307886b",
                    "date_created": "1677498352387",
                    "#date_processed": "1677498352387",
                    "$elapsedTimeToStorage": "00:00:00.0400389"
                }
            },
            {
                "id": "215fcda9-1928-4d8c-8f32-05a4324d6113",
                "direction": "sent",
                "type": "application/vnd.lime.select+json",
                "content": {
                    "scope": "immediate",
                    "text": "Seu numero não possui um DDD de São Paulo ou Rio de Janeiro.\n\nInformamos que as cirurgias são realizadas somente nas *capitais de ambos os estados*.\n\nDeseja prosseguir?",
                    "options": [
                        {
                            "text": "Sim"
                        },
                        {
                            "text": "Não"
                        }
                    ]
                },
                "date": "2023-02-27T11:45:15.041Z",
                "status": "consumed",
                "metadata": {
                    "#stateName": "Fora da área do cobertura",
                    "#stateId": "65d6c01d-507f-4516-a8f2-8303a44890ef",
                    "#messageId": "wamid.HBgNNTUxMzk5ODA3MDYxORUCABIYFDNFQjA1RjgxN0VCREZFQTY1RjBCAA==",
                    "#previousStateId": "onboarding",
                    "#previousStateName": "Início",
                    "uber-trace-id": "340420bfea901676%3Ab3bb17a0feb14050%3A242328a506c3d652%3A1",
                    "#uniqueId": "5da52181-1b95-470e-9662-ed045825c691",
                    "date_created": "1677498314953",
                    "#date_processed": "1677498315003",
                    "#tunnel.owner": "vidiaroteador@msging.net",
                    "#tunnel.originator": "5513998070619@wa.gw.msging.net",
                    "#tunnel.originalFrom": "vidiabot1@msging.net/msging-application-builder-hosting-business-jk9xm",
                    "#tunnel.originalTo": "8966c49b-33e0-4057-a0f6-a26a7113653b@tunnel.msging.net",
                    "$originator": "vidiaroteador@msging.net",
                    "$claims": "Node=vidiaroteador@msging.net/msging-application-router-hosting-business-ncdc6;Identity=vidiaroteador@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
                    "$internalId": "5da52181-1b95-470e-9662-ed045825c691",
                    "$originatorSessionRemoteNode": "business.master.hosting@msging.net/#msging-application-router-hosting-business-ncdc6",
                    "#messageKind": "Response",
                    "$elapsedTimeToStorage": "00:00:00.0445730"
                }
            },
            {
                "id": "wamid.HBgNNTUxMzk5ODA3MDYxORUCABIYFDNFQjA1RjgxN0VCREZFQTY1RjBCAA==",
                "direction": "received",
                "type": "text/plain",
                "content": "SIM",
                "date": "2023-02-27T11:45:12.611Z",
                "status": "dispatched",
                "metadata": {
                    "#wa.timestamp": "1677498311",
                    "#wa.context.from": "5511930282804",
                    "#wa.context.id": "wamid.HBgNNTUxMzk5ODA3MDYxORUCABEYEkZBNDQyMjExMzNDNTg1QkNGQwA=",
                    "#blip.payload.content": "SIM",
                    "uber-trace-id": "340420bfea901676%3A340420bfea901676%3A0%3A1",
                    "$internalId": "c0b1dbe1-0f6f-415c-8285-d13b433a7245",
                    "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-4wctz",
                    "#uniqueId": "c0b1dbe1-0f6f-415c-8285-d13b433a7245",
                    "date_created": "1677498312561",
                    "#date_processed": "1677498312561",
                    "$elapsedTimeToStorage": "00:00:00.0595541"
                }
            },
            {
                "id": "ded9354d-e0c3-4980-b032-bcc29f680b05",
                "direction": "sent",
                "type": "application/json",
                "content": {
                    "type": "template",
                    "template": {
                        "namespace": "471c548d_fafa_4c46_9781_49096bf1434f",
                        "name": "boas_vindas_20230215_7678b5",
                        "language": {
                            "code": "pt_BR",
                            "policy": "deterministic"
                        },
                        "components": [
                            {
                                "type": "body",
                                "parameters": [
                                    {
                                        "type": "text",
                                        "text": "Gabriel teste 333"
                                    }
                                ]
                            }
                        ]
                    }
                },
                "date": "2023-02-27T11:45:05.097Z",
                "status": "consumed",
                "metadata": {
                    "$internalId": "57f229fe-1909-46a2-b125-792203310c68",
                    "$originatorSessionRemoteNode": "vidiaroteador@msging.net/!msging-server-bdm7x-2925ju3f",
                    "#uniqueId": "57f229fe-1909-46a2-b125-792203310c68",
                    "#messageKind": "Response",
                    "date_created": "1677498305022",
                    "#date_processed": "1677498305022",
                    "uber-trace-id": "3d5227136bd809f0%3A3d5227136bd809f0%3A0%3A1",
                    "$elapsedTimeToStorage": "00:00:00.0853906"
                }
            },
            {
                "id": "e85a0d6b-737f-4b41-8714-eb5a5e956cf6",
                "direction": "sent",
                "type": "text/plain",
                "content": "aguarde que alguem entrara em contato\nurl: \nhubspotClientId: \nextras.additionalProp1: \nextras.1: \nadditionalProp1: \n1: \ntunnel.originator: 5513998070619@wa.gw.msging.net\ntunnel.destination: vidiabot1@msging.net\ntunnel.owner: vidiaroteador@msging.net",
                "date": "2023-02-27T11:44:50.661Z",
                "status": "consumed",
                "metadata": {
                    "#stateName": "aviso direcionando atendimento",
                    "#stateId": "9f233be0-e345-47fc-bb0c-85dd57a309c1",
                    "#messageId": "wamid.HBgNNTUxMzk5ODA3MDYxORUCABIYFDNFQjAwQTBBQkU1RjVENjMzOTU5AA==",
                    "#previousStateId": "onboarding",
                    "#previousStateName": "Início",
                    "uber-trace-id": "fc7ddbf2e8d1a0c0%3Acfeb70d3a59ceb62%3A2ca78e86e84836c%3A1",
                    "#uniqueId": "ac3aae58-3b79-4e29-8539-097e6b14d264",
                    "date_created": "1677498290593",
                    "#date_processed": "1677498290629",
                    "#tunnel.owner": "vidiaroteador@msging.net",
                    "#tunnel.originator": "5513998070619@wa.gw.msging.net",
                    "#tunnel.originalFrom": "vidiabot1@msging.net/msging-application-builder-hosting-business-2xfq2",
                    "#tunnel.originalTo": "8966c49b-33e0-4057-a0f6-a26a7113653b@tunnel.msging.net",
                    "$originator": "vidiaroteador@msging.net",
                    "$claims": "Node=vidiaroteador@msging.net/msging-application-router-hosting-business-d72q5;Identity=vidiaroteador@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
                    "$internalId": "ac3aae58-3b79-4e29-8539-097e6b14d264",
                    "$originatorSessionRemoteNode": "business.master.hosting@msging.net/#msging-application-router-hosting-business-d72q5",
                    "#messageKind": "Response",
                    "$elapsedTimeToStorage": "00:00:00.0373418"
                }
            },
            {
                "id": "wamid.HBgNNTUxMzk5ODA3MDYxORUCABIYFDNFQjAwQTBBQkU1RjVENjMzOTU5AA==",
                "direction": "received",
                "type": "text/plain",
                "content": "#atendimento",
                "date": "2023-02-27T11:44:48.235Z",
                "status": "dispatched",
                "metadata": {
                    "#wa.timestamp": "1677498286",
                    "uber-trace-id": "fc7ddbf2e8d1a0c0%3Afc7ddbf2e8d1a0c0%3A0%3A1",
                    "$internalId": "ace544be-702a-4f33-bd68-36b74545dcf1",
                    "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-4vqqw",
                    "#uniqueId": "ace544be-702a-4f33-bd68-36b74545dcf1",
                    "date_created": "1677498288203",
                    "#date_processed": "1677498288203",
                    "$elapsedTimeToStorage": "00:00:00.0394841"
                }
            },
            {
                "id": "590dfcc2-7e7c-4474-a845-5f8055e5b7ff",
                "direction": "sent",
                "type": "text/plain",
                "content": "aguarde que alguem entrara em contato\nurl: \nhubspotClientId: \nextras.additionalProp1: \nextras.1: \nadditionalProp1: \n1: \ncontext: ",
                "date": "2023-02-27T11:37:48.697Z",
                "status": "consumed",
                "metadata": {
                    "#stateName": "aviso direcionando atendimento",
                    "#stateId": "9f233be0-e345-47fc-bb0c-85dd57a309c1",
                    "#messageId": "wamid.HBgNNTUxMzk5ODA3MDYxORUCABIYFDNFQjA0Nzk3N0FCQjBDODg3RkU2AA==",
                    "#previousStateId": "onboarding",
                    "#previousStateName": "Início",
                    "uber-trace-id": "ddec4b668f0c2d11%3Ab6c16dfc76988ef6%3Ad5f1b9f1c16abdb9%3A1",
                    "#uniqueId": "06bae7c1-841c-40bf-b7eb-5fd588ca0569",
                    "date_created": "1677497868395",
                    "#date_processed": "1677497868445",
                    "#tunnel.owner": "vidiaroteador@msging.net",
                    "#tunnel.originator": "5513998070619@wa.gw.msging.net",
                    "#tunnel.originalFrom": "vidiabot1@msging.net/msging-application-builder-hosting-business-zmsrr",
                    "#tunnel.originalTo": "8966c49b-33e0-4057-a0f6-a26a7113653b@tunnel.msging.net",
                    "$originator": "vidiaroteador@msging.net",
                    "$claims": "Node=vidiaroteador@msging.net/msging-application-router-hosting-business-dwlnw;Identity=vidiaroteador@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
                    "$internalId": "06bae7c1-841c-40bf-b7eb-5fd588ca0569",
                    "$originatorSessionRemoteNode": "business.master.hosting@msging.net/#msging-application-router-hosting-business-dwlnw",
                    "#messageKind": "Response",
                    "$elapsedTimeToStorage": "00:00:00.2578563"
                }
            },
            {
                "id": "wamid.HBgNNTUxMzk5ODA3MDYxORUCABIYFDNFQjA0Nzk3N0FCQjBDODg3RkU2AA==",
                "direction": "received",
                "type": "text/plain",
                "content": "#atendimento",
                "date": "2023-02-27T11:37:46.208Z",
                "status": "dispatched",
                "metadata": {
                    "#wa.timestamp": "1677497864",
                    "uber-trace-id": "ddec4b668f0c2d11%3Addec4b668f0c2d11%3A0%3A1",
                    "$internalId": "b6a08bda-2632-493c-adf9-dcc2acc5a164",
                    "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-bcx9m",
                    "#uniqueId": "b6a08bda-2632-493c-adf9-dcc2acc5a164",
                    "date_created": "1677497866018",
                    "#date_processed": "1677497866018",
                    "$elapsedTimeToStorage": "00:00:00.1968099"
                }
            },
            {
                "id": "abe589c6-c87d-47e8-92a8-35c01ff3a2b9",
                "direction": "sent",
                "type": "text/plain",
                "content": "aguarde que alguem entrara em contato\nurl: \nhubspotClientId: \nextras.additionalProp1: \nextras.1: \nadditionalProp1: \n1: ",
                "date": "2023-02-27T11:37:00.120Z",
                "status": "consumed",
                "metadata": {
                    "#stateName": "aviso direcionando atendimento",
                    "#stateId": "9f233be0-e345-47fc-bb0c-85dd57a309c1",
                    "#messageId": "wamid.HBgNNTUxMzk5ODA3MDYxORUCABIYFDNFQjA4MTg5MkE4MUI2RjFFRkY5AA==",
                    "#previousStateId": "onboarding",
                    "#previousStateName": "Início",
                    "uber-trace-id": "2f1a135cecd18a9b%3Aa576efc9fdbdac47%3Ac1d31c689cc9c41a%3A1",
                    "#uniqueId": "83ac8b52-6cb0-4f18-ac51-81bf6dc8ace6",
                    "date_created": "1677497819829",
                    "#date_processed": "1677497819882",
                    "#tunnel.owner": "vidiaroteador@msging.net",
                    "#tunnel.originator": "5513998070619@wa.gw.msging.net",
                    "#tunnel.originalFrom": "vidiabot1@msging.net/msging-application-builder-hosting-business-bhtbs",
                    "#tunnel.originalTo": "8966c49b-33e0-4057-a0f6-a26a7113653b@tunnel.msging.net",
                    "$originator": "vidiaroteador@msging.net",
                    "$claims": "Node=vidiaroteador@msging.net/msging-application-router-hosting-business-qxq8b;Identity=vidiaroteador@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
                    "$internalId": "83ac8b52-6cb0-4f18-ac51-81bf6dc8ace6",
                    "$originatorSessionRemoteNode": "business.master.hosting@msging.net/#msging-application-router-hosting-business-qxq8b",
                    "#messageKind": "Response",
                    "$elapsedTimeToStorage": "00:00:00.2462706"
                }
            },
            {
                "id": "wamid.HBgNNTUxMzk5ODA3MDYxORUCABIYFDNFQjA4MTg5MkE4MUI2RjFFRkY5AA==",
                "direction": "received",
                "type": "text/plain",
                "content": "#atendimento",
                "date": "2023-02-27T11:36:57.728Z",
                "status": "dispatched",
                "metadata": {
                    "#wa.timestamp": "1677497816",
                    "uber-trace-id": "2f1a135cecd18a9b%3A2f1a135cecd18a9b%3A0%3A1",
                    "$internalId": "825664d4-bb1c-4032-8196-739f9ac75c1d",
                    "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-5dwxm",
                    "#uniqueId": "825664d4-bb1c-4032-8196-739f9ac75c1d",
                    "date_created": "1677497817519",
                    "#date_processed": "1677497817519",
                    "$elapsedTimeToStorage": "00:00:00.2160583"
                }
            },
            {
                "id": "103e0b33-a15b-437d-9c39-0404638a0417",
                "direction": "sent",
                "type": "text/plain",
                "content": "aguarde que alguem entrara em contato\n\n\n\n\n\n",
                "date": "2023-02-27T11:35:10.839Z",
                "status": "consumed",
                "metadata": {
                    "#stateName": "aviso direcionando atendimento",
                    "#stateId": "9f233be0-e345-47fc-bb0c-85dd57a309c1",
                    "#messageId": "wamid.HBgNNTUxMzk5ODA3MDYxORUCABIYFDNFQjA2MzM4NDBDRDlBRDI0MDJBAA==",
                    "#previousStateId": "onboarding",
                    "#previousStateName": "Início",
                    "uber-trace-id": "b447ce1e3c0b26fe%3Ace63dfa21357ce1d%3A9d0d4a29d33c369c%3A1",
                    "#uniqueId": "4bce67c3-2270-49fa-ac18-8b2ccb0f9816",
                    "date_created": "1677497710636",
                    "#date_processed": "1677497710671",
                    "#tunnel.owner": "vidiaroteador@msging.net",
                    "#tunnel.originator": "5513998070619@wa.gw.msging.net",
                    "#tunnel.originalFrom": "vidiabot1@msging.net/msging-application-builder-hosting-business-2xfq2",
                    "#tunnel.originalTo": "8966c49b-33e0-4057-a0f6-a26a7113653b@tunnel.msging.net",
                    "$originator": "vidiaroteador@msging.net",
                    "$claims": "Node=vidiaroteador@msging.net/msging-application-router-hosting-business-d72q5;Identity=vidiaroteador@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
                    "$internalId": "4bce67c3-2270-49fa-ac18-8b2ccb0f9816",
                    "$originatorSessionRemoteNode": "business.master.hosting@msging.net/#msging-application-router-hosting-business-d72q5",
                    "#messageKind": "Response",
                    "$elapsedTimeToStorage": "00:00:00.1741548"
                }
            },
            {
                "id": "wamid.HBgNNTUxMzk5ODA3MDYxORUCABIYFDNFQjA2MzM4NDBDRDlBRDI0MDJBAA==",
                "direction": "received",
                "type": "text/plain",
                "content": "#atendimento",
                "date": "2023-02-27T11:35:08.321Z",
                "status": "dispatched",
                "metadata": {
                    "#wa.timestamp": "1677497706",
                    "uber-trace-id": "b447ce1e3c0b26fe%3Ab447ce1e3c0b26fe%3A0%3A1",
                    "$internalId": "9ba298de-cbc5-46c2-b63c-9651a57cefb3",
                    "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-4vqqw",
                    "#uniqueId": "9ba298de-cbc5-46c2-b63c-9651a57cefb3",
                    "date_created": "1677497708113",
                    "#date_processed": "1677497708113",
                    "$elapsedTimeToStorage": "00:00:00.2126589"
                }
            },
            {
                "id": "67b4eaef-d759-4734-8bfe-6d88c7ab1cf9",
                "direction": "sent",
                "type": "application/json",
                "content": {
                    "type": "template",
                    "template": {
                        "namespace": "471c548d_fafa_4c46_9781_49096bf1434f",
                        "name": "boas_vindas_20230215_7678b5",
                        "language": {
                            "code": "pt_BR",
                            "policy": "deterministic"
                        },
                        "components": [
                            {
                                "type": "body",
                                "parameters": [
                                    {
                                        "type": "text",
                                        "text": "Gabriel teste 333"
                                    }
                                ]
                            }
                        ]
                    }
                },
                "date": "2023-02-27T11:34:39.653Z",
                "status": "consumed",
                "metadata": {
                    "$internalId": "f93d552a-0bc5-4e18-be53-67d55bc7de83",
                    "$originatorSessionRemoteNode": "vidiaroteador@msging.net/!msging-server-glhtw-2925ju3f",
                    "#uniqueId": "f93d552a-0bc5-4e18-be53-67d55bc7de83",
                    "#messageKind": "Response",
                    "date_created": "1677497679493",
                    "#date_processed": "1677497679493",
                    "uber-trace-id": "3bb9db860b96ec6f%3A3bb9db860b96ec6f%3A0%3A1",
                    "$elapsedTimeToStorage": "00:00:00.1666762"
                }
            },
            {
                "id": "e8d47dce-dfa1-4e04-ab83-331717117359",
                "direction": "sent",
                "type": "text/plain",
                "content": "A Vidia agradece seu contato.\n\nPara mais informações acesse nosso site:\n\nwww.souvidia.com",
                "date": "2023-02-27T11:30:13.034Z",
                "status": "consumed",
                "metadata": {
                    "#stateName": "Fim do atendimento - Normal",
                    "#stateId": "2c6a180c-ac7c-4c20-b58b-ff9fb10b2a93",
                    "#messageId": "wamid.HBgNNTUxMzk5ODA3MDYxORUCABIYFDNFQjAwQjRGOTNCRThFREQwQjk2AA==",
                    "#previousStateId": "3a96bed6-9c2f-4a02-915f-70719cb9d890",
                    "#previousStateName": "Verificar se tem ticket aberto",
                    "uber-trace-id": "e57decbf3b5a0965%3Abf691aa041ea9954%3A31fed7c1d4bf2b1c%3A1",
                    "#uniqueId": "6fcff090-4599-4fa9-8830-8c7896d96db5",
                    "date_created": "1677497412904",
                    "#date_processed": "1677497412954",
                    "#tunnel.owner": "vidiaroteador@msging.net",
                    "#tunnel.originator": "5513998070619@wa.gw.msging.net",
                    "#tunnel.originalFrom": "vidiabot1@msging.net/msging-application-builder-hosting-business-bhtbs",
                    "#tunnel.originalTo": "8966c49b-33e0-4057-a0f6-a26a7113653b@tunnel.msging.net",
                    "$originator": "vidiaroteador@msging.net",
                    "$claims": "Node=vidiaroteador@msging.net/msging-application-router-hosting-business-qxq8b;Identity=vidiaroteador@msging.net;DomainRole=Member;AuthenticationScheme=Transport",
                    "$internalId": "6fcff090-4599-4fa9-8830-8c7896d96db5",
                    "$originatorSessionRemoteNode": "business.master.hosting@msging.net/#msging-application-router-hosting-business-qxq8b",
                    "#messageKind": "Response",
                    "$elapsedTimeToStorage": "00:00:00.0855239"
                }
            },
            {
                "id": "wamid.HBgNNTUxMzk5ODA3MDYxORUCABIYFDNFQjAwQjRGOTNCRThFREQwQjk2AA==",
                "direction": "received",
                "type": "text/plain",
                "content": "ok",
                "date": "2023-02-27T11:30:11.790Z",
                "status": "dispatched",
                "metadata": {
                    "#wa.timestamp": "1677497410",
                    "uber-trace-id": "e57decbf3b5a0965%3Ae57decbf3b5a0965%3A0%3A1",
                    "$internalId": "6406b72a-8098-4fd2-831a-83fc8415f6b8",
                    "$originatorSessionRemoteNode": "postmaster@wa.gw.msging.net/#msging-gateway-whatsapp-5dwxm",
                    "#uniqueId": "6406b72a-8098-4fd2-831a-83fc8415f6b8",
                    "date_created": "1677497411664",
                    "#date_processed": "1677497411664",
                    "$elapsedTimeToStorage": "00:00:00.1444347"
                }
            }
        ]
    },
    "method": "get",
    "status": "success",
    "id": "e42102bd-e966-414c-9e21-9011edbc7a0e",
    "from": "postmaster@msging.net/#msging-server-glhtw",
    "to": "vidiaroteador@msging.net/!msging-server-glhtw-o05f2biv",
    "metadata": {
        "#command.uri": "lime://vidiaroteador@msging.net/threads/5513998070619@wa.gw.msging.net?refreshExpiredMedia=true",
        "uber-trace-id": "96946d284789312b%3A9ab599cedcfa5453%3A96946d284789312b%3A1"
    }
}

test("verificar ultimo mnesagem template deve transferir para atendente",()=>{
    expect(run(JSON.stringify(retornoServidor),listaTemplates)).toBe("falar com atendente")
})