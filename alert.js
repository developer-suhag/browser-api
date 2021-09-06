// alert('Khobor ache tor')

const picnicAlert = () => {
    alert("It's pinic time")
};

const askPicnic = () => {
    const respone = confirm('Toi ki jabi?')
    if (respone) {
        prompt('Nam bol tor')
    } else {
        alert('DGM')
    }
}

const askName = () => {
    prompt('What is your name?')
}