/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FFF',
    flex: 1,
  },
  inputContainer:{
    flexDirection: 'row',
    margin: 20,
    width: '100%',
  },
  input:{
    width: '80%',
    height: 50,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Roboto',
    backgroundColor: '#f4f3f3',
    borderRadius: 5,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  touchable:{
    width: '20%',
    marginHorizontal: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  touchableText:{
    fontSize: 50,
    color: '#FF0100',
    bottom: 10,
  },
  listItem:{
    fontSize: 22,
    lineHeight: 50,
    marginLeft: 20,
  },
  listItemCheck:{
    textDecorationLine: 'line-through',
  },
  itemsContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  buttonRemove:{
    justifyContent: 'center',
    marginRight: 20,
  },
  buttonRemoveText: {
    color: '#FF0100',
  },
});

export default styles;
