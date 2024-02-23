class Nuj{
    constructor(name,surname,age,location,phone,email){
        this.surname=surname;
        this.name=name;
        this.age=age;
        this.location=location;
        this.phone=phone;
        this.email=email;
    }
}

document.querySelector("form").addEventListener("submit", function(event){
        event.preventDefault()
        const n=document.querySelector("#name").value;
        const sn=document.querySelector("#surname").value;
        const a=document.querySelector("#age").value;
        const l=document.querySelector("#location").value;
        const p=document.querySelector("#phone").value;
        const e=document.querySelector("#email").value;
        const nUser = new Nuj(n,sn,a,l,p,e)
        
        console.log(nUser)

        const pa = document.createElement("p");
        pa.innerHTML = "<p>Your information has been transfered to console.</p>"
        document.getElementById("message").appendChild(pa)

        
    


})