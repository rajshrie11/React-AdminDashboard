import './widgetLg.css';

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
     <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                alt="ProfileImage"  
                className="widgetLgImg" 
                />
                <span className="widgetLgName">Susan Carol</span>
            </td>  
            <td className="widgetLgData">2 june 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
            <Button type="Approved" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                alt="ProfileImage"  
                className="widgetLgImg" 
                />
                <span className="widgetLgName">Susan Carol</span>
            </td>  
            <td className="widgetLgData">2 june 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
            <Button type="Declined" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                alt="ProfileImage"  
                className="widgetLgImg" 
                />
                <span className="widgetLgName">Susan Carol</span>
            </td>  
            <td className="widgetLgData">2 june 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
            <Button type="Pending" />
            </td>
          </tr>

          <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                alt="ProfileImage"  
                className="widgetLgImg" 
                />
                <span className="widgetLgName">Susan Carol</span>
            </td>  
            <td className="widgetLgData">2 june 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
            <Button type="Approved" />
            </td>
          </tr>
        </table> 
     </div>
    );
}
