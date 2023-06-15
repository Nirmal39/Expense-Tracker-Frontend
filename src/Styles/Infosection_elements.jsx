import styled from "styled-components";

export const InfoSec = styled.div`
color: #fff;
padding: 160px 0;
`

export const InfoRow = styled.div`
display: flex;
margin: -20px -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: row;
overflow:hiddden;
@media screen and (max-width:1300px){
    margin-top:-60px;
}

&::-webkit-scrollbar{
    display:none
}
`;

export const InfoCol = styled.div`
margin-bottom: 15px;
padding-right: 10px;
padding-left: 15px;
flex: 1;
max-width: 50%;
flex-basis: 50%;

@media screen and (max-width:1100px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}

@media screen and (max-width:768px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
`;

export const TextWrapper = styled.div`
max-width: 540px;
pading-top: 0;
padding-bottom: 60px;
@media screen and (max-width:1100px){
    max-width: 90%;
}
@media screen and (max-width:768px){
    padding-bottom: 65px;
    padding-left: 1rem;
}

`

export const TopLine = styled.div`
color:#a9b3c1;
font-size: 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
color: #f7f8fa;
`;

export const SubTitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: #a9b3c1;

`;

export const Image = styled.img`
margin-left:1rem;
position: relative;
height: inherit;
width:15px;
`


export const ImgWrapper = styled.div`
max-width: 555px;
display: flex;
justify-content: flex-end;

@media screen and (max-width:1100px){
    margin-left: 150px;
}
@media screen and (max-width:880px){
    margin-left: 100px;
}
@media screen and (max-width:760px){
    margin-left: 30px;
}
@media screen and (max-width:660px){
    margin-left: 0px;
}

`;

export const Img = styled.img`
padding-right: 0;
border : 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 426px;
@media screen and (max-width:1300px){
    display: inline-block;
    max-height: 359px;
}

`