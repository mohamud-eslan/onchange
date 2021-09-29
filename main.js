document.getElementById("cities").onchange = function(){
    const cities = document.getElementById("cities").value;
    const tonnes = document.getElementById("tonnes").value;
    const output = document.getElementById("output");
    let tonnesInt = parseInt(tonnes);

    let nakuru = "nakuru";
    let nairobi = "nairobi";
    let eldoret = "eldoret";

    

    if(cities == nakuru){
       let total = tonnesInt * 100;
       output.innerHTML = total;
    }if(cities == nairobi){
        let total = tonnesInt * 350;
        output.innerHTML = total;
     }if(cities == eldoret){
        let total = tonnesInt * 200;
        output.innerHTML = total;
     }
}

