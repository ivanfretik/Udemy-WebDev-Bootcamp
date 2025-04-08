/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import { input } from '@inquirer/prompts';
import qr from 'qr-image';
import fs from 'fs';

const url = await input({ message: 'Ingrese una URL' });
qr.image(url, { type: 'png', size: 5 }).pipe(fs.createWriteStream('qr69.png'));
fs.writeFileSync('azirasra.txt', url);