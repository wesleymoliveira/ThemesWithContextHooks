import React, {useContext} from 'react';
import {View, Text, Switch} from 'react-native';
import ThemeContext from '../context/ThemeContext';
import AppTheme from './Themes';

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <View style={AppTheme[`${themeMode}Container`]}>
      <Text style={{fontSize: 70}}>{themeMode === 'light' ? '☼' : '❂'}</Text>

      <Switch
        style={{transform: [{scaleX: 2.5}, {scaleY: 2.5}]}}
        value={themeMode !== 'light'}
        onValueChange={() =>
          setThemeMode(themeMode === 'light' ? 'dark' : 'light')
        }
      />
    </View>
  );
};

export default ThemeToggler;
