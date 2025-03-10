function tile(url, left, bottom, width, height) {
    for(let h = 0; h < height; h++) {
        for(let w = 0; w < width; w++) {
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem (url, left, bottom) {
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

let horizon = window.innerHeight / 1.75
let skyHeight = window.innerHeight-horizon
let grassHeight = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, skyHeight/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, grassHeight/100)

newItem('assets/green-character.gif', 100, 100)
newItem('assets/tree.png', 200, 300)
newItem('assets/pillar.png', 350, 100)
newItem('assets/crate.png', 150, 200)
newItem('assets/well.png', 500, 425)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)
newItem('assets/sword.png', 500, 405)