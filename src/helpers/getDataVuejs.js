
export const getDataVuejs = async ( id ) => {

    const url = `https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=0`
    const resp = await fetch(url)
    const { hits } = await resp.json()

    const dataVuejs = hits.map( data => ({
        id: data.objectID,
        author: data.author,
        title: data.story_title,
        url: data.story_url,
        created: data.created_at,
    }) )


    return dataVuejs

}
