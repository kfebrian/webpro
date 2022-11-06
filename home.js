function remove() {
    var table = document.getElementById("tableId");
    var totalCount = table.tBodies[0].rows.length;
    console.log(totalCount);
    
}
function idna5(el){
	var elem = document.getElementById(el.parentNode.parentNode.id);
    elem.remove();
}