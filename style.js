const TOKEN = '6083774594:AAGjkti-sdnmNkGpQvwplA3WOR5-HtW16OQ'
const CHAT_ID = '-1001947436112'
const URL = `https://api.telegram.org/bot${ TOKEN }/sendMessage`


document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault()

    let massage = 'Saytdan habar keldi!!!\n'
    massage += `Yuborovchi: ${this.name.value}\n`
    massage += `Matn: ${this.text.value}\n`


    axios.post(URL,{
        chat_id:CHAT_ID,
        porse_mod:'html',
        text:massage
    })


})