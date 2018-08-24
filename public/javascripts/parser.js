var floorNum = 5
var data = ''

function floorChange2(){ document.getElementById('floorPlan').src = '/images/floor2.png'; floorNum = 2; tableSet() };

function floorChange5(){ document.getElementById('floorPlan').src = '/images/floor5.png'; floorNum = 5; tableSet() };

function floorChange6(){ document.getElementById('floorPlan').src = '/images/floor6.png'; floorNum = 6; tableSet() };

$(function () {
    tableSet();
});

function tableSet(){
        $.get("/desks", {"floorNum" : floorNum }, function (data, status) {
        console.log(status);
        data = JSON.parse(data);

        function table(){
            var txt = ''
            txt += "<table>"
            txt += "<thead><tr><th>Desks|</th><th>Available|</th><th>Floor</th></tr></thead>"

            for (x in data.desks) {
                txt += '<tr>'

                txt += "<td>" + data.desks[x].desk + "</td>";
                txt += "<td>" + data.desks[x].available + "</td>";
                txt += "<td>" + data.desks[x].floor + "</td>";

                txt += '</tr>'
            };

            txt += "</table>" ;
            document.getElementById("table").innerHTML = txt;
            document.getElementById('show').innerHTML = 'Floor ' + floorNum.toString();
        };
        return table();

    });
};