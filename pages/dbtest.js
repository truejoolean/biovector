import { connectToDatabase } from "../util/mongodb";

export default function Dbtest({ listings }) {
  return (
    <div>
      <h1>Top 1000 Jobs of All Time</h1>
      <ul>
        {listings.map((listing) => (
          <li>
            <h2>{listing.title}</h2>
            <h3>{listing.metacritic}</h3>
            <p>{listing.plot}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const listings = await db
    .collection("listings")
    .find({})
    .limit(1000)
    .toArray();

  console.log(listings)

  return {
    props: {
      listings: JSON.parse(JSON.stringify(listings)),
    },
  };
}