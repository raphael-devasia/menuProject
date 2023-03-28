import Itemlist from "./Itemlist"

const Menu = ({items,categories}) => {


    
  return (
    <div>
        
        
      <div className="section-center">
        {items.map((item) => {
          return (
            <div>
              <Itemlist key={item.id} {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Menu