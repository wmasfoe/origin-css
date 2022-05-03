const targetDOM = document.querySelector('.checkerboard')

class Game {
  constructor(
    public speed
  ) {}
}

class Board {}

class Block {
  // 生成白块
  whiteBlock() {
    const _div = document.createElement('div')
    _div.classList.add('block white-block')

    return _div
  }
  blackBlock() {
    const _div = document.createElement('div')
    _div.classList.add('block black-block')

    return _div
  }
  createCol() {
    const _div = document.createElement('div')
    _div.classList.add('col')

    return _div
  }
  
}
