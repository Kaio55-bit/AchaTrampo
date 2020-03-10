function hideLoading() {
    setTimeout(function() { $('#loader').hide() }, 2000)
}

$(document).ready(function() {
    $('#loader').show()
    let home = `
        <div id="home" class="row mt-5">
            <div class="col-12 text-center">
                <img src="img/Koala.jpg" alt="" class="img-fluid">
            </div>
        </div>
    `
    $('#conteudo').append(home)
    hideLoading()
})

$('.criadores').click(function() {
    $('#loader').show()
    let somos = `
        <div id="somos" class="row mt-5">
            <div class="col-12">
                <h1 class="text-white text-center">O que é BF4?</h1>
                <p class="text-white">
                Battlefield 4 (abreviado como BF4) é um jogo de tiro em primeira pessoa desenvolvido pela EA Digital Illusions CE (DICE) e publicado pela Electronic Arts. É o décimo terceiro título da série, sequência de Battlefield 3, e foi lançado entre outubro e novembro de 2013 para Microsoft Windows, PlayStation 3, Xbox 360, PlayStation 4 e Xbox One.

                Em Julho de 2012, Battlefield 4 foi anunciado não oficialmente, depois de ter sido publicitado que os clientes que fizessem a pré-reserva de Medal of Honor: Warfighter teriam acesso antecipado à beta de Battlefield 4.
                
                Battlefield 4 foi no geral bem recebido pela critica especializada, com os sites de criticas agregadas GameRankings e Metacritic dando à versão PC 85,39% e 85/100, à versão PlayStation 3 81,87% e 86/100, à versão PlayStation 4 85,00% e 87/100 e à versão Xbox 360 81,00% e 81/100, respectivamente
                </p><br><br>
                <img src="img/neve.jpg" width="1019" height="573" class="text-center mb-5">
            </div>
        </div>
    `
    $('#conteudo').empty()
    $('#conteudo').append(somos)
    hideLoading()
})

$('.desenvolvimento').click(function() {
    $('#loader').show()
    let produtos = `
        <div id="produtos" class="row mt-5">
            <div class="col-12">
                <h1 class="text-center text-white">Desenvolvimento</h1>
                <p class="text-white">
                Frank Gibeau, presidente da Electronic Arts, confirmou que a companhia tinha intenções de editar uma sequência, durante uma nota na Universidade da Califórnia, onde disse "Haverá um Battlefield 4". Mais tarde, um porta-voz da EA disse à IGN: "Frank estava falando amplamente sobre a marca Battlefield - uma marca pela qual a EA é profundamente apaixonada e tem uma comunidade de fãs com a qual a EA está comprometida." Na véspera do lançamento de Battlefield 3, a DICE afirmou à Eurogamer que tinham esperança de um dia fazer Battlefield 4. "É como se fosse o primeiro dia," disse o produtor executivo Patrick Bach. "É excitante. O motor Frostbite 2 abriu-nos um enorme horizonte e podemos fazer aquilo que quisermos".
                Devido à recepção variada ao modo Co-op de Battlefield 3, a DICE decidiu omitir esse modo de Battlefield 4 para focar principalmente na campanha e no multijogador.
                A DICE abriu um beta disponível para Windows (64 Bit), Xbox 360 e PlayStation 3. Continha os modos Domination, Conquest e Obliteration usados no mapa "Siege of Shanghai". O beta começou a 4 de outubro de 2013 e terminou a 15 de outubro de 2013.</p>
            </div><br><br>
            <img src="img/floresta.jpg" width="1019" height="573" class="text-center mb-5">
        </div>
    `
    $('#conteudo').empty()
    $('#conteudo').append(produtos)
    hideLoading()
})

$(`.comentar`).click(function() {
    $(`#loader`).show()
    let comentar = `
    <div class="row mt-3 border-top">
    <p class="text-white text-center h2 col-md-8 mt-3">Envie seu comentário:</p><br><br>
            <div class="col-md-8 mt-3">
                <input type="text" id="nome" class="form-control" value="">
            </div>
            <div class="col-md-2 mt-3">
                <button class="btn btn-success btn-block btn-comentar" onclick="alert('Seu comentário sobre o jogo foi enviado!!!')">Comentar</button>
            </div>
            <br><br><br><br>
            <img src="img/faca.jpg" width="1019" height="573" class="text-center mb-5">
    </div>
    `
    $('#conteudo').empty()
    $('#conteudo').append(comentar)
    hideLoading()
})


$('.menu').click(function() {
    $('#loader').show()
    let home = `
        
    `
    $('#conteudo').empty()
    $('#conteudo').append(home)
    hideLoading()
})

$(document).ready(function() {
    $('#menu').hide()
})

$('.btn-menu').click(function() {
    $('#menu').toggle('slide')
})
$('.btn-menu2').click(function() {
    $('#modalBunitinhu').toggle('slide')
})

$(`.videos`).click(function() {
    $(`#loader`).show()
    let videos = `
    <div class="text-center">
        <p class="text-white h1">
            <b>CONFIRA ALGUMAS GAMEPLAYS</b>
        </p><br><br>
        <p><iframe width="1019" height="573" src="https://www.youtube.com/embed/s8UZFUYqaas" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        <br><br>
        <p><iframe width="1019" height="573" src="https://www.youtube.com/embed/-ZyNU0NoGrA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
    </div>
    `
    $('#conteudo').empty()
    $('#conteudo').append(videos)
    hideLoading()
})

$(document).ready(function() {

    $('#produtos').click(function() {
        $('.modal-title').empty()
        $('.modal-body').empty()

        let body = `
        <p class="text-justify"><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit cumque, eos aut molestias recusandae tempora dolorem ex doloremque natus illo aperiam dolorum veniam at? Dolor cum odio harum numquam velit.</span><span>Nihil soluta, dolor officia deserunt odio voluptatem enim exercitationem cumque repellendus, praesentium possimus ullam dolores voluptatibus veniam doloribus obcaecati assumenda harum molestiae numquam itaque consectetur. Omnis sit ducimus ipsa impedit?</span></p>
        `

        $('.modal-title').append('Produtos disponíveis')
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