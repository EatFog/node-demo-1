console.log(`it's main.js`)
let  = new Object()
getCSS.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/1.css')
    request.onreadystatechange = () =>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }
            else{
                console.log(`加载CSS失败`)
            }
        }
    }
    request.send()

}
getJS.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onreadystatechange = () =>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            }
            else{
                console.log(`加载JS失败`)
            }
        }
    }
    request.send()
}
getHTML.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onreadystatechange = () =>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                const html = document.createElement('div')
                html.innerHTML = request.response
                document.body.appendChild(html)
            }
            else{
                console.log(`加载HTML失败`)
            }
        }
    }
    request.send()
}
getXML.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = () =>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                const text = request.responseXML.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
            else{
                console.log(`加载XML失败`)
            }
        }
    }
    request.send()
}
getJSON.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange = () =>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                const response = JSON.parse(request.response)
                text.textContent = "name:"+response.name
            }
            else{
                console.log(`加载JSON失败`)
            }
        }
    }
    request.send()
}