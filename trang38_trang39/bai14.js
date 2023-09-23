function httpGetAsync(Url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200)
            callback(xmlHttp);
    };
    xmlHttp.open('GET', Url, true);
    xmlHttp.send(null);
}
const myPromise1 = new Promise(function(relsolve, reject){
    httpGetAsync('https://picsum.photos/200/300', relsolve);
});
const myPromise2 = new Promise(function(relsolve, reject){
    httpGetAsync('https://picsum.photos/200/300', relsolve);
});
const myPromise3 = new Promise(function(relsolve, reject){
    httpGetAsync('https://picsum.photos/200/300', relsolve);
});

myPromise1
            .then((data)=>{
                document.getElementById('img_1').setAttribute('src', data.responseURL);
                return myPromise2;})
            .then((data)=>{
                document.getElementById('img_2').setAttribute('src', data.responseURL);
                return myPromise3;})
            .then(
                (data)=>{
                document.getElementById('img_3').setAttribute('src', data.responseURL);
                })




