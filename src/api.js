export async function fetchAnime({ selectedGenres }) {
    const query = `
        query ($genres: [String], $page: Int) {
            Page(page: $page, perPage: 25) {
                media(genre_in: $genres, type: ANIME, sort: POPULARITY_DESC) {
                id
                title { english }
                description(asHtml: false)
                coverImage { large }
                }
            }
        }
    `;

    const response = await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query,
            variables: {genres: selectedGenres, page: 1}
        })
    });

    const { data, errors } = await response.json();

    if(errors) {
        console.error('Errors:', errors);
        throw new Error(errors.map(e => e.message).join(', '));
    }

    return data.Page.media.map(anime => ({
        id: anime.id,
        title: anime.title.english,
        description: anime.description,
        image: anime.coverImage.large
    }));
}

export async function getAllGenres() {
    const query = `
        query {
            GenreCollection
        }
    `;

    const response = await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({ query })
    })
    .then(res => res.json())
    .then(json => json.data.GenreCollection)
    .catch(e => console.error('Error: ', e));

    return response;
}