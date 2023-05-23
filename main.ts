input.onButtonPressed(Button.A, function () {
    fire = 0
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    if (run == 0) {
        run = 1
        score = 0
        fire = 0
        game.resume()
        ufo.set(LedSpriteProperty.X, randint(0, 4))
        ufo.set(LedSpriteProperty.Y, 0)
        ufo.set(LedSpriteProperty.Brightness, 255)
    } else {
        fire = 1
    }
})
input.onButtonPressed(Button.B, function () {
    fire = 0
    player.change(LedSpriteProperty.X, 1)
})
let score = 0
let fire = 0
let ufo: game.LedSprite = null
let player: game.LedSprite = null
let run = 0
run = 0
player = game.createSprite(2, 4)
let bullet = game.createSprite(0, 4)
bullet.set(LedSpriteProperty.Brightness, 0)
ufo = game.createSprite(2, 0)
ufo.set(LedSpriteProperty.Brightness, 0)
basic.forever(function () {
    if (fire == 1) {
        fire = 0
        bullet.set(LedSpriteProperty.X, player.get(LedSpriteProperty.X))
        bullet.set(LedSpriteProperty.Brightness, 30)
        for (let index = 0; index < 4; index++) {
            bullet.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
    }
    bullet.set(LedSpriteProperty.Brightness, 0)
    bullet.set(LedSpriteProperty.Y, 4)
})
basic.forever(function () {
    if (run == 1) {
        if (bullet.isTouching(ufo)) {
            score += 1
            ufo.set(LedSpriteProperty.X, randint(0, 4))
            ufo.set(LedSpriteProperty.Y, 0)
        }
    }
})
basic.forever(function () {
    if (run == 1) {
        ufo.change(LedSpriteProperty.Y, 1)
        if (ufo.get(LedSpriteProperty.Y) == 4) {
            run = 0
            game.pause()
            while (run == 0) {
                basic.showNumber(score)
            }
        }
        basic.pause(500)
    }
})
