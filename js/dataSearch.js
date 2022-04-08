const allNamesDomCollections = document.querySelectorAll('.card');
const searchInput = document.getElementById('searchInput');

let names = [];

allNamesDomCollections.forEach(node => names.push(node.innerText));

searchInput.addEventListener('keyup', e => {
  let searchStr = e.target.value.toLowerCase();
  
  let matchedNames = names.filter(name =>
    name.toLowerCase().includes(searchStr)
  );
  render(matchedNames);
});

const render = matchedNames => {

  allNamesDomCollections.forEach(name => {
    matchedNames.includes(name.innerText)
      ? (name.style.display = 'block')
      : (name.style.display = 'none');
  });
};

