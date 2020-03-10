$('#btn').click(function() {

    let msg = '<p class="text-white bg-primary">Seja bem vindo, a minha aula de JQuery!</p>'

    $('#boas_vindas').append(msg)
})

$('.btn-primary').click(function() {
    $('#cabeca').removeClass('bg-info') //Estou removendo uma classe CSS
    $('#cabeca').removeClass('bg-warning') //Estou removendo uma classe CSS
    $('#cabeca').removeClass('bg-danger') //Estou removendo uma classe CSS
    $('#cabeca').removeClass('bg-image') //Estou removendo uma classe CSS
    $('#cabeca').addClass('bg-primary')
})

$('.btn-warning').click(function() {
    $('#cabeca').removeClass('bg-info') //Estou removendo uma classe CSS
    $('#cabeca').removeClass('bg-primary') //Estou removendo uma classe CSS
    $('#cabeca').removeClass('bg-danger') //Estou removendo uma classe CSS
    $('#cabeca').removeClass('bg-image') //Estou removendo uma classe CSS
    $('#cabeca').addClass('bg-warning')
})

$('.btn-danger').click(function() {
    $('#cabeca').removeClass('bg-info') //Estou removendo uma classe CSS
    $('#cabeca').removeClass('bg-primary') //Estou removendo uma classe CSS
    $('#cabeca').removeClass('bg-warning') //Estou removendo uma classe CSS
    $('#cabeca').removeClass('bg-image') //Estou removendo uma classe CSS
    $('#cabeca').addClass('bg-danger')
})

$('.btn-image').click(function() {
    $('#cabeca').removeClass('bg-info') //Estou removendo uma classe CSS
    $('#cabeca').removeClass('bg-primary') //Estou removendo uma classe CSS
    $('#cabeca').removeClass('bg-warning') //Estou removendo uma classe CSS
    $('#cabeca').removeClass('bg-danger') //Estou removendo uma classe CSS
    $('#cabeca').addClass('bg-image')
})

$('.btn-add').click(function() {
    let nome = $('#name').val()
    let texto = `
        <div class="col-md-12 text-center text-danger">
            <h1>${nome}</h1>
        </div>
    `
    $('#list-names').append(texto)
    $('#name').val("")
})

$('.btn-clear').click(function() {
    $('#list-names').empty()
})