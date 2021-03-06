import React from 'react';
import styled from 'styled-components';
import DynamicImg from '../../atoms/Img';

const ProductLeft = () => {
    const VisualContainer = styled.div`
        width: 50%;
        height: 200px;
        float: left;
    `;

    const ExperienceContainer = styled.div`
        width: 50%;
        height: 200px;
        float: right;
        border-right: 1px solid black;
    `;

    return (
        <div style={{ width: '100%', height: '70%' }}>
            <VisualContainer>
                <DynamicImg imgSrc="http://biscuitbutton.com/web/product/medium/201806/4909_shop1_15287146404613.jpg" />
            </VisualContainer>
            <ExperienceContainer>
                <p>상품이름: 영훈이 입던 옷</p>
                <p>상품내용: 영훈님이 입던 옷</p>
                <p>가격: 300020202020$</p>
            </ExperienceContainer>
        </div>
    );
};

export default ProductLeft;