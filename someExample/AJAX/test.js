
const express = require('express');

const app = express();

app.get('/server',(request, response) => {
    response.setHeader('Access-Control-Allow-Origin','*');

    response.send('Hello AJAX');

});


app.all('/server',(request, response) => {
    response.setHeader('Access-Control-Allow-Origin','*');

    response.setHeader('Access-Control-Allow-Headers','*');

    response.send('Hello AJAX POST');

});


app.all('/json-server',(request, response) => {
    response.setHeader('Access-Control-Allow-Origin','*');

    response.setHeader('Access-Control-Allow-Headers','*');

    const data = {
        name: 'nange'

    }

    let str = JSON.stringify(data);

    response.send(str);
});

app.all('/ie',(request, response) => {
    response.setHeader('Access-Control-Allow-Origin','*');

    response.send('Hello IE');

});


app.all('/delay',(request, response) => {
    response.setHeader('Access-Control-Allow-Origin','*');


    setTimeout(()=> {
        response.send('网络延迟');
    },2000);


});




app.listen(8000,()=>{
    console.log("服务以及启动，8000端口监听");
})