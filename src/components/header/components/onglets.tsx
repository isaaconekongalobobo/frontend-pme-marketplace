import ItemOnglet, { ItemOngletType } from "./itemOnglet";

const Onglets = () => {
    const tbOnglet: ItemOngletType[] = [
        {to: '/', text: 'Marketplace'},
        {to: '/success-stories', text: 'Success-stories'},
    ]
    return (
        <div className="flex ~gap-5/8">
            {
                tbOnglet.map (item => <ItemOnglet to={item.to} text={item.text} />)
            }
        </div>
    );
}

export default Onglets;
