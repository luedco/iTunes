const baseurl='https://itunes.apple.com/us/rss/topalbums/'

export async function getAlbumsByPopular(){
    const response = await fetch(`${baseurl}/limit=100/json`)
    const responseJSON = await  response.json()
    return responseJSON
}

export default {
    getAlbumsByPopular
}