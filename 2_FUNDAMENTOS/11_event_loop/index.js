function a() {
    console.log('Executando A')
}

function b() {
    console.log('Executando A')
}

function c() {
    console.log('Executando A')
    a()
    b()
}

c()