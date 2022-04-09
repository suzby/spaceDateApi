//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getPhoto)

function getPhoto(){
    
    const date = `&date=${document.querySelector('input').value}`
    const apiKey = 'api_key=xKb6UsJjur6SguYyqoLbi02OUEYOn2Mxjhf005Se'
    const url = `https://api.nasa.gov/planetary/apod?`
    
    

    fetch(url+apiKey+date)
        .then(res => res.json())
        .then(data => {
            console.log("success"),
            document.querySelector('img').src = data.url
            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
        })
        .catch(err=> {
            console.log(`error ${err}`)
        })

}

//to do: 45 minutes styling
//built two more api's
//interconnect three api's
//codewars