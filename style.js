const TOKEN = '6083774594:AAGjkti-sdnmNkGpQvwplA3WOR5-HtW16OQ'
const CHAT_ID = '-1001947436112'
const URL = `https://api.telegram.org/bot${ TOKEN }/sendMessage`
const success = document.getElementById('success')

document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault()

    let massage = 'Saytdan habar keldi!!!\n\n'
    massage += `YUBORUVCHI: ${ this.name.value}\n\n`
    massage += `MATN: ${ this.text.value}\n`


    axios.post(URL,{
        chat_id:CHAT_ID,
        porse_mod:'html',
        text:massage
    })

    .then((res) => {
        this.name.value = ''
        this.text.value = ''
        success.innerHTML = 'Xabar yuborildi!'
        success.style.display = 'block'
    })

    .catch((err) => {
        console.warn(err);
    })

    .finally(() => {
        console.log('Tugatildi');
    })


})