// Exemplo de uso de operador ternário substituindo estrutura condicional.

let gender = 'f' // 'm'

// Ou escreve com essa estrutura condicional inteira.
if (gender === 'f') {
  result.innerHTML = 'Temos aqui uma mulher.'
} else {
  result.innerHTML = 'Temos aqui um homem.'
}

// Ou escreve com este operador ternário.
result.innerHTML = gender === 'f' ? 'Temos aqui uma mulher.' : 'Temos aqui um homem.'
