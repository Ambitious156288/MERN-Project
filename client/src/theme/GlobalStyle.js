import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        background-color: #66ff77;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1000 1000'%3E%3Cdefs%3E%3CradialGradient id='a' cx='500' cy='500' r='975' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2366ff77'/%3E%3Cstop offset='1' stop-color='%23240'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='500' cy='500' r='975' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23EF5' stop-opacity='1'/%3E%3Cstop offset='1' stop-color='%23EF5' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1000' height='1000'/%3E%3Cg fill='none' stroke='%23081' stroke-width='10' stroke-miterlimit='10' stroke-opacity='.2'%3E%3Cpolygon points='-500%2C500 500%2C-500 1500%2C500 500%2C1500'/%3E%3Cpolygon points='-475%2C500 500%2C-475 1475%2C500 500%2C1475'/%3E%3Cpolygon points='-450%2C500 500%2C-450 1450%2C500 500%2C1450'/%3E%3Cpolygon points='-425%2C500 500%2C-425 1425%2C500 500%2C1425'/%3E%3Cpolygon points='-400%2C500 500%2C-400 1400%2C500 500%2C1400'/%3E%3Cpolygon points='-375%2C500 500%2C-375 1375%2C500 500%2C1375'/%3E%3Cpolygon points='-350%2C500 500%2C-350 1350%2C500 500%2C1350'/%3E%3Cpolygon points='-325%2C500 500%2C-325 1325%2C500 500%2C1325'/%3E%3Cpolygon points='-300%2C500 500%2C-300 1300%2C500 500%2C1300'/%3E%3Cpolygon points='-275%2C500 500%2C-275 1275%2C500 500%2C1275'/%3E%3Cpolygon points='-250%2C500 500%2C-250 1250%2C500 500%2C1250'/%3E%3Cpolygon points='-225%2C500 500%2C-225 1225%2C500 500%2C1225'/%3E%3Cpolygon points='-200%2C500 500%2C-200 1200%2C500 500%2C1200'/%3E%3Cpolygon points='-175%2C500 500%2C-175 1175%2C500 500%2C1175'/%3E%3Cpolygon points='-150%2C500 500%2C-150 1150%2C500 500%2C1150'/%3E%3Cpolygon points='-125%2C500 500%2C-125 1125%2C500 500%2C1125'/%3E%3Cpolygon points='-100%2C500 500%2C-100 1100%2C500 500%2C1100'/%3E%3Cpolygon points='-75%2C500 500%2C-75 1075%2C500 500%2C1075'/%3E%3Cpolygon points='-50%2C500 500%2C-50 1050%2C500 500%2C1050'/%3E%3Cpolygon points='-25%2C500 500%2C-25 1025%2C500 500%2C1025'/%3E%3Cpolygon points='0%2C500 500%2C0 1000%2C500 500%2C1000'/%3E%3Cpolygon points='25%2C500 500%2C25 975%2C500 500%2C975'/%3E%3Cpolygon points='50%2C500 500%2C50 950%2C500 500%2C950'/%3E%3Cpolygon points='75%2C500 500%2C75 925%2C500 500%2C925'/%3E%3Cpolygon points='100%2C500 500%2C100 900%2C500 500%2C900'/%3E%3Cpolygon points='125%2C500 500%2C125 875%2C500 500%2C875'/%3E%3Cpolygon points='150%2C500 500%2C150 850%2C500 500%2C850'/%3E%3Cpolygon points='175%2C500 500%2C175 825%2C500 500%2C825'/%3E%3Cpolygon points='200%2C500 500%2C200 800%2C500 500%2C800'/%3E%3Cpolygon points='225%2C500 500%2C225 775%2C500 500%2C775'/%3E%3Cpolygon points='250%2C500 500%2C250 750%2C500 500%2C750'/%3E%3Cpolygon points='275%2C500 500%2C275 725%2C500 500%2C725'/%3E%3Cpolygon points='300%2C500 500%2C300 700%2C500 500%2C700'/%3E%3Cpolygon points='325%2C500 500%2C325 675%2C500 500%2C675'/%3E%3Cpolygon points='350%2C500 500%2C350 650%2C500 500%2C650'/%3E%3Cpolygon points='375%2C500 500%2C375 625%2C500 500%2C625'/%3E%3Cpolygon points='400%2C500 500%2C400 600%2C500 500%2C600'/%3E%3Cpolygon points='425%2C500 500%2C425 575%2C500 500%2C575'/%3E%3Cpolygon points='450%2C500 500%2C450 550%2C500 500%2C550'/%3E%3Cpolygon points='475%2C500 500%2C475 525%2C500 500%2C525'/%3E%3C/g%3E%3Crect fill-opacity='.2' fill='url(%23b)' width='1000' height='1000'/%3E %3C/svg%3E");
        background-attachment: fixed;
        background-size: cover;
    }

`;

export default GlobalStyle;
