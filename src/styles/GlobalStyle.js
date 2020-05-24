import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing:border-box;
    margin:0;
    padding:0;
}
body {
    font-size:16px;
    font-family:sans-serif;
    background-color:${(prop) => prop.theme.color.blue10};
    color:${(prop) => prop.theme.color.lightText};
}
ul{
    list-style:none;
}
.pagination {
    display:flex;
    list-style:none;
    text-decoration:none;
    justify-content:center;
    align-items:flex-end;
    font-size:20px;
}
.page-item{
    color:red;
}
.page-link{
    color:${(prop) => prop.theme.color.lightText};
    margin:3px;
    text-decoration:none;
}
.page-link:hover{
    color:${(prop) => prop.theme.color.darkText};
}
.page-item.active a {
    color:${(prop) => prop.theme.color.teal};
    font-weight:600;
    font-size:22px;
}
`;
export default GlobalStyle;
