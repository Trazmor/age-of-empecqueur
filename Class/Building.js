class Building {  
  constructor(x, y){    
    this.x = x,
    this.y = y
  }
  
  draw(){
    return({x: this.x, y: this.y});
  }
}

export default Building