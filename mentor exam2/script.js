const movies = [
    { title: 'Movie Title 1', rating: 8.5 },
    { title: 'Movie Title 2', rating: 7.2 },
    { title: 'Movie Title 3', rating: 9.0 },
    { title: 'Movie Title 4', rating: 6.8 },
    { title: 'Movie Title 5', rating: 7.5 },
    { title: 'Movie Title 6', rating: 8.0 },
    { title: 'Movie Title 7', rating: 7.9 },
    { title: 'Movie Title 8', rating: 8.3 },
];

document.getElementById('searchBar').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const cards = document.querySelectorAll('.movie-card');
    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
    card.style.display = title.includes(filter) ? '' : 'none';
    });
});

    function openDetails(title) {
    alert('Details for ' + title);
}

