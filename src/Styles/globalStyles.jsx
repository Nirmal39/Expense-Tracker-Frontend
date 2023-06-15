import styled,{createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
    box-sizing : border-box;
    margin:0;
    padding:0;
    font-family: 'Nunito', sans-serif;
}

`;

export const InnerLayout = styled.div`
margin:10px;
width:100%;
overflow-y:scroll;
&::-webkit-scrollbar{
  width: 0%;
}
`
  

export const Container = styled.div`
z-index: 1;
width:100%;
max-width: 1300px;
margin: 0 auto;
padding : 0 50px;

@media screen and (max-width:991px) {
    pading : 0 30px;
}
`;

export const Button = styled.button`
border-radius: 4px;
background: ${({primary})=>(primary ? "#4B59F7" : "#0467FB")};
white-space: nowrap;
padding: ${({big})=>(big ? "12px 64px" : "10px 20px")};
color: #fff;
font-size: ${({fontBig})=>(fontBig ? "20px" : "16px")};
outline: none;
border: none;
cursor: pointer;

&:hover{
    transition: all 0.3 ease-out;
    background: #fff;
    color: ${({primary})=>(primary ? "#0467FB" : "#4B59F7")};
}

@media screen and (max-width:960px) {
    width:100%;
}
`
export const ModalBack = styled.div`
background: none;
height: 50vh;
top:170px;
width: 80vw;
color:grey;
display:flex;
align-items:center;
justify-content: center;
position:absolute;
`

export const Content = styled.div`
background: #101522;
min-width:400px;
min-height:${props => props.height};
color: grey;
border: 2px solid #FFFFFF;
position: relative;

`


export const Close = styled.div`
position: absolute;
top:20px;
left:15px;
background: #fff;
color:#101522;
border-radius: 50%;
height:15px;
width:15px;
display:flex;
align-items:center;
font-weight:900;
justify-content: center;
cursor:pointer;
`

export const Text = styled.div`
position:absolute;
left:${props => props.left};
top:${props => props.top};
width:90%;
font-size:${props => props.size ? props.size : "1.20rem"};
font-weight:${props => props.weight ? props.weight : "700"};
color: ${props => props.color ? props.color : 'white'};
`

export const Form = styled.form`
position:absolute;
top:150px;
left:20px;
width:90%;
height:${props => props.height};
`

export const Label = styled.label`
position: absolute;
top:${props => props.top};
left:2.5px;
`

export const Input = styled.input`
position: absolute;
padding:8px;
width:70%;
top:${props => props.top};
right:2.5px;
border-radius:8px;
font-size:1rem;
outline: none;
background:#101522cc ;
color: grey;
`


export const ButtomWrapper = styled.div`
position: absolute;
width:30%;
height:${props => props.height};
bottom:0px;
left:10px;
display:flex;
align-items:center;
justify-content: center;
`

export const Button2 = styled.button`
padding:12px;
border-radius: 10px;
background: #101522cc;
width:100%;
height:100%;
color: white;
cursor:pointer;
font-weight:600;
font-size:1.22rem;

&:hover{
    background: white;
    color: #101522 ;
}
`



export default GlobalStyle;