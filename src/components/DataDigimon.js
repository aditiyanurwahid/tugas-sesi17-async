import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
function DatadDigimon() {
  const [dataDigimon, setDataDigimon] = useState([]);

  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((result) => result.json())
      .then((result) => setDataDigimon(result))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {dataDigimon.map((item) => (
        <section>
          <div className="Container">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.level}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </section>
      ))}
    </>
  );
}

export default DatadDigimon;
