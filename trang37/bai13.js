function httpGetAsync(Url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200)
            callback(xmlHttp);
    };
    xmlHttp.open('GET', Url, true);
    xmlHttp.send(null);
}
httpGetAsync('https://picsum.photos/200/300', (data) => {
            console.log('1',data);
            document.getElementById('img_1').setAttribute('src', data.responseURL);

            httpGetAsync('https://picsum.photos/200/300', (data) => {
                console.log('2',data);
                document.getElementById('img_2').setAttribute('src',data.responseURL);               
                
                httpGetAsync('https://picsum.photos/200/300', (data) => {
                    console.log('3',data);
                    document.getElementById('img_3').setAttribute('src',data.responseURL);
                });
            }); 
});


