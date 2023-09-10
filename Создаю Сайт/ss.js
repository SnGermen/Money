const vinput = document.querySelector(".number");
const vselect = document.querySelector('.select')
const vdiv = document.querySelector(".cash");

vinput.addEventListener('input', function() {
    const UACH = Number(vinput.value)
    const cuarrency = (vselect.value)
    const result = convert(UACH, cuarrency)
    
    vdiv.innerText = result
})

vselect.addEventListener('change', function() {
        const UACH = Number(vinput.value);
        const cuarrency = vselect.value;
        const result = convert(UACH, cuarrency);

        vdiv.innerText = result;
})