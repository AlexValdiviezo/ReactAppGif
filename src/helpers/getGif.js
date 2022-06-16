export const getGif = async(category) => {
        const apiQuery = await fetch('https://api.giphy.com/v1/gifs/search?q='+category+'&limit=10&api_key=tJ1HjSIHq3GyF2SBARVzSYYblCd9T4C3');
        const {data} = await apiQuery.json();
        const gifs = data.map(e=>{
            return({
                id: e.id,
                title: e.title,
                url: e.images.downsized_medium.url
            })
        })
        console.log(gifs);
        return gifs;
    }