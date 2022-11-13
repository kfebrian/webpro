$(document).ready( function () {
    $('#searchTable').DataTable( {
        pageLength : 3,
        ajax: {
            url: './references.json',
            dataSrc: 'references'
        },
        columns: [
            {data: 'no'},
            {data: 'title'},
            {data: 'desc'},
            {data: 'link'}
        ]
    } );
} );



// async function search() { 

//     let searchInput =  $("#searchBar").val();

//     let response = await fetch('./references.json');
//     let json = await response.json()
//     let references = json.references

//     i = 1;
//     references.forEach(element => {
//         let text = element.title
//         let position = text.toLowerCase().search(searchInput);

        

//         if (position !== -1) {
//             result.push(element)

//             $("#searchTable").find('tbody')
//                             .append($('<tr>')
//                                 .append($(`<td>${i}.</td>`))
//                                 .append($(`<td>${element.title}</td>`))
//                                 .append($(`<td>${element.desc}</td>`))
//                                 .append($(`<td><button>Read</button></td>`))
//                             );
//         }

//         i++;
//     });

//     $("#page").hide();

//     if (result.length > 0) {
//         $("#errorMsg").hide();
//         $("#searchTable").show();
//         $(document).ready( function () {
//             $('#searchTable').DataTable({
//                "pageLength": 5
//             });
//        } );
//     } else{
//         $("#searchTable").hide();
//         $("#errorMsg").show();
//     }

//     $("#searchResult").show();
// };


