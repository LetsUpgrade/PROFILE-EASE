const line = require('@line/bot-sdk');

const client = new line.Client({
    channelAccessToken: '4nmL+uTZ+q6oBTnpntSUAsgDQ54LUNZazC5cNUtLXkDAguRxWgP+k9NF/1DOU2H4IvdNIQ7rFwGgs+CEerua6vbP596EvlGQDOGVf2Bw6macsZeDcM1+cyseR1sMWiZkC7lXBLt05+lErzYS8c9niwdB04t89/1O/w1cDnyilFU='
});

const message = {
    type:'text',
    text:'Hello world'
};

client.pushMessage('U1c5700e18a6c933acca7dafb1942a44c',message)
.then(() =>{ })
.catch(err => console.log(err));