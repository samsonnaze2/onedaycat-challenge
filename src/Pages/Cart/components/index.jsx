import React from 'react';
import {
    Grid,
    Row,
    Col,
    Button
} from 'react-bootstrap';

export const CartList = props => {
    return (
        <Grid>
            {
                props.data.map((item, index) => {
                    return (
                        <Row key={`CartList-${index}`} className="cart-product-row item-box">
                            <Col sm={4} xs={4} md={4} className="p0">
                                <div className="img-product-warp">
                                    <img src={item.detail.img_url} className="img-product" alt="Cart Item" />
                                </div>
                            </Col>
                            <Col sm={8} xs={8} md={8}>
                                <h3 className="text-left">{item.detail.name}</h3>
                                <h4 className="text-left">ราคา : {item.detail.price} บาท</h4>
                                <h4 className="text-left">จำนวน : {item.qty} ชิ้น</h4>
                            </Col>
                        </Row>
                    )
                })
            }
            <h1 className="text-left cart-summart-header">สรุปรายการ</h1>
            <table id="cart-summary-table">
                <tbody>
                    <tr>
                        <td className="text-left">ราคา</td>
                        <td className="text-right">{props.sumData.total} บาท</td>
                    </tr>
                    <tr>
                        <td className="text-left">ส่วนลด</td>
                        <td className="text-right">{props.sumData.discount_price} บาท</td>
                    </tr>
                    <tr>
                        <td className="text-left">ยอดรวมทั้งหมด</td>
                        <td className="text-right">{props.sumData.grand_total} บาท</td>
                    </tr>
                    <tr>
                        <td className="text-left box-credit">
                            <label>Credit Card</label>
                            <input
                                type="text"
                                className="form-control"
                                defaultValue=""
                                placeholder="xxxx-xxxx-xxxx-xxxx"
                                onChange={e => props.onChangeCardNo(e.currentTarget.value)} />
                        </td>
                        <td className="box-credit text-right">
                            <Button bsStyle="info" onClick={props.handleSubmitPayment}>ชำระเงิน</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Grid>
    );
};