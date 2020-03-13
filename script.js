function request() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json', true);
    request.onload = function() {
        if (request.status == 200) {
            var data = JSON.parse(this.response);
            document.getElementById("dolar").innerHTML = data['bpi']['USD']['symbol'] + " " + data['bpi']['USD']['rate'];
            document.getElementById("euro").innerHTML = data['bpi']['EUR']['symbol'] + " " + data['bpi']['EUR']['rate'];
            document.getElementById("pound").innerHTML = data['bpi']['GBP']['symbol'] + " " + data['bpi']['GBP']['rate'];
        } else {
            console.log("Error");
        }
    }
    request.send();
}
request();
setInterval(request, 10000);