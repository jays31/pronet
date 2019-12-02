function fetch_ipadd(grid) {
    var geturl = "https://pronet.azurewebsites.net/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var ipadd = parsetdata[0].ipadd;
    return (ipadd)
}

function fetch_macadd(grid) {
    var geturl = "https://pronet.azurewebsites.net/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var macadd = parsetdata[0].macadd;
    return (macadd)
}

function fetch_lati(grid) {
    var geturl = "https://pronet.azurewebsites.net/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var lati = parsetdata[0].lati;
    return (lati)
}

function fetch_longi(grid) {
    var geturl = "https://pronet.azurewebsites.net/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var longi = parsetdata[0].longi;
    return (longi)
}

function fetch_clients(grid) {
    var geturl = "https://pronet.azurewebsites.net/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var clients = parsetdata[0].clients;
    return (clients)
}

function fetch_status(grid) {
    var geturl = "https://pronet.azurewebsites.net/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var status = parsetdata[0].status;
    return (status)
}

function fetch_nwname(grid) {
    var geturl = "https://pronet.azurewebsites.net/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var nwname = parsetdata[0].nwname;
    return (nwname)
}

function fetch_deviceband(grid) {
    console.log("entered");
    var geturl = "https://pronet.azurewebsites.net/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var deviceband = parsetdata[0].deviceband;
    console.log(parsetdata);
    return (deviceband)
}
function fetch_nwband(grid) {
    var geturl = "https://pronet.azurewebsites.net/devices?nwname=grid" + grid;var total =0;
    var geturl = "https://pronet.azurewebsites.net/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var total =0;

    for(var i=0;i<parsetdata.length;i++)
    {
        var deviceband = parsetdata[i].deviceband;
        total += Number(deviceband);
    }
    return (total.toFixed(2))
}
function fetch_traffic(grid) {
    var geturl = "https://pronet.azurewebsites.net/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var count =0;
    for(var i=0;i<parsetdata.length;i++)
    {
        var status = parsetdata[i].status;
        if(status=="Active")
        {
            count+=1;
        }
    }
    return (count)
}
function fetch_totaldevices(grid) {
    var geturl = "https://pronet.azurewebsites.net/devices?nwname=grid" + grid;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    var count =parsetdata.length;
    return (count)
}

function fetch_alldevices() {    
    var geturl = "https://pronet.azurewebsites.net/devices";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", geturl, false); // false for synchronous request
    xmlHttp.send(null);
    var tdata = xmlHttp.responseText;
    var parsetdata = $.parseJSON(tdata);
    console.log(parsetdata);
    return (parsetdata)
}

function add_device(){
   var deviceName =  document.getElementById("devicename").value;
   var network = document.getElementById("network").value;
   var ipaddr = document.getElementById("ipaddr").value;
   var macaddr = document.getElementById("macaddr").value;
   var location = document.getElementById("location").value;
   var locarr = location.split(',');
   var url = "https://pronet.azurewebsites.net/devices";
   var xmlHttp = new XMLHttpRequest();
   xmlHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xmlHttp.responseText);
      document.location.reload(true)
    }
  };
   xmlHttp.open("POST", url, true);
   xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xmlHttp.send("ipadd="+ipaddr+"&macadd="+macaddr+"&lati="+locarr[0]+"&longi="+locarr[1]+"&clients=0&status=Disabled&nwname="+network+"&deviceband=0");
}
