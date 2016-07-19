$(function() {
    $('#submit').click(function() {
        event.preventDefault();

        var parameters = {'first_name':'jhon', 'last_name':'roa'};

        var form_data = new FormData($('#uploadform')[0]);
        $.ajax({
            type: 'POST',
            url: '/uploadajax?' + $.param(parameters),
            data: form_data,
            contentType: false,
            processData: false,
            dataType: 'json'
        }).done(function(data, textStatus, jqXHR){
            console.log(data);
            console.log(textStatus);
            console.log(jqXHR);
            console.log('Success!');
            $("#resultFilename").text(data['name']);
            $("#resultFilesize").text(data['size']);
        }).fail(function(data){
            alert('error!');
        });
    });
}); 