let usuarios = []
let carrinho = []

function formCadastro() {

    let name = document.querySelector("#cadInputName").value
    let email = document.querySelector("#cadInputEmail").value
    let password = document.querySelector("#cadInputPassword").value

    let user = {
        name,
        email,
        password
    }

    usuarios.push(user)
    console.log(usuarios);
}

function Login() {

    let email = document.querySelector("#loginInputEmail").value
    let password = document.querySelector("#loginInputPassword").value

    let resultado = usuarios.find(usuario => usuario.email === email)

    if (resultado === undefined) {
        alert("Email not found!")
        return
    }

    if (resultado.password != password) {
        alert("Email or password invalid!")
        return
    }

    alert(`Welcome ${resultado.name}`)
}



function adicionarCarrinho() {

    let price = document.querySelector("#product-form-price").textContent
    let title = document.querySelector("#titulo-produto").textContent
    let qtd = document.querySelector("#input-qty").value
    let color = document.querySelector("#select-color").value

    let produto = {
        title,
        price,
        qtd,
        color
    }

    carrinho.push(produto)
    alert("Product added to cart!")

    atualizarCarrinho()
}

function atualizarCarrinho() {

    let divCarrinho = document.querySelector("#div-carrinho")

    divCarrinho.textContent = ""

    carrinho.map(produto => {
        divCarrinho.innerHTML += `<div class="card">
                                        <div class="card-body">
                                        <div class="row">
                                            <div class="col">
                                                <h5 class="card-title">${produto.title}</h5>
                                                <p class="card-text">
                                                Price: <b>${produto.price}</b>
                                                </p>
                                                <p class="card-text">
                                                Amount: <b>${produto.qtd}</b>
                                                </p>
                                                <p class="card-text">
                                                Color: <b>${produto.color}</b>
                                                </p></div>
                                        </div>
                                        </div>
                                    </div>`;                           
    })

}