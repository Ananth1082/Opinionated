const TrendingDB = (`{
  "movies": [
    {
        "id": 1,
        "title": "Portal 2",
        "posterUrl": "https://wallpaperswide.com/download/portal_8-wallpaper-1024x576.jpg"
    },
    {
        "id": 2,
        "title": "Read dead  2",
        "posterUrl": "https://images8.alphacoders.com/958/958091.jpg"
        
    },
    {
        "id": 3,
        "title": "DOoM II",
        "posterUrl": "https://wallpapers.com/images/hd/1920x1080-doom-background-9kqij1oornwjkorg.jpg"
    },
    {
        "id": 4,
        "title": "Call of Duty: Warzone",
        "posterUrl": "https://cdn.cloudflare.steamstatic.com/steam/apps/1962663/capsule_616x353.jpg?t=1701122618"
    },
    {
        "id": 5,
        "title": "GTA 5",
        "posterUrl": "https://wallpapers.com/images/featured/1080p-gta-5-f500vqmcsqkt7hzh.jpg"
    }
  ]
}`)

const TrendingDBObj = JSON.parse(TrendingDB)
export default TrendingDBObj.movies

