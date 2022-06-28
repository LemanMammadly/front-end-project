if(localStorage.getItem('user')===null){
    localStorage.setItem('user',JSON.stringify([]))
}

function Register(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    if(name=='' || email=='' || password==''){
        alert("Melumatlari duzgun yazin!")
    }
    else{
        let basket=JSON.parse(localStorage.getItem('user'));
        basket.push({
            name:name,
            email:email,
            password:password
        })
        localStorage.setItem('user',JSON.stringify(basket))
    }
}

function GetUsers(){
    let basket=JSON.parse(localStorage.getItem('user'));
    let userlist=""
    basket.forEach(x=>{
        userlist += `
            <ol class="py-3 text-center">
                <h5 class="h5">USER INFO</h5>
                <li>Username: ${x.name} </li>
                <li>Email: ${x.email} </li>
            </ol>
        `
    })
    document.getElementById("list").innerHTML=userlist
}
GetUsers();