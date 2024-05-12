import "../Main/main.css";
import Card from "../Card/card";

function Main({data}) {

  return (
    <div className="all-cards">
      {data.map((e) => {

        return <Card key = {e.id} item={e} />;
      })}
      
    </div>
  );
}

export default Main;
