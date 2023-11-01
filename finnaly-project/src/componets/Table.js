import {Table} from "antd";
import React from "react";

export function CustomTable({loadingData, columns, dataSource, pagination}) {
    return (
        <>
            <Table
                loading={loadingData}
                columns={columns}
                dataSource={dataSource}
                rowKey='id'
                pagination={pagination}/>
        </>
    )
}