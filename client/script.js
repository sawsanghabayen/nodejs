//edit your code 
fetch('http://localhost:3000/user?name=sawsan',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
    
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})


let todo = {
    message:"hello",
     name:"Sawsan"
}

fetch('http://localhost:3000/user',{
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' }
}).then(res => res.json())
  .then(val => console.log(val)).catch(err=>{
    console.log(err);
});