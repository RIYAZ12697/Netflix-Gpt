const VideoTitle = ({title,overview}) =>{
    return(
        <div className=" w-screen aspect-video pt-[15%] px-12 absolute bg-gradient-to-r from-black text-white">
            <h1 className=" text-6xl  font-bold">{title}</h1>
            <p className="py-4 text-lg w-1/2">{overview}</p>
            <div>
                <button className="bg-white text-black p-4 px-12 text-xl bg-opacity-80 rounded-lg hover:bg-opacity-50">Play</button>
                <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;

// {
//     "id": 693134,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "10 Minute Preview",
//         "key": "rJxVPQRrRxc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-04-15T12:07:27.000Z",
//         "id": "661d42e6e4886001853b88bd"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Filmbooks: House Corrino",
//         "key": "J-GWW9LIOb0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-04-09T14:00:19.000Z",
//         "id": "661b1e3c15c636017e44b7a3"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "'Dune: Part Two' with Denis Villeneuve & more filmmakers | Academy Conversations",
//         "key": "6czYOLR3tBg",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-03-29T16:00:07.000Z",
//         "id": "660d79430b5fd6017c397208"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "This or That",
//         "key": "Xq6OPXGEzBo",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-03-08T07:57:42.000Z",
//         "id": "65ebc0ca28723c01643e7dd4"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Greig Fraser and the Cinematography of Dune: Part Two | The #DolbyInstitute Podcast",
//         "key": "39p8wPkhmtM",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": false,
//         "published_at": "2024-03-05T19:01:18.000Z",
//         "id": "65e798aeea4263014820ffec"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "\"#1 Movie in the World\" - Now Playing",
//         "key": "tQucjg4-Q6M",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-03-05T17:52:20.000Z",
//         "id": "65e788c1e3294301869bce57"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Denis Villeneuve on Dune: Part Two",
//         "key": "N4StKUrf2ig",
//         "site": "YouTube",
//         "size": 2160,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-03-05T15:31:45.000Z",
//         "id": "65e74923ef8b320185d84a4f"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Director Denis Villenueve talks Dune Part Two",
//         "key": "asTOTXj5AtI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": false,
//         "published_at": "2024-03-01T21:16:46.000Z",
//         "id": "65e2562141a5610148829da2"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "\"A Remarkable Achievement\" - Now Playing",
//         "key": "vVPUM0QNK4M",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-03-01T18:07:22.000Z",
//         "id": "65e788caa6c1040187e81b9d"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Behind-the-Scenes Featurette",
//         "key": "un3uQ22WOCk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2024-02-29T17:06:10.000Z",
//         "id": "65e1b026a806730184ab2718"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Love Dune More at Dolby Cinema",
//         "key": "xvKsRp_tkQs",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": false,
//         "published_at": "2024-02-28T14:38:16.000Z",
//         "id": "65e2570bdd25890186f22555"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "\"The Best Cast Assembled\" - Tickets on Sale Now",
//         "key": "xwYNVhFJyYk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-02-22T22:10:29.000Z",
//         "id": "65d7c7035f6c490185c6ac0f"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Destiny Featurette",
//         "key": "B3nTuXYxUto",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-02-19T16:40:56.000Z",
//         "id": "65d38d178de0ae0163d89e4b"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "IMAX Behind the Frame Clip [ENG SUB]",
//         "key": "gCqJEd6CftI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-02-18T04:00:17.000Z",
//         "id": "65db8b8305b549017b18040b"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "World Premiere",
//         "key": "fT4O8mbD7g0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-02-16T17:29:09.000Z",
//         "id": "65d0b9a4e62719014870c119"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Conversation With Nolan & Villeneuve | IMAX® Behind the Frame",
//         "key": "2-5KCpEhHho",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-02-09T20:00:08.000Z",
//         "id": "65dcb2db03bf840184b008df"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Extended Sneak Preview",
//         "key": "VC7-OcFvVEw",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2024-02-08T22:27:54.000Z",
//         "id": "65cd63c0efcea9017ca9c1e9"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Austin Butler is Feyd-Rautha",
//         "key": "FfN_duZkntw",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-02-01T02:31:32.000Z",
//         "id": "65bb71877646fd0184bdf6c6"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Florence Pugh is Princess Irulan",
//         "key": "EfLtStz19r0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2024-01-30T18:08:49.000Z",
//         "id": "65b9427d2f266b017de1d2f4"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Rise",
//         "key": "VHa103ITb68",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-01-29T00:00:12.000Z",
//         "id": "65b72ea51089ba017df7a26b"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Heart",
//         "key": "0QPxaoGh19I",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-01-28T20:49:35.000Z",
//         "id": "65b700030cd32a0163e60710"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Tickets on Sale Now",
//         "key": "136rl6tckGg",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2024-01-26T17:16:35.000Z",
//         "id": "65b432719ba86a00e42fe4f4"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer 3",
//         "key": "U2Qp5pL3ovA",
//         "site": "YouTube",
//         "size": 2160,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-12-12T17:00:20.000Z",
//         "id": "6578d2b3f04d0100c691f500"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer 2",
//         "key": "_YUzQa_1RCE",
//         "site": "YouTube",
//         "size": 2160,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-06-29T16:00:24.000Z",
//         "id": "649db24d5aba320139942fc7"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "Way9Dexny3w",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-05-02T15:06:46.000Z",
//         "id": "645141d9e942ee0e3a06c077"
//       }
//     ]
//   }