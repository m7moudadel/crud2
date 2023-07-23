var inputeName = document.getElementById("siteName")
var inputeSite = document.getElementById("siteUrl")
var tableBody = document.getElementById("tbody")
var btnDelet =  document.getElementById("btnDelte")


addLinkArray=[];
if (addLinkArray != null) {
  addLinkArray = JSON.parse(localStorage.getItem("links"))
  displayDate()
}


function addValue(){

  var link={
    name:inputeName.value,
    link:inputeSite.value
  }

  addLinkArray.push(link);
  localStorage.setItem("links" , JSON.stringify(addLinkArray))

  displayDate()
}



function  displayDate() {
  cartona=``
  for (let i = 1; i < addLinkArray.length; i++) {
    cartona += `
<tr>
          <td>${i}</td>
          <td>${addLinkArray[i].name}</td>
          <td><a href="${addLinkArray[i].link}" target="_blank"><button type="button" class="btn btn-warning" id="btnVisit">Visit</button></a></td>
          <td><button type="button" class="btn btn-danger" id="btnDelte" onclick="deletLink(${i});"><i class="fa-solid fa-trash-can" style="color: #ffffff;"></i> Delete</button></td>
        </tr>
`   
  }

  tableBody.innerHTML = cartona
}

function deletLink(number) {
  addLinkArray.splice(number , 1)
  localStorage.setItem("links" , JSON.stringify(addLinkArray))

  displayDate() 
}


function resetInpust() {
  inputeName.value =""
  inputeSite.value =""
}

// function error(){
//   if (inputeName.value == "" && inputeSite.value == "") {

//   }
// }

