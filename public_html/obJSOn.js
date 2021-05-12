$(function () {
    $("#OK").click(ment);

});

var szovegJSON = '[{"nev":"Bodri","nem":"kan","allapot":"ivartalanitott","gazdaNeve":"Gipsz Jakab"},{"nev":"Morsa","nem":"szuka","allapot":"kölyök","gazdaNeve":"Rózsi néni"}]';

var szemely = {
    vnev: "Gipsz",
    knev: "Jakab",
    szulDatum: "1996-02-21",
    nem: "Férfi",
    nev: function () {
        return this.vnev + " " + this.knev;
    },
    kor: function () {
        var ma = new Date();//az aktuális dátum
        var szD = new Date(this.szulDatum);
        return ma.getFullYear() - szD.getFullYear();
    }

};

var szemelyek = [
    {
        vnev: "Gipsz",
        knev: "Jakab",
        szulDatum: "1996-02-21",
        nem: "Férfi"
    },
    {
        vnev: "Nagy",
        knev: "Gizi",
        szulDatum: "1996-07-21",
        nem: "Nő"
    }
];
function szemelykezelese() {
    $("article").append(szemely.nev() + " " + szemely.kor() + " éves<br>");

    for (var item in szemely) {
        $("article").append(item + ": " + szemely[item] + "<br>");
    }
    szemely.cslAllapot = "nőtlen";
    $("article").append("A személyünk: " + szemely + "<br>");
    console.log(szemely);

    //át alalkítjuk stringé az objektumot
    var stringSzemely = JSON.stringify(szemely);
    $("article").append("A személyünk: " + stringSzemely + "<br>");
    console.log(stringSzemely);


    $("article").append(szemelyek + "<br>");
    console.log(szemelyek);

    var szovegSzemelyek = JSON.stringify(szemelyek);
    console.log(szovegSzemelyek);
    $("article").append(szovegSzemelyek + "<br>");

    $("article").append(szovegJSON + "<br>");
    $("article").append(szovegJSON.nev + "<br>");

    //JSON formátum szöveget objektumá alakitjuk

    var szovegObjektum = JSON.parse(szovegJSON);
    $("article").append(szovegObjektum + "<br>");
    console.log(szovegObjektum);
    $("article").append(szovegObjektum[0].nev + "<br>");

}
function ment() {
    var ujszemely = {};
    ujszemely.vnev = $("#vnev").val();
    ujszemely.knev = $("#knev").val();
    ujszemely.szulDatum = $("#szul").val();
    if ($("input:radio[name=nem]:checked").val() === "f") {
        ujszemely.nem = "Férfi";
    } else {
        ujszemely.nem = "Nő";
    }
    console.log(ujszemely);
    szemelyek.push(ujszemely);
    console.log(szemelyek);
    kiir();

}
function kiir() {
    //az article tag-be kiirja a személyek tömb tartalmát tartalmát!
    $("article").append("<table>");
    $("article table").append("<tr><th>Vezeték név</th><th></th><th>Kereszt név</th><th></th><th>kor</th><th></th><th>nem</th></tr>");
    for (var i = 0; i < szemelyek.length; i++) {
        $("article table").append("<tr>");
        for (var item in szemelyek[i]) {
            $("article table tr").eq(i + 1).append("<td>" + szemelyek[i][item] + "<td>");
        }



    }
}S



