// Simple File Reader by Syed Ali Hussain
import * as fs from 'fs';
let data = fs.readFileSync('data.txt', 'utf-8');

console.log(data)