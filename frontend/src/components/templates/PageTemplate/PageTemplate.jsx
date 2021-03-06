import React from 'react';
import styled from 'styled-components';
import Advertise from '../../atoms/Advertise';
import Footer from '../../organisms/Footer';
import ProductMain from '../../organisms/ProductMain';
import ProductMainSecond from '../../organisms/ProductMainSecond';
import BargainBlock from '../../organisms/BargainBlock';
import ProductMainFour from '../../organisms/ProductMainFour';

const PageTemplate = ({ header, visualMain, ProductStack }) => {
    const VisualMainContainer = styled.div`
        margin-top: 20px;
    `;

    const MainContainer = styled.div`
        display: flex;
        width: 100%;
    `;

    const LeftContainer = styled.div`
        width: 20%;
    `;

    const MiddleContainer = styled.div`
        width: 60%
    `;

    const RightContainer = styled.div`
        width: 20%;
    `;

    const FooterContainer = styled.div``;

    return (
        <div>
            {header}
            <VisualMainContainer>
                {visualMain}
            </VisualMainContainer>
            <MainContainer>
                <LeftContainer>
                    {ProductStack}
                    {ProductStack}
                    {ProductStack}
                    {ProductStack}
                    {ProductStack}
                </LeftContainer>
                <MiddleContainer>
                    <ProductMain title="베스트 추천 상품"/>
                    <ProductMainSecond title="추천상품" />
                    <ProductMainFour title="인기 상품" />
                    <BargainBlock />
                </MiddleContainer>
                <RightContainer>
                    <Advertise />
                    <Advertise />
                    <Advertise />
                    <Advertise />
                    <Advertise />
                </RightContainer>
            </MainContainer>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </div>
    );
};

export default PageTemplate;