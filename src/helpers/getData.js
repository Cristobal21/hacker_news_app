
export const getData = async ( id ) => {

    const url = `http://hn.algolia.com/api/v1/items/${ id }`
    const resp = await fetch(url)
    console.log(resp.json());

}
