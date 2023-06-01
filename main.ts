let AR = 0
let t = 0
let az = 0
let ay = 0
let ax = 0
let t2 = 0
let z = 0
let y = 0
let x = 0
let t1 = 0
radio.setGroup(1)
basic.forever(function () {
    t1 = input.runningTime()
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    z = input.acceleration(Dimension.Z)
    t2 = input.runningTime()
    ax = x / 1000 * 9.8
    ay = y / 1000 * 9.8
    az = z / 1000 * 9.8
    t = t2 - t1
    AR = Math.sqrt(ax ** 2 + (ay ** 2 + az ** 2))
})
