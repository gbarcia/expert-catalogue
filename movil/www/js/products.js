var data = [],
        rootView = undefined,
        rootData = undefined,
        result = undefined;

function renderDefaultView() {
    var html = '';
     $.each(rootData, function(key, val) {
         html += "<tablecell><celltitle>" + val.name + "</celltitle><cellsubtitle>" + val.description + "</cellsubtitle></tablecell>";
    });
    return html;
}

function renderDetails(index) {
    var movie = rootData.products[index];
    alert(movie);


}

function presentProducts() {
    var resultado = '';
    var url = "http://expertcatalogue.herokuapp.com/api/products.json?auth_token=" + getToken();
    $.ajax({
        url:url,
        dataType:"json",
        success:function (data, textStatus, jqXHR) {
            rootData = data;
            resultado = renderDefaultView();
            $("#table-info").html(resultado);
        },
        error:function (jqXHR, textStatus, errorThrown) {
            location.href('login.html');
        }
    });
    return resultado;
}