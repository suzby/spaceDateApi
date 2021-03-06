//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//TO DO
    //maybe local storage
    // zoom on hover over image


/**************************************************************/
//



// load todays date on load

window.onload = function() {
    const apiKeyOL = 'api_key=3IsLvqaKq5kg9nWmrdwLR2gISZ9x7Jczc46mCv5T'
    const urlOL = `https://api.nasa.gov/planetary/apod?`

    fetch(urlOL+apiKeyOL)
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.media_type === 'image') {
                document.querySelector('img').src = data.url  
                iframe.style.display = "none"          
            } else if (data.media_type === 'video') {
                document.querySelector('iframe').src = data.url
                iframe.style.display = "block"
            }
            document.querySelector('h2').innerText = data.title
            document.querySelector('p').innerText = data.explanation
        })
        .catch(err=> {
            console.log(`today error ${err}`)
        })
}

//load selected date on click
document.querySelector('button').addEventListener('click', getPhoto)
function getPhoto(){
    
    const date = `&date=${document.querySelector('input').value}`
    const apiKey = 'api_key=xKb6UsJjur6SguYyqoLbi02OUEYOn2Mxjhf005Se'
    const url = `https://api.nasa.gov/planetary/apod?`
    //current status of img display
    const displaySettings = img.style.display
    const displayWindow = document.getElementById('img')
    
    fetch(url+apiKey+date)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if( data.media_type === 'image' ){
                document.querySelector('img').src = data.url
                iframe.style.display = "none"
                
            } else if (data.media_type === 'video'){
                document.querySelector('iframe').src = data.url
                iframe.style.display = "block"
            }
            document.querySelector('h2').innerText = data.title
            document.querySelector('p').innerText = data.explanation

        })
        .catch(err=> {
            console.log(`date error ${err}`)
        })

        if(data.media_type === 'image'){
            document.getElementById('iframe').style.display = 'none'
        } else if(data.media_type === 'video'){
            document.getElementById('img').style.display = 'none'      
        } else {
            document.getElementById('img').style.display = 'none'
            document.getElementById('ifram').style.display = 'none'
        }
    localStorage.setItem("date:", date);
}


