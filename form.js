    let obj={
    'priyanka':'kumari','talib':'ansari','pooja':'yadav'
};

document.getElementById('h2').innerHTML="Please enter the credentials to play the game.";
document.getElementById('h4').innerHTML="Thank you!";

function formss(){
    let len=Object.keys(obj).length;

    let u=document.getElementById('username').value;
    let p=document.getElementById('password').value;

    let i;
    for(i=0;i<len;i++)
    {
        if(Object.keys(obj)[i]==u && Object.values(obj)[i]==p){
            go();
            return;
        }
    }

    
        let div=document.createElement('div');
        div.innerHTML='The username or password is incorrect!';
        div.setAttribute('style','color:red');
        document.getElementById('form').appendChild(div);
    
}
function go(){
    window.location="rps.html";
}