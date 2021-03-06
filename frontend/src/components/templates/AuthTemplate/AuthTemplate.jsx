import React from 'react';
import styled from 'styled-components';
import Jumbotron from '../../atoms/Jumbotron';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

const AuthTemplate = ({ url, LoginContainer, RegisterContainer }) => {
    const Container = styled.div`
        width: 100%;
    `;

    const HeaderContainer = styled.div`
        margin-bottom: 30px;
    `;

    const FooterContainer = styled.div`
        // border-top: 1px solid #999;
        // border-bottom: 1px solid #999;
    `;

    const RegisterWrapper = styled.div`
        width: 1200px;
        margin: 0 auto;
    `;

    const LoginWrapper = styled.div`
        width: 800px;
        height: 280px;
        margin: 0 auto;
        margin-top: 10%;
        background-color: #eee;
        position: relative;
    `;

    switch (url) {
    case '/login':
        return (
            <Container>
                <LoginWrapper>
                    { LoginContainer }
                </LoginWrapper>
            </Container>
        );
    case '/register':
        return (
            <Container>
                <HeaderContainer>
                    <Header />
                </HeaderContainer>
                <Jumbotron
                    title="회원가입"
                    height="150px"
                    backgroundColor="#eee"
                />
                <RegisterWrapper>
                    {RegisterContainer}
                </RegisterWrapper>
                <FooterContainer>
                    <Footer />
                </FooterContainer>
            </Container>
        );
    default:
        return (<div>Error</div>);
    }
};

export default AuthTemplate;