
document.addEventListener('DOMContentLoaded', async ()=> {
    console.log("ready!")
    console.log(fetchFlag())

    const en = await fetchFlag()

    if(en){
    alert("FEATURE IS ENABLED!!!")
    document.getElementById("feat").classList.remove("hidden")
} else {
    let out = "<h1> just be pacient my friend </h1>"

    document.getElementById("stuff").innerHTML+=out
}

})

async function fetchFlag(){
const url = 'http://10.196.244.139:5000/api/flag'
const feat = await fetch(url)
let json = await feat.json()
console.log(json.enabled)
return json.enabled


}
