$('.buttons').css({
    display : 'inline'
})

var x = document.getElementById("btnSearch");
var today = new Date()
var day = today.getDate();
var month = "0"+ (today.getMonth() + 1);
var year = today.getFullYear();
var today_Date = `${year}-${month}-${day}`;
console.log(today_Date)
// var x = "2015-06-03";
x.setAttribute('max',today_Date)

$('#btnFetch').click(function () {
    var xhrReq = new XMLHttpRequest;
    xhrReq.open('get', `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${x.value}&api_key=DEMO_KEY`, true);
    xhrReq.send();
    
    xhrReq.onload = function () {
       if(JSON.parse(xhrReq.response).photos.length > 0)
        { var ResponseJson = JSON.parse(xhrReq.response);
            console.log(ResponseJson)
            $('#Image').attr('src', ResponseJson.photos[0].img_src)
        }
     
        else
        {
            alert("Sorry this date data is not uploaded by nasa. Try differnt day")
        }
        
    }
   

})
