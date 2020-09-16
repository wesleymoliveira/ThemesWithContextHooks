import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import ThemeContext from '../context/ThemeContext';
import AppTheme from './Themes';

const Footer = () => {
  const theme = useContext(ThemeContext)[0];

  return (
    <View style={AppTheme[`${theme}Container`]}>
      <Text style={{color: AppTheme[theme].textColor, fontsize: 30}}>
        Wesley M. Oliveira
      </Text>
    </View>
  );
};
export default Footer;
