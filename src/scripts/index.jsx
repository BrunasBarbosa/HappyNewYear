export default function Firework() {
  const canvas = document.querySelector('canvas');
  const c = canvas.getContext('2d');

  canvas.width = innerWidth
  canvas.height = innerHeight

  const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
  }

  addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
  })

  addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
  })

  const gravity = 0.03
  const friction = 0.99

  class Particle {
    constructor(x, y, radius, color, velocity) {
      this.x = x
      this.y = y
      this.radius = radius
      this.color = color
      this.velocity = {
        x: velocity.x,
        y: velocity.y
      }
      this.opacity = 1
    }

    draw() {
      c.save()
      c.globalAlpha = this.opacity
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      c.fillStyle = this.color
      c.fill()
      c.closePath()
      c.restore()
    }

    update() {
      this.draw()
      this.velocity.x *= friction
      this.velocity.y *= friction
      this.velocity.y += gravity
      this.x += this.velocity.x
      this.y += this.velocity.y
      this.opacity -= 0.003
    }
  }

  addEventListener('click', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY

    const colors = ['203', '202', '182', '191', '177'];
    const randomElement = colors[Math.floor(Math.random() * colors.length)];
    const particleCount = 300;
    const power = 8;
    let radians = (Math.PI * 4) / particleCount;

    for (let i = 0; i < particleCount; i++) {
      particles.push(
        new Particle(
          mouse.x,
          mouse.y,
          2,
          `hsl(${randomElement}, 50%, 50%)`,
          {
            x: Math.cos(radians * i) * (Math.random() * power),
            y: Math.sin(radians * i) * (Math.random() * power)
          }
        )
      )
    }
  })

  let objects

  function init() {
    objects = []

    for (let i = 0; i < 400; i++) {
    }
  }

  let particles
  particles = []

  function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'rgba(0,0,0,0.05)'
    c.fillRect(0, 0, canvas.width, canvas.height)

    particles.forEach((particle, i) => {
      if (particle.opacity > 0) {
        particle.update()
      } else {
        particles.splice(i, 1)
      }
    })
  }

  init()
  animate()
}

export function HideText() {
  const text = document.querySelector('p');

  text.classList.add('hide');
  console.log('chegou aqui')
}