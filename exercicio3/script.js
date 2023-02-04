//Exercício 3 - parte 1
const opA = 5 > 20 && 5 < 2
console.log('opA',opA)

const opB = 5 === 5 || 5 === '5'
console.log('opB',opB)

const opC = !(20>50)
console.log('opC',opC)

const opD = !(20 > 50 || 50 > 60)
console.log('opD',opD)

// parte 2

//item 1)
const salarioFixo = 2000
const auxCreche = 45.50*2
const salarioMaisBeneficios = salarioFixo+auxCreche
console.log(`O salário com os benefícios é de: ${salarioMaisBeneficios}`)

//item 2)
const comissaoJan = 5784.50*0.1
console.log(`A comissão de Janeiro foi de ${comissaoJan}`)

//item 3)
const inssJan = (salarioFixo+comissaoJan)*0.05
console.log (`O desconto do INSS em janeiro foi de ${inssJan}`)


//item 4)

const salarioJan = (salarioMaisBeneficios+comissaoJan)-inssJan
console.log (`O salário líquido de Janeiro foi de: ${salarioJan}`)


const comissaoFev = 3418.41*0.1
const inssFev = (salarioFixo + comissaoFev)*0.05

const salarioFev = (salarioMaisBeneficios+comissaoFev)-inssFev
console.log (`O salário líquido de Fevereiro foi de: ${salarioFev}`)


const comissaoMar = 4124.10*0.1
const inssMar = (salarioFixo + comissaoMar)*0.05

const salarioMar = (salarioMaisBeneficios+comissaoMar)-inssMar
console.log (`O salário líquido de Março foi de: ${salarioMar}`)


const comissaoAbr = 1874.00*0.1
const inssAbr = (salarioFixo + comissaoAbr)*0.05

const salarioAbr = (salarioMaisBeneficios+comissaoAbr)-inssAbr
console.log (`O salário líquido de Abril foi de: ${salarioAbr}`)


const comissaoMai = 7000.00*0.1
const inssMai = (salarioFixo + comissaoMai)*0.05

const salarioMai = (salarioMaisBeneficios+comissaoMai)-inssMai
console.log (`O salário líquido de Maio foi de: ${salarioMai}`)


const comissaoJun = 9450.00*0.1
const inssJun = (salarioFixo + comissaoJun)*0.05

const salarioJun = (salarioMaisBeneficios+comissaoJun)-inssJun
console.log (`O salário líquido de Junho foi de: ${salarioJun}`)


//Item 5
//const media1Semestre = 
console.log (`A média salarial do primeiro semestre foi de ${(salarioJan+salarioFev+salarioMar+salarioAbr+salarioMai+salarioJun)/6}`)