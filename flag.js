var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    for(var i=0;i<countryData.length;i++){
        console.log(countryData[i].flag);
    }
} 