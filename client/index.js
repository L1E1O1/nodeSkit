document.addEventListener('DOMContentLoaded', function(){
    // api call
    fetch('http://localhost:3000/getAll')
    .then(response => response.json())
    .then(data => 
        console.log(data))
    fetch
loadHtmlTable([]);
})

function loadHtmlTable(data){
    const table = document.querySelector('table tbody');
    if (data.length === 0){
        table.innerHTML = "<tr><td  class='no-data' colspan='5' >No data</td></tr>";
    } 
}
