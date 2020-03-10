$(document).ready(function() {
    $('#cadastrar').click(function() {
        // $('.modal-title').empty()
        // $('.modal-body').empty()
        let title = `
        <h3>Você deseja ser chamado pelo seu:</h3>
        `
        let body = `
        <p class="text-justify"><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit cumque, eos aut molestias recusandae tempora dolorem ex doloremque natus illo aperiam dolorum veniam at? Dolor cum odio harum numquam velit.</span><span>Nihil soluta, dolor officia deserunt odio voluptatem enim exercitationem cumque repellendus, praesentium possimus ullam dolores voluptatibus veniam doloribus obcaecati assumenda harum molestiae numquam itaque consectetur. Omnis sit ducimus ipsa impedit?</span></p>
        `

        $('.modal-title').append(title)
        $('.modal-body').append(body)

        $('#apelidoNome').modal('show')
    })

})