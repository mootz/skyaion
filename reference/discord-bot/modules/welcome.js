const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')

const items = fs.readdirSync('./assets')
let count = 0

const imageProperties = {
  width: 1100,
  height: 500
}
const canvas = createCanvas(imageProperties.width, imageProperties.height)

const createImage = async (user, img) => {
  let bgImage = getImage()
  const ctx = canvas.getContext('2d')
  ctx.font = 'regular 36px Roboto'

  const image = await loadImage(bgImage)
  ctx.drawImage(image, 0, 0)

  ctx.save()
  roundedImage(ctx, 450, 107, 200, 200, 110)
  ctx.clip()
  const avatar = await loadImage(img)
  ctx.drawImage(avatar, 450, 107, 200, 200)
  ctx.restore()

  ctx.fillStyle = '#fff'
  let text = `${user.tag} just joined the server`
  let textWidth = ctx.measureText(text).width
  ctx.fillText(text, (canvas.width/2) - (textWidth / 2), 375)

  const buffer = canvas.toBuffer('image/png')
  return buffer
}

function roundedImage(ctx, x, y, width, height, radius){
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.lineTo(x + width - radius, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
  ctx.lineTo(x + width, y + height - radius)
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
  ctx.lineTo(x + radius, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
  ctx.lineTo(x, y + radius)
  ctx.quadraticCurveTo(x, y, x + radius, y)
  ctx.closePath()
}

function getImage() {
  let item = count
  if(count === items.length) {
    count = 0
    return `./assets/${items[item]}`
  }
  count++
  return `./assets/${items[item]}`
}

module.exports = createImage