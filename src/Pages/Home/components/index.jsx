import React from 'react';
import {
    Row,
    Col
} from 'react-bootstrap';

const ProductItem = ({ data, handleAddToCart }) => {
    return (
        <div className="item-box">
            <div className="img-product-warp">
                <img src={data.img_url} className="img-product" alt="Product Item" />
            </div>
            <div className="card-detail clearfix">
                <div className="product-title">{data.name}</div>
                <div className="text-left product-price-box">{data.price}.-</div>
                {
                    data.in_stock > 0 ?
                        <div className="text-right product-price-box link-red" onClick={handleAddToCart}>สั่งเลย</div> :
                        <div className="text-right product-price-box link-red">สินค้าหมด</div>
                }
            </div>
            {data.in_stock <= 0 && <div className="no-item-backdrop"></div>}
        </div>
    );
};
export const ProductList = props => {
    return (
        <Row>
            {
                props.data.map((item, index) => {
                    return (
                        <Col sm={6} xs={12} md={4} key={`ProductList-${index}`}>
                            <ProductItem data={item} handleAddToCart={() => props.handleAddToCart(item.id, item)} />
                        </Col>
                    );
                })
            }
        </Row>
    );
};