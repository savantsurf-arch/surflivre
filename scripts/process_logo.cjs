const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function analyzeAndProcess() {
  const img1Path = 'C:\\Users\\NITRO5\\.gemini\\antigravity\\brain\\9b5b5e08-83b8-4b54-809e-43e76b34bba8\\.user_uploaded\\media_1788457128261.jpg';
  const img2Path = 'C:\\Users\\NITRO5\\.gemini\\antigravity\\brain\\9b5b5e08-83b8-4b54-809e-43e76b34bba8\\.user_uploaded\\media_1788457225992.png';

  const meta1 = await sharp(img1Path).metadata();
  console.log('Image 1 metadata:', meta1);

  const meta2 = await sharp(img2Path).metadata();
  console.log('Image 2 metadata:', meta2);

  // Let's get raw pixel buffer of Image 1
  const { data, info } = await sharp(img1Path)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  console.log('Raw buffer size:', data.length, 'info:', info);

  // Background sample at corners (0,0)
  const bgR = data[0];
  const bgG = data[1];
  const bgB = data[2];
  console.log(`Sampled background color at (0,0): RGB(${bgR}, ${bgG}, ${bgB})`);

  // Target logo color (turquoise)
  // Let's create high quality alpha mask:
  // For pixels close to background color, alpha = 0
  // For pixels with strong saturation / turquoise color, alpha = 255
  // For edge pixels, calculate smooth interpolation based on distance to bg color.

  const outBuffer = Buffer.alloc(data.length);

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // Euclidean distance from background color
    const dist = Math.sqrt(
      (r - bgR) ** 2 +
      (g - bgG) ** 2 +
      (b - bgB) ** 2
    );

    // Also check color tint: the logo has significantly more G and B than R
    // Background is near-white with r ~ 250, g ~ 248, b ~ 244
    const isBgLike = dist < 22;

    if (isBgLike) {
      outBuffer[i] = r;
      outBuffer[i + 1] = g;
      outBuffer[i + 2] = b;
      outBuffer[i + 3] = 0; // Completely transparent
    } else if (dist < 60) {
      // Smooth edge antialiasing
      const alphaFactor = (dist - 22) / (60 - 22);
      outBuffer[i] = r;
      outBuffer[i + 1] = g;
      outBuffer[i + 2] = b;
      outBuffer[i + 3] = Math.round(alphaFactor * 255);
    } else {
      outBuffer[i] = r;
      outBuffer[i + 1] = g;
      outBuffer[i + 2] = b;
      outBuffer[i + 3] = 255;
    }
  }

  const outDir = 'C:\\Users\\NITRO5\\.gemini\\antigravity\\scratch\\surflivre-experience\\public';
  const transparentPngPath = path.join(outDir, 'surflivre_logo_transparent.png');

  // Also trim empty transparent edges
  await sharp(outBuffer, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
  .trim() // Trims transparent padding
  .png({ quality: 100, compressionLevel: 9 })
  .toFile(transparentPngPath);

  console.log('Saved trimmed transparent PNG to:', transparentPngPath);

  // Also create a 2x super-resolution crisp version with enhanced vibrancy
  const trimmedMeta = await sharp(transparentPngPath).metadata();
  console.log('Trimmed logo metadata:', trimmedMeta);

  const hdPngPath = path.join(outDir, 'surflivre_logo_hd.png');
  await sharp(transparentPngPath)
    .resize(trimmedMeta.width * 2, trimmedMeta.height * 2, {
      kernel: sharp.kernel.lanczos3
    })
    .png({ quality: 100 })
    .toFile(hdPngPath);

  console.log('Saved HD 2x PNG to:', hdPngPath);
}

analyzeAndProcess();
