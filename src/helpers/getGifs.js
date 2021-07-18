
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=H3S9YpjeyxA5abNZZKsMCI47X9Jk9Wod`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images: { downsized_medium } }) => {
        return {
            id,
            title,
            url: downsized_medium?.url
        }
    });
    // setImages(gifs);
    return gifs;
}
