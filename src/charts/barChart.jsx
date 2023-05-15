import React from 'react';

function BarChart({year="", limit, groupBy}) {
    return <img src={`http://127.0.0.1:5001/get_bar_chart?year=${year}&limit=${limit}&groupBy=${groupBy}`} alt="Rankings chart" />;
}

export default BarChart;