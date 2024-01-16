const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.titles');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addAnime(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const anime = {
        text,
        watched: false
    }
    items.push(anime);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    console.log(items)
    this.reset();
}

function populateList(animes = [], animeList) {
    animeList.innerHTML = animes.map((anime, i) => {
        return `
        <li>
            <input type='checkbox' data-index=${i} id='item${i}' ${anime.watched ? 'checked' : ''}/>
            <label for='item${i}'>${anime.text}<label/>
        </li>
        `;
    }).join('');
}

function toggleDone(e) {
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].watched = !items[index].watched;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addAnime);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);