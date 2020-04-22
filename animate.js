const phrases = [
    `"Faça hoje o que te trará orgulho Amanhã."`,
    `"Vencer pode ser difícil, mas com foco e força e fé não há lutas impossíveis."`,
    `"Distrações no meu caminho não tiram meu foco nas metas que tenho!"`,
    `"Mantenha o foco, sem nuvem nem poeira, e tudo dará certo."`,
    `"Com determinação e foco no sucesso todos os sonhos vão se realizar."`
]

const phrase = document.getElementById('motivate-message')


function randomPhrase() {
    return phrases[Math.floor(Math.random() * 4)]
}

function typePhrase() {
    phrase.textContent = ""
    phrase.textContent = randomPhrase()
}

window.setInterval(() => { typePhrase() }, 10000)