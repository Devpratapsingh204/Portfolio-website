/* ==========================================================================
   HERO CANVAS ANIMATION MODULE
   Interactive floating node graph representing AI/ML, Python, C++, DSA & Software
   ========================================================================== */

export function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  const labels = ['AI', 'ML', 'Python', 'C++', 'DSA', 'Data', 'Software', 'Vite', 'React', 'SQL'];
  const nodes = [];
  const nodeCount = 28;

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 3 + 2,
      label: labels[i % labels.length],
      isLabeled: i < labels.length
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.2 * (1 - dist / 150)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // Update & draw nodes
    nodes.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = node.isLabeled ? '#38bdf8' : 'rgba(148, 163, 184, 0.4)';
      ctx.fill();

      if (node.isLabeled) {
        ctx.font = '10px Inter, sans-serif';
        ctx.fillStyle = 'rgba(148, 163, 184, 0.7)';
        ctx.fillText(node.label, node.x + 8, node.y + 4);
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}
