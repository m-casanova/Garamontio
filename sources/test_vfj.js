// Node.js script to verify some data in a vfj file with two font masters:
// - number of layers
// - number of elements
// - autorecipe
// - component names
// - number and name of anchors
// 
// Use: node test_vfj.js <file.vfj>

const fs = require('fs');
const path = require('path');


function normalizeElement(element) {
  if (element.component) {
    return { t: 'component', n: element.component.glyphName };
  } else if (element.elementData) {
    return { t: 'elementData' };
  }
  return null;
}

function checkGlyphCompatibility(g) {
  const layers = g.layers || [];
  const [layer1, layer2] = layers;
  
  if (!layer1 || !layer2) {
    return { n: g.name, s: 'missing layers' };
  }

  const hasAutoRecipe = layer1.autoRecipe && layer2.autoRecipe;

  if (hasAutoRecipe) {
    if (layer1.autoRecipe === layer2.autoRecipe) {
      return { n: g.name, s: 'compatible' };
    } else {
      return {
        n: g.name,
        s: 'incompatible autoRecipe'
      };
    }
  } else {
    const elements1 = (layer1.elements || []).map(normalizeElement);
    const elements2 = (layer2.elements || []).map(normalizeElement);

    if (elements1.length !== elements2.length) {
      return { n: g.name, s: 'incompatible elements count' };
    }

    for (let i = 0; i < layer1.length; i++) {
      const xel1 = elements1[i];
      const xel2 = elements2[i];

      if (xel1.t !== xel2.t) {
        return {
          n: g.name,
          s: 'incompatible element type'
        };
      }

      if (xel1.t === 'component' && xel1.n !== xel2.n ) {
        return {
          n: g.name,
          s: 'incompatible component glyphName'
        };
      }
    }

    return { n: g.name, s: 'compatible' };
  }
}

function checkAnchors(vfjPath) {
  const data = JSON.parse(fs.readFileSync(vfjPath, 'utf8'));

  if (!data.font.glyphs) {
    console.error('Nessun glifo trovato nel file.');
    return;
  }

  console.log(`Number of glyphs: ${data.font.glyphs.length}`);

  for (const glyphName in data.font.glyphs) {
    const glyph = data.font.glyphs[glyphName];
	const ng = glyph.name;
    const layers = glyph.layers || [];

    if (layers.length !== 2) {
      console.log(`- ${ng} doesn't have two levels` );
      continue;
    }

    const [layer1, layer2] = layers;

    const anchors1 = (layer1.anchors || []).map(a => a.name);
    const anchors2 = (layer2.anchors || []).map(a => a.name);

    const autor1 = (layer1.autoRecipe || '');
    const autor2 = (layer2.autoRecipe || '');

    const hasAnchors = anchors1.length > 0 || anchors2.length > 0;
    const differentCount = anchors1.length !== anchors2.length;
    const differentNamesOrOrder = JSON.stringify(anchors1) !== JSON.stringify(anchors2);

    if (autor1 !== autor2 || (hasAnchors && (differentCount || differentNamesOrOrder))) {
      console.log(`\n🔤 Glyph: ${ng}`);
      console.log(`  Level 1: ${layer1.name || '(no name)'}`);
      console.log(`    Anchors: ${anchors1.length > 0 ? anchors1.join(', ') : '(none)'}`);
      console.log(`  Level 2: ${layer2.name || '(no name)'}`);
      console.log(`    Anchors: ${anchors2.length > 0 ? anchors2.join(', ') : '(none)'}`);
    }

    const result = checkGlyphCompatibility(glyph);
    if (result.s !== 'compatible') {
		console.log(`- ${result.n}: ${result.s}`);
    }

  }
}

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error('❌ Use: node test_vfj.js <file.vfj>');
  process.exit(1);
}

const filePath = path.resolve(process.cwd(), args[0]);
if (!fs.existsSync(filePath)) {
  console.error(`❌ The file does not exist: ${filePath}`);
  process.exit(1);
}

checkAnchors(filePath);
