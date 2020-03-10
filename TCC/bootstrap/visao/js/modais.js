$(document).ready(function() {

    $('#somos').click(function() {
        $('.modal-title').empty()
        $('.modal-body').empty()

        let body = `
        <p class="text-justify"><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit cumque, eos aut molestias recusandae tempora dolorem ex doloremque natus illo aperiam dolorum veniam at? Dolor cum odio harum numquam velit.</span><span>Nihil soluta, dolor officia deserunt odio voluptatem enim exercitationem cumque repellendus, praesentium possimus ullam dolores voluptatibus veniam doloribus obcaecati assumenda harum molestiae numquam itaque consectetur. Omnis sit ducimus ipsa impedit?</span></p>
        `

        $('.modal-title').append('Quem Somos?')
        $('.modal-body').append(body)

        $('#modalBunitinhu').modal('show')
    })

    $('#produtos').click(function() {
        $('.modal-title').empty()
        $('.modal-body').empty()

        let body = `
            <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
            </ul>
        `

        $('.modal-title').append('Nossos Produtos')
        $('.modal-body').append(body)

        $('#modalBunitinhu').modal('show')
    })


    $('#alert').click(function() {
        Swal.fire('Seu alerta:', 'Oi sou seu SweetAlert', 'warning')
    })
})