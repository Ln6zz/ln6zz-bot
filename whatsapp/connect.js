const { WAConnection: _WAConnection, MessageType } = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const figlet = require('figlet')
const fs = require('fs')
const { color } = require('../lib/color')
const simple = require('../src/simple')
const WAConnection = simple.WAConnection(_WAConnection)

const udin = new WAConnection()
exports.udin = udin

exports.connect = async() => {
    let authofile = './zainudin.json'
    udin.version = [2, 2143, 8]
    udin.browserDescription = [ 'XZN', 'Firefox', '3.0' ]
	udin.logger.level = 'warn'
	console.log(color(figlet.textSync('XZN SENPAI', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ LN6ZZ]'))
	udin.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('[UDIN]', 'yellow'), color('Scan Qr'))
    })
    
	/*udin.on('credentials-updated', () => {
		fs.writeFileSync(authofile, JSON.stringify(udin.base64EncodedAuthInfo(), null, '\t'))
		console.log(color('Wait....'))
	})*/
    
	fs.existsSync(authofile) && udin.loadAuthInfo(authofile)
console.log(color(`[ • BOT Creator By XZNSENPAI • ]` ,'cyan'))
console.log(color(`< ================================================== >`, 'cyan'))
console.log(color(`[•]`, 'aqua'), color(`Nama        : Ln6zzBot`, 'white'))
console.log(color(`[•]`, 'aqua'), color(`Bot Version : 0.0.1`, 'white'))
console.log(color(`[•]`, 'aqua'), color(`Status      : Online!`, 'white'))
console.log(color(`[•]`, 'aqua'), color(`Owner       : Ln6zz`, 'white'))
console.log(color(`< ================================================== >`, 'cyan'))
	udin.on('connecting', () => {
		console.log(color('[Connecting]', 'aqua'), color('Menghubungkan Whatsapp'))
	})
	udin.on('open', () => {
		console.log(color('[Connec]', 'aqua'), color('Terhubung Mhehehe'))
	}) 
	await udin.connect({timeoutMs: 30*1000})
    fs.writeFileSync(authofile, JSON.stringify(udin.base64EncodedAuthInfo(), null, '\t'))
	return udin
}