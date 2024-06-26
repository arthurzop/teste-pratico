document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);
    const nota5 = parseFloat(document.getElementById('nota5').value);

    const notas = [nota1, nota2, nota3, nota4, nota5]

    const notasAcima = notas.filter(nota => nota > 70).length

    const porcentagem = (notasAcima / notas.length) * 100

    document.getElementById('resultado').innerText = `Percentual de Alunos com nota acima de 70: ${porcentagem.toFixed(2)}%`
});