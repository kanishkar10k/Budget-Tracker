function addTrans(){
    var type=document.getElementById("type").value;
    var name=document.getElementById("nam").value;
    var amount=document.getElementById('amoun').value;
    var tableBody=document.getElementById("transaction");
    
    const row1=document.createElement('tr');
    row1.innerHTML =`<td>${type}</td><td>${name}</td><td>$${amount}</td><td><button class="del" id='btn'>Delete</button></td>`;
    tableBody.appendChild(row1);

    row1.querySelector("#btn").addEventListener('click',()=>{
        row1.remove();
    });
}