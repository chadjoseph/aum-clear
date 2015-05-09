export default function (nodes) {
  for (var i = nodes.length - 1; i > -1; i--) {
    if (nodes[i] && nodes[i].parentNode) {
      nodes[i].parentNode.removeChild(nodes[i]);
    }
  }

  if (nodes.length !== 0) {
    nodes.length = 0;
  }
}

