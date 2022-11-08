import { useContext } from 'react';
import MyContext from '../../context/MyContext';
import OptionTheme from '../OptionTheme';
import * as Styled from './style';
import themeData from '../../Data/theme.json';

export default function Header() {

  const { theme } = useContext(MyContext);

    return (
        <Styled.Container 
        className='center'
        color={ theme === 'dark' ? 'white' : themeData[theme].text.text1}
        >
            <h1>calc</h1>
            <OptionTheme />
        </Styled.Container>
    )
}