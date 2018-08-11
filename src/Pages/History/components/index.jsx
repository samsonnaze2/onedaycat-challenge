import React from 'react';
import {
    Grid
} from 'react-bootstrap';

export const HistoryList = props => {
    return (
        <Grid>
            <table className="table" id="history-table">
                <thead>
                    <tr>
                        <th>วันที่</th>
                        <th>รายการ</th>
                        <th>จำนวน</th>
                        <th>ราคา</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((item, index) => {
                            return (item.cart_list.map((item2, index2) => {
                                return (
                                    <tr key={`HistoryList-row-${index2}`}>
                                        <td>{item.create_at}</td>
                                        <td>{item2.detail.name}</td>
                                        <td>{item2.qty} ชิ้น</td>
                                        <td>{item2.detail.price * parseInt(item2.qty, 0)} บาท</td>
                                    </tr>
                                )
                            }));
                        })
                    }
                </tbody>
            </table>
        </Grid>
    );
};