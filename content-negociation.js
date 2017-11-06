// Exercise from chapter 17 HTTP

function preflight(url, header, value) {
    let xhr = new XMLHttpRequest();
    
    xhr.open("GET", url);
    
    xhr.setRequestHeader(header, value);
    
    xhr.onload = function() {
        if(xhr.status < 400) {
            
        }
    }
    
    xhr.send();
    
}