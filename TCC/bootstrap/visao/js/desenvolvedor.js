$('.btn-mostrar').click(function() {
    let areas = `
    <div class=" col-md-4 col-12">
        <form action="">
            <div class="mt-5 text-dark">
                <label border="2" for="label">
                    <tr>
                        <h5>
                        <td>Encanador</td><br>
                        <td>Eletricista</td><br>
                        <td>Pedreiro</td><br>
                        <td>Manicure</td><br>
                        <td>Encanador</td><br>
                        <td>Eletricista</td><br>
                        <td>Pedreiro</td><br>
                        <td>Manicure</td><br>
                        <td id="adici"><td><br>
                    </h5>
                    </tr>
                </label>
            </div>
            <div class="mt-3">
                <button class="btn bg-dark text-white btn-ocultar">Ocultar</button>
            </div>
        </form>
    </div>
    `
    $('#mostrar').empty()
    $('#mostrar').append(areas)
})

$('.btn-ocultar').click(function() {
    $('#mostrar').empty()
})

$('.btn-adicionar').click(function() {
    let adiciona = '#nova'
    $('#adici').append(adiciona)
})