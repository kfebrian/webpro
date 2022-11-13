function validateForm() {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var publisher = document.getElementById("publisher").value;
    var category = document.getElementById("category").value;
    var file = document.getElementById("file").value;
    var description = document.getElementById("description").value;
    if (title != "" && author !="" && publisher !="" && category != "" && file !="" && description != "") {
        alert("Your reference has been uploaded");
        return window.location.href = "./home.html";
    }else{
        alert('You must fill in the data completely');
    }
}


