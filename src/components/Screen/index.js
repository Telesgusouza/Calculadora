import * as Styled from './style';
import themeData from '../../Data/theme.json';
import { useContext } from 'react';
import MyContext from '../../context/MyContext';

export default function Screen({value}) {

    const { theme } = useContext(MyContext);

    return (
        <Styled.Container
        bg={themeData[theme].backgrounds.screen}
        color={theme === 'dark' ? 'white' : themeData[theme].text.text1}
        >
            <h2>{value}</h2>
        </Styled.Container>
    )
}