import React from 'react';

function TableChart({year="", limit="10"}) {
    return <img src={`http://127.0.0.1:5001/get_top_10_table?year=${year}&limit=${limit}`} alt="Rankings table" />;
}

export default TableChart;