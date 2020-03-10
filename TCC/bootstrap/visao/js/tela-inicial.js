$('.btn-add').click(function() {
    let nome = $('#name').val()
    let texto = `
        <div class="col-md-12 text-center text-dark">
            <h1>${nome}</h1>
        </div>
    `
    $('#list-names').append(texto)
    $('#name').val("")
})

$('.btn-clear').click(function() {
    $('#list-names').empty()
})