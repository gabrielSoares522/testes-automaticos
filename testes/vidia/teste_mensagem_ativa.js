const hubspot = require('@hubspot/api-client');
const request = require('request');
exports.main = (event, callback) => {
  return callback(processEvent(event));
};
function processEvent(event) {
  const hubspotClient = new hubspot.Client({ 
    accessToken: process.env.private_app_api });
  hubspotClient.crm.contacts.basicApi.getById(event.object.objectId, ["firstname", "procedimento", "phone"])
  .then(results => {
    let sendWelcomeMessage = results.body.properties.send_welcome_message
    let firstname = results.body.properties.firstname
    let procedimento = results.body.properties.procedimento
    let phone = results.body.properties.phone
    if(sendWelcomeMessage == null || sendWelcomeMessage == true) {
       sendWhatsAppMsg(firstname, procedimento, phone, event)
    }
  })
  .catch(err => {
    console.log(err)
  })
}
function sendWhatsAppMsg(firstname, procedimento, phone, event) {
    const options = {
        url: 'https://www.souvidia.com/api/v1/message/integration/whatsapp',
        json: true,
        body: {
            hubspotClientId: event.object.objectId,
            from: '5511930282804',
            to: phone,
             content: {
               typeENUM: 'template',
               templateId: 'boas_vindas_20230215_7678b5',
               fields: {
                   "additionalProp1": firstname
               }
              }
           },
          headers: {
            'authorization': 'Basic dmlkaWFfYXV0aDoqeF5OXlJhYSNIMTI=',
        }
      };
  		console.log("options", options);
      request.post(options, (err, res, body) => {
          if (err) {
              return console.log(err);
          }
          console.log(`Status: ${res.statusCode}`);
          console.log(body);
      });
}