enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        .............ccfff..............
        ...........ccddbcf..............
        ..........ccddbbf...............
        ..........fccbbcf...............
        .....fffffccccccff.........ccc..
        ...ffbbbbbbbcbbbbcfff....ccbbc..
        ..fbbbbbbbbcbcbbbbcccff.cdbbc...
        ffbbbbbbffbbcbcbbbcccccfcdbbf...
        fbcbbb11ff1bcbbbbbcccccffbbf....
        fbbb11111111bbbbbcccccccbbcf....
        .fb11133cc11bbbbcccccccccccf....
        ..fccc31c111bbbcccccbdbffbbcf...
        ...fc13c111cbbbfcddddcc..fbbf...
        ....fccc111fbdbbccdcc.....fbbf..
        ........ccccfcdbbcc........fff..
        .............fffff..............
        `,img`
        .............ccfff..............
        ............cddbbf..............
        ...........cddbbf...............
        ..........fccbbcf............ccc
        ....ffffffccccccff.........ccbbc
        ..ffbbbbbbbbbbbbbcfff.....cdbbc.
        ffbbbbbbbbbcbcbbbbcccff..cddbbf.
        fbcbbbbbffbbcbcbbbcccccfffdbbf..
        fbbb1111ff1bcbcbbbcccccccbbbcf..
        .fb11111111bbbbbbcccccccccbccf..
        ..fccc33cc11bbbbccccccccfffbbcf.
        ...fc131c111bbbcccccbdbc...fbbf.
        ....f33c111cbbbfdddddcc.....fbbf
        .....ff1111fbdbbfddcc........fff
        .......cccccfbdbbfc.............
        .............fffff..............
        `,img`
        ..............cfff..............
        ............ccddbf..............
        ...........cbddbff.........ccc..
        ..........fccbbcf.........cbbc..
        ...fffffffccccccff.......cdbc...
        .ffcbbbbbbbbbbbbbcfff....cdbf...
        fcbbbbbbbbbcbbbbbbcccff.cdbf....
        fbcbbbbffbbbcbcbbbcccccffdcf....
        fbb1111ffbbbcbcbbbccccccbbcf....
        .fb11111111bbcbbbccccccccbbcf...
        ..fccc33cb11bbbbcccccccfffbbf...
        ...fc131c111bbbcccccbdbc..fbbf..
        ....f33c111cbbccdddddbc....fff..
        .....ff1111fdbbccddbcc..........
        .......cccccfdbbbfcc............
        .............fffff..............
        `,img`
        .............ccfff..............
        ............cddbbf..............
        ...........cddbbf...............
        ..........fccbbcf............ccc
        ....ffffffccccccff.........ccbbc
        ..ffbbbbbbbbbbbbbcfff.....cdbbc.
        ffbbbbbbbbbcbcbbbbcccff..cddbbf.
        fbcbbbbbffbbcbcbbbcccccfffdbbf..
        fbbb1111ff1bcbcbbbcccccccbbbcf..
        .fb11111111bbbbbbcccccccccbccf..
        ..fccc33cc11bbbbccccccccfffbbcf.
        ...fc131c111bbbcccccbdbc...fbbf.
        ....f33c111cbbbfdddddcc.....fbbf
        .....ff1111fbdbbfddcc........fff
        .......cccccfbdbbfc.............
        .............fffff..............
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ..............fffcc.............
        ..............fcbddcc...........
        ...............fbbddcc..........
        ...............fcbbccf..........
        ..ccc.........ffccccccfffff.....
        ..cbbcc....fffcbbbbcbbbbbbbff...
        ...cbbdc.ffcccbbbbcbcbbbbbbbbf..
        ...fbbdcfcccccbbbcbcbbffbbbbbbff
        ....fbbffcccccbbbbbcb1ff11bbbcbf
        ....fcbbcccccccbbbbb11111111bbbf
        ....fcccccccccccbbbb11cc33111bf.
        ...fcbbffbdbcccccbbb111c13cccf..
        ...fbbf..ccddddcfbbbc111c31cf...
        ..fbbf.....ccdccbbdbf111cccf....
        ..fff........ccbbdcfcccc........
        ..............fffff.............
        `,img`
        ..............fffcc.............
        ..............fbbddc............
        ...............fbbddc...........
        ccc............fcbbccf..........
        cbbcc.........ffccccccffffff....
        .cbbdc.....fffcbbbbbbbbbbbbbff..
        .fbbddc..ffcccbbbbcbcbbbbbbbbbff
        ..fbbdfffcccccbbbcbcbbffbbbbbcbf
        ..fcbbbcccccccbbbcbcb1ff1111bbbf
        ..fccbcccccccccbbbbbb11111111bf.
        .fcbbfffccccccccbbbb11cc33cccf..
        .fbbf...cbdbcccccbbb111c131cf...
        fbbf.....ccdddddfbbbc111c33f....
        fff........ccddfbbdbf1111ff.....
        .............cfbbdbfccccc.......
        ..............fffff.............
        `,img`
        ..............fffc..............
        ..............fbddcc............
        ..ccc.........ffbddbc...........
        ..cbbc.........fcbbccf..........
        ...cbdc.......ffccccccfffffff...
        ...fbdc....fffcbbbbbbbbbbbbbcff.
        ....fbdc.ffcccbbbbbbcbbbbbbbbbcf
        ....fcdffcccccbbbcbcbbbffbbbbcbf
        ....fcbbccccccbbbcbcbbbff1111bbf
        ...fcbbccccccccbbbcbb11111111bf.
        ...fbbfffcccccccbbbb11bc33cccf..
        ..fbbf..cbdbcccccbbb111c131cf...
        ..fff....cbdddddccbbc111c33f....
        ..........ccbddccbbdf1111ff.....
        ............ccfbbbdfccccc.......
        ..............fffff.............
        `,img`
        ..............fffcc.............
        ..............fbbddc............
        ...............fbbddc...........
        ccc............fcbbccf..........
        cbbcc.........ffccccccffffff....
        .cbbdc.....fffcbbbbbbbbbbbbbff..
        .fbbddc..ffcccbbbbcbcbbbbbbbbbff
        ..fbbdfffcccccbbbcbcbbffbbbbbcbf
        ..fcbbbcccccccbbbcbcb1ff1111bbbf
        ..fccbcccccccccbbbbbb11111111bf.
        .fcbbfffccccccccbbbb11cc33cccf..
        .fbbf...cbdbcccccbbb111c131cf...
        fbbf.....ccdddddfbbbc111c33f....
        fff........ccddfbbdbf1111ff.....
        .............cfbbdbfccccc.......
        ..............fffff.............
        `],
    200,
    true
    )
})
info.onLifeZero(function () {
    sprites.destroy(mySprite, effects.fire, 500)
    myDigit = game.runtime() / 1000 / 60
    info.setScore(myDigit)
    game.setGameOverEffect(true, effects.bubbles)
    game.gameOver(true)
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (level == 0 && (otherSprite.image.equals(assets.image`Minnow`) || otherSprite.image.equals(assets.image`MinnowR`))) {
        sprites.destroy(otherSprite, effects.fire, 100)
        count += 1
    } else {
        if (level == 1 && (otherSprite.image.equals(assets.image`Left`) || (otherSprite.image.equals(assets.image`right`) || (otherSprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c c . . . 
            . . . . . . c 5 5 5 5 5 c c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . . c b b b b 1 b b c c . . 
            . . . . c 1 1 b b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 b b c c 
            . . c c d 1 1 1 b 1 b 1 5 5 5 c 
            . . c c d 1 c 1 1 1 b 1 b b 5 c 
            . c c d d 1 1 1 1 1 b 1 f b 5 c 
            f d d d 1 1 1 1 1 b b b f . c c 
            f f f f f 1 1 1 b b 5 5 5 f . . 
            . . . . . f f f 5 5 5 5 5 f . . 
            . . . . . . . . f f f f f f . . 
            `) || (otherSprite.image.equals(assets.image`righty`) || (otherSprite.image.equals(assets.image`Minnow`) || otherSprite.image.equals(assets.image`MinnowR`))))))) {
            sprites.destroy(otherSprite, effects.fire, 100)
            count += 1
        } else {
            if (level == 2 && (otherSprite.image.equals(assets.image`Left`) || (otherSprite.image.equals(assets.image`right`) || (otherSprite.image.equals(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . c c c c c c . . . 
                . . . . . . c 5 5 5 5 5 c c . . 
                . . . . . c 5 5 5 5 5 5 5 5 c . 
                . . . . c b b b b b b 5 5 5 c . 
                . . . . c b b b b 1 b b c c . . 
                . . . . c 1 1 b b 1 1 1 c . . . 
                . . . c 1 1 1 1 b 1 1 1 c . . . 
                . . . c 1 1 1 1 b 1 1 1 b b c c 
                . . c c d 1 1 1 b 1 b 1 5 5 5 c 
                . . c c d 1 c 1 1 1 b 1 b b 5 c 
                . c c d d 1 1 1 1 1 b 1 f b 5 c 
                f d d d 1 1 1 1 1 b b b f . c c 
                f f f f f 1 1 1 b b 5 5 5 f . . 
                . . . . . f f f 5 5 5 5 5 f . . 
                . . . . . . . . f f f f f f . . 
                `) || (otherSprite.image.equals(assets.image`righty`) || (otherSprite.image.equals(assets.image`Minnow`) || otherSprite.image.equals(assets.image`MinnowR`) || (otherSprite.image.equals(assets.image`huh`) || otherSprite.image.equals(assets.image`huhr`)))))))) {
                sprites.destroy(otherSprite, effects.fire, 100)
                count += 1
            } else {
                mySprite.startEffect(effects.fire)
                pause(250)
                mySprite.setPosition(80, 60)
                effects.clearParticles(mySprite)
                info.changeLifeBy(-1)
            }
        }
    }
})
let X = 0
let mySprite2: Sprite = null
let list: Image[] = []
let myDigit = 0
let level = 0
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`Deep Blue`)
mySprite = sprites.create(img`
    .............ccfff..............
    ...........ccddbcf..............
    ..........ccddbbf...............
    ..........fccbbcf...............
    .....fffffccccccff.........ccc..
    ...ffbbbbbbbcbbbbcfff....ccbbc..
    ..fbbbbbbbbcbcbbbbcccff.cdbbc...
    ffbbbbbbffbbcbcbbbcccccfcdbbf...
    fbcbbb11ff1bcbbbbbcccccffbbf....
    fbbb11111111bbbbbcccccccbbcf....
    .fb11133cc11bbbbcccccccccccf....
    ..fccc31c111bbbcccccbdbffbbcf...
    ...fc13c111cbbbfcddddcc..fbbf...
    ....fccc111fbdbbccdcc.....fbbf..
    ........ccccfcdbbcc........fff..
    .............fffff..............
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.setScale(0.5, ScaleAnchor.Middle)
controller.moveSprite(mySprite)
level = 0
let count = 0
info.setLife(3)
game.onUpdateInterval(randint(1000, 2000), function () {
    list = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . . . 
        . . . c 4 d 4 4 4 4 4 1 c . c c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
        . f 4 4 4 4 1 c 4 f 4 d f f f f 
        . . f f 4 d 4 4 f f 4 c f c . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c c c c . . . 
        . . . . . . c 5 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c b b b b 1 b b c c . . 
        . . . . c 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 b b c c 
        . . c c d 1 1 1 b 1 b 1 5 5 5 c 
        . . c c d 1 c 1 1 1 b 1 b b 5 c 
        . c c d d 1 1 1 1 1 b 1 f b 5 c 
        f d d d 1 1 1 1 1 b b b f . c c 
        f f f f f 1 1 1 b b 5 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        `,
    assets.image`Minnow`,
    assets.image`huh`,
    assets.image`orca`
    ]
    mySprite2 = sprites.create(list._pickRandom(), SpriteKind.Food)
    mySprite2.y = randint(0, 150)
    X = randint(0, 1)
    if (X == 0) {
        mySprite2.image.flipX()
        mySprite2.x = 0
        pause(50)
        mySprite2.setVelocity(randint(10, 50), randint(-50, 50))
        timer.after(randint(250, 1000), function () {
            mySprite2.vy += randint(-35, 35)
        })
    } else {
        mySprite2.x = 160
        mySprite2.setVelocity(randint(-10, -50), randint(-50, 50))
        timer.after(randint(250, 1000), function () {
            mySprite2.vy += randint(-35, 35)
        })
    }
})
game.onUpdate(function () {
    info.setScore(count)
    if (count == 10) {
        level = 1
        mySprite.setScale(0.75, ScaleAnchor.Middle)
    }
    if (count == 30) {
        level = 2
        mySprite.setScale(1.25, ScaleAnchor.Middle)
    }
    if (count == 50) {
        scene.setBackgroundImage(assets.image`Canyon`)
    }
})
forever(function () {
    effects.bubbles.startScreenEffect(500)
    pause(2000)
})
