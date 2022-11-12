$("#searchResult").hide();

let result;
let i;

async function search() { 
    result = [];
    $("#referencesTable").empty();

    let searchInput =  $("#searchBar").val();

    let response = await fetch('./references.json');
    let json = await response.json()
    let references = json

    i = 1;
    references.forEach(element => {
        let text = element.title
        let position = text.toLowerCase().search(searchInput);

        

        if (position !== -1) {
            result.push(element)

            $("#searchTable").find('tbody')
                            .append($('<tr>')
                                .append($(`<td>${i}.</td>`))
                                .append($(`<td>${element.title}</td>`))
                                .append($(`<td>${element.desc}</td>`))
                                .append($(`<td><button class="btn btn-primary">Read</button></td>`))
                            );
        }

        i++;
    });

    $("#page").hide();

    if (result.length > 0) {
        $("#errorMsg").hide();
        $("#searchTable").show();
    } else{
        $("#searchTable").hide();
        $("#errorMsg").show();
    }

    $("#searchResult").show();
};


