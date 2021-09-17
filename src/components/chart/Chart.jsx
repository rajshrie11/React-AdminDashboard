import React from 'react';
import { LineChart, XAxis, Line, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

import './chart.css';

export default function Chart({title, data, dataKey, grid}) {

return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"/>
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
          <Tooltip />
          {grid && <CartesianGrid strock="#e0dfdf" strokeDasharray="5 5"/>}
        </LineChart>

      </ResponsiveContainer>

    </div>
    );
}
