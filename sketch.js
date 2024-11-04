function setup() {
  createCanvas(600, 600);
  background(15, 25, 45);  // Colore blu scuro per lo sfondo
  noLoop();
  stroke(100, 200, 255);  // Colore azzurro per i glifi
  strokeWeight(2);
  noFill();

  // Disegna una serie di glifi in una griglia
  let cols = 5;
  let rows = 5;
  let spacing = width / cols;
  
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      push();
      translate(x * spacing + spacing / 2, y * spacing + spacing / 2);
      drawUniqueGlyph();  // Disegna un glifo unico
      pop();
    }
  }
}

// Funzione per disegnare un glifo unico
function drawUniqueGlyph() {
  // Numero casuale di segmenti (rami del glifo)
  let segments = int(random(3, 8));
  let angle = TWO_PI / segments;
  
  for (let i = 0; i < segments; i++) {
    push();
    rotate(i * angle); // Ruota per disporre ogni segmento attorno al centro
    
    // Lunghezza e tipo di elemento casuale
    let elementLength = random(10, 40);
    let shapeType = int(random(4)); // Seleziona casualmente tra diversi tipi di forma
    
    switch(shapeType) {
      case 0:
        line(0, 0, elementLength, 0); // Linea semplice
        break;
      case 1:
        ellipse(elementLength / 2, 0, random(5, 15)); // Cerchio
        break;
      case 2:
        rect(0, -elementLength / 4, elementLength, elementLength / 2); // Rettangolo
        break;
      case 3:
        triangle(0, 0, elementLength, -elementLength / 2, elementLength, elementLength / 2); // Triangolo
        break;
    }
    
    // Possibile aggiunta di tratto decorativo casuale
    if (random() > 0.6) {
      line(elementLength / 2, 0, elementLength / 2, random(-10, 10));
    }

    // Possibile aggiunta di cerchio o punto decorativo
    if (random() > 0.5) {
      let decorationSize = random(3, 8);
      ellipse(elementLength + 5, 0, decorationSize, decorationSize);
    }

    pop();
  }
}
