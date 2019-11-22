function fetch_ipadd(grid) {
    var geturl = "http://localhost:1337/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var ipadd = parsetdata[0].ipadd;
    return (ipadd)
}

function fetch_macadd(grid) {
    var geturl = "http://localhost:1337/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var macadd = parsetdata[0].macadd;
    return (macadd)
}

function fetch_lati(grid) {
    var geturl = "http://localhost:1337/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var lati = parsetdata[0].lati;
    return (lati)
}

function fetch_longi(grid) {
    var geturl = "http://localhost:1337/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var longi = parsetdata[0].longi;
    return (longi)
}

function fetch_clients(grid) {
    var geturl = "http://localhost:1337/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var clients = parsetdata[0].clients;
    return (clients)
}

function fetch_status(grid) {
    var geturl = "http://localhost:1337/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var status = parsetdata[0].status;
    return (status)
}

function fetch_nwname(grid) {
    var geturl = "http://localhost:1337/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var nwname = parsetdata[0].nwname;
    return (nwname)
}

function fetch_deviceband(grid) {
    var geturl = "http://localhost:1337/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var deviceband = parsetdata[0].deviceband;
    return (deviceband)
}