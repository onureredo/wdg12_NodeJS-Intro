import fs from 'fs';

const file = './something.txt';

fs.readFile(file, 'utf-8', (err, data) => {
  if (err) {
    console.error('Fehler beim Lesen der Datei:', err);
    return;
  }
  console.log('Dateiinhalt:', data);
});

console.log('Datei wird gelesen...');
