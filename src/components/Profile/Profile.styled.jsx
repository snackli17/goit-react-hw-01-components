import styled from '@emotion/styled'


export const Container = styled.div`
  width: 40%;
    height: 30%;
    margin: auto;
    display: flex;
    flex-direction: column;
    font-family: 'Itim', cursive;
    font-family: 'Montserrat', sans-serif;
    background-color: blanchedalmond;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 0.5rem;
`;

export const Description = styled.div`
   justify-content: center;
   text-align: center;
   font-size: 25px;
   color: grey;
`;

export const Name = styled.p`
    font-size: 30px;  
    color:black;
`;

export const Stats = styled.ul`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: rgb(240, 231, 231);
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
`;


export const StatsList = styled.li`
    border-top: 1px solid #d3d5e3;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    padding: 1rem 0;
    text-align: center;
     border-right: 1px solid #d3d5e3;
`;


export const Label = styled.span`
   font-size: 25px;
    font-weight: 300;
    color: grey;
    margin-bottom: 5px
`;

export const Quantity = styled.span`
 font-size: 25px;
 font-weight: 500;
 color: black;
`;
