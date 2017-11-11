var canvas = document.getElementById('myCanvas')

if (canvas.getContext) {
    var ctx = canvas.getContext('2d')

    // 绘制线段
    ctx.beginPath()
    ctx.moveTo(20, 20)
    ctx.lineTo(100, 20)
    ctx.lineTo(60, 40)
    ctx.closePath()
    ctx.lineWidth = 1.0
    ctx.strokeStyle = 'red'
    ctx.stroke()

    // 绘制矩形
    // 1.填充的矩形
    ctx.fillStyle = 'yellow'
    ctx.fillRect(20, 60, 100, 80)
    // 2.非填充的矩形
    ctx.strokeStyle = 'blue'
    ctx.strokeRect(20, 150, 100, 80)
    ctx.clearRect(80, 60, 20, 20)

    // 绘制文本
    ctx.font = '40px Arial'
    ctx.textAlign = 'center'
    ctx.fillStyle = '#000000'
    ctx.fillText('hello canvas', 20, 240)
    ctx.strokeText('hello canvas', 20, 300)

    // 绘制圆
    // 1.实心圆
    ctx.beginPath()
    ctx.arc(150, 50, 25, 0, Math.PI * 2, true)
    ctx.fillStyle = '#ff8899'
    ctx.fill()
    // 2.空心圆
    ctx.beginPath()
    ctx.arc(150, 100, 25, 0, Math.PI, false)
    ctx.closePath()
    ctx.lineWidth = 2.0
    ctx.strokeStyle = '#554433'
    ctx.stroke()

    // 渐变色
    var myGradient = ctx.createLinearGradient(150, 150, 150, 250)
    myGradient.addColorStop(0, 'blue')
    myGradient.addColorStop(1, 'green')
    ctx.fillStyle = myGradient
    ctx.fillRect(150, 150, 100, 100)

    // 阴影
    ctx.shadowOffsetX = 10
    ctx.shadowOffsetY = 10
    ctx.shadowBlur = 5
    ctx.shadowColor = 'rgba(0, 0, 0, .5)'
    ctx.strokeStyle = '#000000'
    ctx.strokeRect(150, 300, 100, 100)
}