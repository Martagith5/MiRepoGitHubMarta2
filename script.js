function calcular() {
    const monto = document.getElementById('monto').value;
    const interesAnual = document.getElementById('interes').value;
    const plazoAnos = document.getElementById('plazo').value;

    if (monto && interesAnual && plazoAnos) {
        // Convertir interés anual a mensual y decimal
        const i = (interesAnual / 100) / 12;
        // Número total de pagos (meses)
        const n = plazoAnos * 12;

        // Fórmula de amortización
        const cuota = (monto * i) / (1 - Math.pow(1 + i, -n));

        // Mostrar resultado con dos decimales
        if (isFinite(cuota)) {
            document.getElementById('resultado').innerText = cuota.toFixed(2) + "€";
        } else {
            document.getElementById('resultado').innerText = "0.00€";
        }
    } else {
        document.getElementById('resultado').innerText = "0.00€";
    }
}