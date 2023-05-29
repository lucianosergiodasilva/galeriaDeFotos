const galeria = document.querySelector('.galeria');
const img_slideshow = document.querySelector('.slideshow img')
const overlay = document.querySelector('.overlay')
const contenedor = document.querySelector('.slideshow')
let imagensCriadas = []
let contador = 0
let quantidadeImagens = 20

// SRC das imagens para o overlay
const criarObjetoImagem = src => { return { src } }

// Imagens inseridas no HTML
const gerarImagens = (quantidadeImagens) => {
    for (let i = 1; i <= quantidadeImagens; i++) {
        imagensCriadas.push(criarObjetoImagem(`./img/${i}.jpg`))
        galeria.appendChild(document.createElement('img'))
        document.querySelectorAll('img')[i].setAttribute('src', `./img/${i}.jpg`)
        document.querySelectorAll('img')[i].setAttribute('data-imagem-mostrar', i)
    }
}
gerarImagens(quantidadeImagens)

// Abrir o overlay de cada foto
document.querySelectorAll('.galeria img').forEach(img => {
    img.addEventListener('click', (event) => {
        const dataImagemMostrar = parseInt(event.target.dataset.imagemMostrar) - 1
        img_slideshow.src = imagensCriadas[dataImagemMostrar].src
        contador = dataImagemMostrar
        overlay.style.opacity = 1
        overlay.style.visibility = 'visible'
    })
})

// Fechar o overlay clicando fora ou no X
document.addEventListener('click', (event) => {
    if (event.target.className === 'overlay' || event.target.className === 'btn_cerrar') {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    }
})

// Fechar o overlay clicando ESC
document.addEventListener('keyup', function (e) {
    if (e.key === 'Escape') {
        console.log('ESQ')
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    }
})

// Slideshow mudando para cada foto
contenedor.addEventListener('click', (event) => {
    const atras = contenedor.querySelector('.atras')
    const adelante = contenedor.querySelector('.adelante')
    const img = contenedor.querySelector('img')
    // Voltar
    if (event.target === atras) {
        console.log('atras')
        if(contador > 0){
            img.src = imagensCriadas[contador - 1].src
            contador--
        }
        // Vai para a última imagem
        else{
            img.src = imagensCriadas[imagensCriadas.length - 1].src
            contador = imagensCriadas.length - 1
        }
    }
    // Avançar
    else if (event.target === adelante) {
        console.log('adelante')
        if(contador < imagensCriadas.length - 1){
            img.src = imagensCriadas[contador + 1].src
            contador++
        }
        // Vai para a primeira imagem
        else{
            img.src = imagensCriadas[0].src
            contador = 0
        }
    }
})

// Navegegando pelas setas do teclado
document.addEventListener('keyup', (event) => {
    const atras = contenedor.querySelector('.atras')
    const adelante = contenedor.querySelector('.adelante')
    const img = contenedor.querySelector('img')
    // Voltar
    if (event.key === 'ArrowLeft') {
        console.log('atras')
        if(contador > 0){
            img.src = imagensCriadas[contador - 1].src
            contador--
        }
        // Vai para a última imagem
        else{
            img.src = imagensCriadas[imagensCriadas.length - 1].src
            contador = imagensCriadas.length - 1
        }
    }
    // Avançar
    else if (event.key === 'ArrowRight') {
        console.log('adelante')
        if(contador < imagensCriadas.length - 1){
            img.src = imagensCriadas[contador + 1].src
            contador++
        }
        // Vai para a primeira imagem
        else{
            img.src = imagensCriadas[0].src
            contador = 0
        }
    }
})