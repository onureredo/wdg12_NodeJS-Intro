import fs from 'fs';

const file = './something.txt';

try {
  const data = fs.readFileSync(file, 'utf-8');
  console.log('Dateiinhalt:', data);
} catch (err) {
  console.error('Fehler beim Lesen der Datei:', err);
}

console.log('Datei wurde gelesen');
