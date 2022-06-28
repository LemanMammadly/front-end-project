let loginuser=document.getElementById("login")
loginuser.addEventListener("click",function(e){
    e.preventDefault();
    let name=document.getElementById("name");
    let password=document.getElementById("password")

    let basket=JSON.parse(localStorage.getItem('user'));
    let basket_username=e.target.previousElementSibling.previousElementSibling.value;
    let basket_password=e.target.previousElementSibling.value;


    let existuser=basket.find(x=>x.name===basket_username && x.password===basket_password)
    if(name=='' || password=='' || existuser===undefined){
        alert("Ad və şifrənizi düzgün daxil edin!")
    }
    else{
        alert("Ad və şifrəniz dogrudur.Daxil oldunuz!")
    }
})