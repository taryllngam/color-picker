const colorInput = document.getElementById('color');
const hex = document.getElementById('hex');

colorInput.addEventListener('input', () =>{
    let color = colorInput.value;
    hex.value = color;
    document.body.style.backgroundColor = color;
})