window.onload = () => {
  const maxRGB = 255;

  const rgbToHex = (r, g, b) => `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

  const hexToRgb = (hex) => {
    const h = parseInt(hex, 16);
    const rgb = {
      r: (h >> 16) & 0xff, // or `(i & 0xFF0000) >> 16`
      g: (h >> 8) & 0xff, // or `(i & 0x00FF00) >>  8`
      b: h & 0xff, // or ` i & 0x0000FF       `
    };
    return rgb;
  };

  const r = document.querySelector('#r');
  const g = document.querySelector('#g');
  const b = document.querySelector('#b');
  const hex = document.querySelector('#hex');
  const rgb2hexButton = document.querySelector('#rgb2hex-convert');
  const hexResult = document.querySelector('#hex-result');
  const hexPreview = document.querySelector('#hex-preview');
  const hex2rgbButton = document.querySelector('#hex2rgb-convert');
  const rgbResult = document.querySelector('#rgb-result');
  const rgbPreview = document.querySelector('#rgb-preview');

  r.addEventListener('input', (event) => {
    r.value = Math.min(maxRGB, event.target.value);
  });
  g.addEventListener('input', (event) => {
    g.value = Math.min(maxRGB, event.target.value);
  });
  b.addEventListener('input', (event) => {
    b.value = Math.min(maxRGB, event.target.value);
  });

  rgb2hexButton.addEventListener('click', () => {
    hexResult.value = rgbToHex(parseInt(r.value, 10), parseInt(g.value, 10), parseInt(b.value, 10)).toUpperCase();
    hexPreview.style.backgroundColor = hexResult.value;
  });

  hex2rgbButton.addEventListener('click', () => {
    const rgbObj = hexToRgb(hex.value);
    rgbResult.value = `(${rgbObj.r}, ${rgbObj.g}, ${rgbObj.b})`;
    rgbPreview.style.backgroundColor = `rgb(${rgbObj.r}, ${rgbObj.g}, ${rgbObj.b})`;
  });
};
