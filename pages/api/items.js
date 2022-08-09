export default function handler(req, res) {
  res.status(200).json([
    {
      name: "Shannon Rodriguez",
      country: "Ukraine",
      region: "South Island",
      numberrange: 9,
    },
    {
      name: "Alma Watkins",
      country: "New Zealand",
      region: "Stockholms län",
      numberrange: 3,
    },
    {
      name: "Hanae Delgado",
      country: "India",
      region: "Luxemburg",
      numberrange: 3,
    },
    {
      name: "Brody Mcdowell",
      country: "Costa Rica",
      region: "Leningrad Oblast",
      numberrange: 5,
    },
    {
      name: "Colin Dillon",
      country: "Costa Rica",
      region: "Liguria",
      numberrange: 7,
    },
  ]);
}
