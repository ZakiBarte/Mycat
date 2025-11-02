const express = require("express")

app.use = express()
app.use(express.json())
app.use(cors());

const PORT = 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.post("/Gallery", (req, res)=>{

    res.send(
        [
  {
    "id": "4rh",
    "url": "https://cdn2.thecatapi.com/images/4rh.gif",
    "width": 500,
    "height": 270
  },
  {
    "id": "6b1",
    "url": "https://cdn2.thecatapi.com/images/6b1.jpg",
    "width": 737,
    "height": 900
  },
  {
    "id": "7ep",
    "url": "https://cdn2.thecatapi.com/images/7ep.jpg",
    "width": 500,
    "height": 335
  },
  {
    "id": "8of",
    "url": "https://cdn2.thecatapi.com/images/8of.jpg",
    "width": 1024,
    "height": 764
  },
  {
    "id": "ach",
    "url": "https://cdn2.thecatapi.com/images/ach.jpg",
    "width": 560,
    "height": 721
  },
  {
    "id": "ar3",
    "url": "https://cdn2.thecatapi.com/images/ar3.jpg",
    "width": 2309,
    "height": 1732
  },
  {
    "id": "dlq",
    "url": "https://cdn2.thecatapi.com/images/dlq.png",
    "width": 1024,
    "height": 1024
  },
  {
    "id": "MTcxMjM2Mg",
    "url": "https://cdn2.thecatapi.com/images/MTcxMjM2Mg.gif",
    "width": 450,
    "height": 287
  },
  {
    "id": "MTc5OTExMQ",
    "url": "https://cdn2.thecatapi.com/images/MTc5OTExMQ.jpg",
    "width": 500,
    "height": 333
  },
  {
    "id": "Oaoo1ky3A",
    "url": "https://cdn2.thecatapi.com/images/Oaoo1ky3A.jpg",
    "width": 3878,
    "height": 2771
  }
]
)
})