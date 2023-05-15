let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy promotora del pensamiento STEM y fomento la igualdad de género universal.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
