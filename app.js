const TECH_WORDS = [
  'cloud-native', 'microservices', 'kubernetes', 'neural network', 'low-latency',
  'scalability', 'distributed ledger', 'vector database', 'CI/CD pipeline', 'zero-trust'
];

function generateLoremParagraph(count = 5) {
  let sentences = [];
  for (let i = 0; i < count; i++) {
    const w1 = TECH_WORDS[Math.floor(Math.random() * TECH_WORDS.length)];
    const w2 = TECH_WORDS[Math.floor(Math.random() * TECH_WORDS.length)];
    sentences.push(`Our architecture leverages ${w1} to accelerate ${w2} across distributed systems.`);
  }
  return sentences.join(' ');
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('genBtn');
    const out = document.getElementById('loremOutput');
    const pCount = document.getElementById('pCount');

    function render() {
      const n = parseInt(pCount.value) || 3;
      let html = '';
      for (let i = 0; i < n; i++) html += `<p>${generateLoremParagraph()}</p>`;
      out.innerHTML = html;
    }
    btn.addEventListener('click', render);
    render();
  });
}
if (typeof module !== 'undefined') module.exports = { generateLoremParagraph };
